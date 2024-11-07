import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CMSComponent from "./CMSComponent";
import Accordion from "react-bootstrap/Accordion";

const LegislativePriority = ({ name, content }) => {
  return (
    <div key={name} className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{name}</Accordion.Header>
          <Accordion.Body>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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
