import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CMSComponent from "./CMSComponent";

const LocalImplementationProject = ({ name, description }) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
    </div>
  );
};

const LocalImplementationProjects = () => {
  return (
    <div className="component LocalImplementationProjects">
      <CMSComponent
        tableName="Local Implementation Projects"
        keyField="name"
        fieldMapping={{
          name: "Name",
          order: "Order",
          description: "Description",
        }}
        sortBy={(a, b) => a.order - b.order}
        recordComponent={LocalImplementationProject}
      />
    </div>
  );
};

export default LocalImplementationProjects;
