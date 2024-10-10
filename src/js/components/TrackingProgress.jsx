import useAirtableCMS from "../hooks/useAirtableCMS";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TrackingProgress = () => {
  const trackingProgress = useAirtableCMS({
    baseID: "app1YqNgXXkVH04nO",
    tableName: "Tracking Progress",
    keyField: "section",
    fieldMapping: {
      section: "Section",
      content: "Content",
    },
  });

  return (
    <div className="component TrackingProgress">
      {trackingProgress.map((record) => {
        return (
          <div className="container">
            <h2>{record.section}</h2>
            <Markdown 
            components={{
                img: (props) => {
                    if(props.src.indexOf("gallery.shinyapps.io") >= 0) {
                        return <iframe src={props.src} width="1366" height="768" title={props.title} scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    } else {
                        return <img {...props} />
                    }
                }
            }}
            remarkPlugins={[remarkGfm]}>{record.content}</Markdown>
          </div>
        );
      })}
      <div className="presentation-slides">
        <iframe
          src="https://slides.com/mapc/deck-7b8e5c/embed"
          width="576"
          height="420"
          scrolling="no"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default TrackingProgress;
