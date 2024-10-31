import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { useAirtableCMS } from "@mapc/airtable-cms";

const LoadingIndicator = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

const ErrorMessage = ({ empty = false, tableName }) => {
  const [show, setShow] = useState(true);
  const title = empty ? "Error" : "Warning";
  const bg = empty ? "danger" : "warning";
  const textColor = empty ? "white" : "#333";
  return (
    <ToastContainer containerPosition="bottom-end" position="bottom-end" style={{ position: "fixed", zIndex: 100, margin: "1em" }}>
      <Toast onClose={() => setShow(false)} show={show} delay={10000} bg={bg} autohide>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body style={{ color: textColor }}>
          Unable to fetch data{tableName != null && ` for ${tableName}`}
          {!empty && "; displaying cached content"}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

const EmptyMessage = () => {
  return <p>No records to display.</p>;
};

const CMSComponent = ({
  tableName,
  keyField,
  fieldMapping,
  sortBy,
  filterBy,
  recordComponent,
  loadingComponent = LoadingIndicator,
  errorComponent = ErrorMessage,
  emptyComponent = EmptyMessage,
}) => {
  const {
    data,
    metadata: { done, error },
  } = useAirtableCMS({
    tableName,
    keyField,
    fieldMapping,
    sortBy,
    filterBy,
  });

  const renderedComponents = [];

  if (!done && data.length === 0) {
    // If we're still fetching updates and have nothing in the cache to display, show loadingComponent
    renderedComponents.push(React.createElement(loadingComponent));
  } else if (done) {
    if (data.length === 0) {
      if (error) {
        renderedComponents.push(React.createElement(errorComponent, { empty: true, key: "errorComponent", tableName }));
      }
      // If we have nothing in the cache to display, show emptyComponent
      renderedComponents.push(React.createElement(emptyComponent, { key: "emptyComponent" }));
    } else if (data.length > 0) {
      if (error) {
        renderedComponents.push(React.createElement(errorComponent, { empty: false, key: "errorComponent", tableName }));
      }
      // If we have something in the cache to display, show those records
      renderedComponents.push(...data.map((record) => React.createElement(recordComponent, { key: record[keyField], ...record })));
    }
  }
  return renderedComponents;
};

export default CMSComponent;
