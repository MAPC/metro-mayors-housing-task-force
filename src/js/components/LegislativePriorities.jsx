import { useCallback } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Table from "react-bootstrap/Table";

import CMSComponent from "./CMSComponent";

const LegislativePriority = ({ name, content }) => {
  const PartialTable = useCallback((props) => <Table bordered hover {...props} />, []);
  return (
    <div key={name} className="container">
      <h2>{name}</h2>
      <Markdown
        components={{
          table: PartialTable,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </Markdown>
    </div>
  );
};

const LegislativePriorities = () => {
  return (
    <div className="component LegislativePriorities">
      <CMSComponent
        tableName="Legislative Priorities"
        keyField="name"
        fieldMapping={{
          name: "Name",
          order: "Order",
          content: "Content",
        }}
        sortBy={(a, b) => a.order - b.order}
        recordComponent={LegislativePriority}
      />
    </div>
  );
};

export default LegislativePriorities;
