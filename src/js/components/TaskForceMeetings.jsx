import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TaskForceMeetings = (props) => {
  const taskForceMeetings = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
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
                  {meeting.attachments.map((attachment) => (
                    <div key={attachment.id}>
                        <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                          {attachment.type.startsWith("image/") ?
                            <div>
                              <h4>Images:</h4>
                              <img src={attachment.thumbnails.small.url} alt={attachment.filename} style={{ maxWidth: "100px", marginLeft: "10px" }} />
                            </div>
                            : <div>
                              <h4>Files:</h4>
                              {attachment.filename}
                            </div> 
                          }
                        </a>
                    </div>
                  ))}
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
