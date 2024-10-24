import { useMemo } from "react";
import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import { useTable } from "react-table";
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

  console.log(taskForceMeetings);

  // const columns = useMemo(
  //   () => [
  //     { Header: "Meeting Date", accessor: "date" },
  //     { Header: "Summary", accessor: "summary" },
  //     { Header: "Attachments", accessor: "attachments" },
  //   ],
  //   [],
  // );

  // const data = useMemo(
  //   () => [
  //     { id: 1, name: 'John Doe', age: 28 },
  //     { id: 2, name: 'Jane Smith', age: 34 },
  //     { id: 3, name: 'Alice Johnson', age: 22 },
  //   ],
  //   []
  // );

  //const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  // return (
  //   <div className="table-container">
  //     <table {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map((headerGroup) => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((column) => (
  //               <th {...column.getHeaderProps()} key={column.id}>{column.render("Header")}</th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map((row) => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()} key={row.id}>
  //               {row.cells.map((cell) => (
  //                 <td {...cell.getCellProps()} key={cell.column.id}>{cell.render("Cell")}</td>
  //               ))}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );

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
                           <img src={attachment.thumbnails.small.url} alt={attachment.filename} style={{ maxWidth: "100px", marginLeft: "10px" }} /> : (attachment.filename)
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
