import { useCallback } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Table from "react-bootstrap/Table";

import CMSComponent from "./CMSComponent";
import rehypeRaw from "rehype-raw";

const LegislativePriority = ({ name, content }) => {
  const PartialTable = useCallback((props) => <Table className="programs" bordered striped hover {...props} />, []);
  return (
    <div className="cms-section">
      <div key={name} className="container">
        <h2>{name}</h2>
        <div>
          <Markdown
            components={{
              table: PartialTable,
            }}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

const LegislativePriorities = () => {
  return (
    <div className="component LegislativePriorities content-page">
      <div className="container">
        <h1>Legislative Priorities</h1>
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
    </div>
  );
};

export default LegislativePriorities;
