const LesiglativePriorities = (props) => {
  const lesiglativePriorities = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Lesiglative Priorities",
    keyField: "name",
    fieldMapping: {
      name: "Name",
      content: "Content",
    },
  });

  return (
    <div className="component LesiglativePriorities">
      {lesiglativePriorities.map((record) => {
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

export default LesiglativePriorities;
