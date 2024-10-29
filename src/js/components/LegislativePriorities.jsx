import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CMSComponent from "./CMSComponent";

const LegislativePriority = ({ name, content }) => {
  return (
    <div key={name} className="container">
      <h2>{name}</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
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
