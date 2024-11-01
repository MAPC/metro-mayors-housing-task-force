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
            <th className="meetings-table-header">Attachments</th>
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
                <td className="meetings-table-data">
                <h6>{meeting.attachments[0].type.startsWith("image/") ? "Images: " : "Files:"}</h6>
                  {meeting.attachments.length > 0 && (
                    <div className="meetings-attachment-container">
                      
                      {meeting.attachments.map((attachment) => (
                        <div key={attachment.id}>
                          <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                            {attachment.type.startsWith("image/") ? (
                              <img src={attachment.thumbnails.small.url} alt={attachment.filename} style={{ maxWidth: "100px", marginLeft: "10px" }} />
                            ) : (
                              <p>{attachment.filename}</p>
                            )}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
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
