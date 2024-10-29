import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CMSComponent from "./CMSComponent";

const PageSection = ({ section, content }) => {
  return (
    <div key={section} className="container">
      <h2>{section}</h2>
      <Markdown
        components={{
          img: (props) => {
            if (props.src.indexOf("gallery.shinyapps.io") >= 0) {
              return (
                <iframe
                  src={props.src}
                  width="1366"
                  height="768"
                  title={props.title}
                  scrolling="no"
                  frameBorder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              );
            } else {
              return <img {...props} />;
            }
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </Markdown>
    </div>
  );
};

const TrackingProgress = () => {
  return (
    <div className="component TrackingProgress">
      <CMSComponent
        tableName="Tracking Progress"
        keyField="section"
        fieldMapping={{
          section: "Section",
          content: "Content",
          order: "Order",
        }}
        sortBy={(a, b) => a.order - b.order}
        recordComponent={PageSection}
      />
      <div className="presentation-slides">
        <iframe
          src="https://slides.com/mapc/deck-7b8e5c/embed"
          width="576"
          height="420"
          scrolling="no"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default TrackingProgress;
