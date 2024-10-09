import MemberName from "./MemberName";
import { useAirtableCMS } from "../hooks/useAirtableCMS";

const TaskForceNames = () => {
  const taskForce = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Task Force Members",
    keyField: "municipality",
    fieldMapping: {
      municipality: "Municipality",
      title: "Title",
      name: "Name",
      color: "Color",
      originalCompact: "Original Compact",
      currentMember: "Current Member",
    },
    sortBy: (a, b) => a.municipality.localeCompare(b.municipality),
  });

  return (
    <section className="component TaskForceSection container">
      <h3 className="with-bar">The 2018 Task Force</h3>
      <div className="task-force-members">
        {taskForce
          // Filter any members that were not part of the original 2018 compact
          .filter((member) => member.originalCompact)
          .map((member) => (
            <MemberName key={member.name} title={member.title} name={member.name} municipalityName={member.municipality} color={member.color} />
          ))}
      </div>
    </section>
  );
};

export default TaskForceNames;
