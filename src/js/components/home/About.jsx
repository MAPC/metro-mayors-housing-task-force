import { Link } from "react-router-dom";
// import { useAirtableCMS } from "@mapc/airtable-cms";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// import { getMuniProfileURL } from "../../utils";
import ScrollToTop from "../utils/ScrollToTop";
import CMSComponent from "../CMSComponent";

// FIXME: Hard-coding muni names for now, but pull this from task force members table
const munis = new Set([
  "Arlington",
  "Boston",
  "Braintree",
  "Brookline",
  "Cambridge",
  "Chelsea",
  "Everett",
  "Malden",
  "Medford",
  "Melrose",
  "Newton",
  "Quincy",
  "Revere",
  "Somerville",
  "Watertown",
  "Winthrop",
]);

const AboutSection = ({ title, content, showTitle }) => {
  return (
    <div className="sub-section">
      <div className={`container ${title === "Guiding Principles" ? "columned" : ""}`}>
        {title != null && title !== "" && showTitle && <h3 id={title.toLowerCase()}>{title}</h3>}
        {title === "Guiding Principles" && (
          <Link className="box-link" to={"/guiding-principles"}>
            <img
              src="/assets/images/home-housing.jpg"
              alt="An image of a person walking in front of a tall wooden fence, with colorful houses behind it and a blue sky above"
            />

            <div className="box-content">
              <span className="large">Guiding Principles</span>
              <span className="small">Explore the principles &gt;</span>
            </div>
          </Link>
        )}
        <div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ children, href }) => {
                if (munis.has(children)) {
                  let color = "yellow"; // FIXME: Pull this from task force members table
                  return (
                    <span key={children} className="profile-link">
                      <a className={color} href={href}>
                        {children}
                      </a>
                    </span>
                  );
                }

                return <a href={href}>{children}</a>;
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <ScrollToTop>
      <div className="component About content-page">
        <h1 className="container huge">About</h1>
        <CMSComponent
          tableName="About"
          fieldMapping={{
            title: "Section Title",
            content: "Content",
            showTitle: "Show Title",
            order: "Order",
          }}
          sortBy={(a, b) => a.order - b.order}
          recordComponent={AboutSection}
        />
      </div>
    </ScrollToTop>
  );
};

export default About;
