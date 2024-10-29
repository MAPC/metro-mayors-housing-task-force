import CMSComponent from "../CMSComponent";
import MemberMuni from "./MemberMuni";

const TaskForceMunis = () => {
  return (
    <section className="component TaskForceSection container">
      <h3 className="with-bar">The Task Force Communities</h3>
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
          filterBy={(member) => member.currentMember}
          recordComponent={MemberMuni}
        />
      </div>
    </section>
  );
};

export default TaskForceMunis;
