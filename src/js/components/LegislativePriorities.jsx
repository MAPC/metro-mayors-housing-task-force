import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LegislativePriorities = () => {
  const legislativePriorities = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Legislative Priorities",
    keyField: "name",
    fieldMapping: {
      name: "Name",
      content: "Content",
    },
  });

  return (
    <div className="component LegislativePriorities">
      {legislativePriorities.map((priority) => {
        return (
          <div key={priority.name} className="container">
            <h2>{priority.name}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{priority.content}</Markdown>
          </div>
        );
      })}
    </div>
  );
};

export default LegislativePriorities;
