import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LegislativePriorities = (props) => {
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
      {legislativePriorities.map((record) => {
        return (
          <div className="container">
            <h2>{record.name}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{record.content}</Markdown>
          </div>
        );
      })}
    </div>
  );
};

export default LegislativePriorities;
