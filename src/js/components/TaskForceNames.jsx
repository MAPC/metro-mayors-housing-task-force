import Spinner from "react-bootstrap/Spinner";
import { useAirtableCMS } from "@mapc/airtable-cms";

import MemberName from "./MemberName";

const TaskForceNames = () => {
  const {
    data: taskForce,
    metadata: { loading },
  } = useAirtableCMS({
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

  let sectionContent;
  if (loading && taskForce.length === 0) {
    // If this is the first time we're loading content, show the loading indicator
    sectionContent = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    sectionContent = taskForce
      // Filter any members that were not part of the original 2018 compact
      .filter((member) => member.originalCompact)
      .map((member) => <MemberName key={member.name} title={member.title} name={member.name} municipalityName={member.municipality} color={member.color} />);
  }

  return (
    <section className="component TaskForceSection container">
      <h3 className="with-bar">The 2018 Task Force</h3>
      <div className="task-force-members">{sectionContent}</div>
    </section>
  );
};

export default TaskForceNames;
