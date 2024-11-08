import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Figure from "react-bootstrap/Figure";

import CMSComponent from "./CMSComponent";

const isShinyApp = (src) => src.startsWith("https://staging.shiny.mapc.org") || src.startsWith("https://shiny.mapc.org");

const PageSection = ({ section, content }) => {
  return (
    <div className="container">
      <h2>{section}</h2>
      <Markdown
        components={{
          img: (props) => {
            if (isShinyApp(props.src)) {
              return (
                <iframe
                  src={props.src}
                  width="1366"
                  height="768"
                  title={props.title}
                  scrolling="no"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                ></iframe>
              );
            } else {
              // FIXME: Hacking image height into the alt-text for now
              const [alt, height] = props.alt.split("|");

              return (
                <Figure
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "fit-content",
                    margin: "3rem 0rem",
                  }}
                >
                  <Figure.Image style={{ height: `${height}px` }} height={height} alt={alt} src={props.src} />
                  <Figure.Caption style={{ textAlign: "center" }}>{alt}</Figure.Caption>
                </Figure>
              );
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
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrackingProgress;
