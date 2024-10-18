import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LocalImplementationProjects = () => {
  const projects = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Local Implementation Projects",
    keyField: "name",
    fieldMapping: {
      name: "Name",
      description: "Description",
    },
  });

  return (
    <div className="component LocalImplementationProjects">
      {projects.map((project) => {
        return (
          <div key={project.name} className="container">
            <h2>{project.name}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{project.desc}</Markdown>
          </div>
        );
      })}
    </div>
  );
};

export default LocalImplementationProjects;
