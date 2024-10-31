import CMSComponent from "./CMSComponent";

import MemberName from "./MemberName";

const TaskForceNames = () => {
  return (
    <section className="component TaskForceSection container">
      <h3 className="with-bar">The 2018 Task Force</h3>
      <div className="task-force-members">
        <CMSComponent
          tableName="Task Force Members"
          keyField="municipality"
          fieldMapping={{
            municipality: "Municipality",
            title: "Title",
            name: "Name",
            color: "Color",
            originalCompact: "Original Compact",
            currentMember: "Current Member",
          }}
          sortBy={(a, b) => a.municipality.localeCompare(b.municipality)}
          filterBy={(member) => member.originalCompact}
          recordComponent={MemberName}
        />
      </div>
    </section>
  );
};

export default TaskForceNames;
