import { useAirtableCMS } from "@mapc/airtable-cms";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TaskForceMeetings = () => {
  const { data: taskForceMeetings } = useAirtableCMS({
    tableName: "Task Force Meetings",
    keyField: "date",
    fieldMapping: {
      date: "Meeting Date",
      summary: "Summary",
      attachments: "Attachments",
    },
  });

  return (
    <div className="component TaskForceMeetings">
      <h2>Task Force Meetings History</h2>
      <table className="meetings-table">
        <thead>
          <tr>
            <th className="meetings-table-header">Date</th>
            <th className="meetings-table-header">Summary</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(taskForceMeetings).map((dateKey) => {
            const meeting = taskForceMeetings[dateKey];
            return (
              <tr key={dateKey}>
                <td className="meetings-table-data">{meeting.date}</td>
                <td className="meetings-table-data">
                  <Markdown remarkPlugins={[remarkGfm]}>{meeting.summary}</Markdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskForceMeetings;
