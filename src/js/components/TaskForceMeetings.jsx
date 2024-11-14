import { useAirtableCMS } from "@mapc/airtable-cms";
import Markdown from "react-markdown";
import Table from "react-bootstrap/Table";
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
    <div className="component TaskForceMeetings content-page">
      <div className="container">
        <h1>Task Force Meetings History</h1>
        <Table bordered striped hover className="meetings">
          <thead>
            <tr>
              <th>Date</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(taskForceMeetings).map((dateKey) => {
              const meeting = taskForceMeetings[dateKey];
              return (
                <tr key={dateKey}>
                  <td>{meeting.date}</td>
                  <td>
                    <Markdown remarkPlugins={[remarkGfm]}>{meeting.summary}</Markdown>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TaskForceMeetings;
