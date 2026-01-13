import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Figure from "react-bootstrap/Figure";

import CMSComponent from "./CMSComponent";

const isShinyApp = (src) => src.startsWith("https://staging.shiny.mapc.org") || src.startsWith("https://shiny.mapc.org");

const PageSection = ({ section, content }) => {
  return (
    <div className="cms-section">
      <div className="container">
        <h2>{section}</h2>
        <div>
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
      </div>
    </div>
  );
};

const TrackingProgress = () => {
  return (
    <div className="component TrackingProgress content-page">
      <div className="container">
        <h1>Tracking Progress</h1>
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
      </div>
    </div>
  );
};

export default TrackingProgress;
