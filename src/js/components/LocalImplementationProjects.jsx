const LocalImplementationProjects = (props) => {
  const lip = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Local Implementation Projects",
    keyField: "name",
    fieldMapping: {
      name: "Name",
      desc: "Description",
      notes: "Notes"
    },
  });

  return (
    <div className="component LocalImplementationProjects">
      {lip.map((record) => {
        return (
          <div className="container">
            <h2>{record.name}</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{record.desc}</Markdown>
          </div>
        );
      })}
    </div>
  );
};

export default LocalImplementationProjects;
