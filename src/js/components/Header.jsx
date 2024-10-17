import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = ({ story, light, shadowed, color }) => {
  const classes = ["component", "Header", "container"];
  if (story) {
    classes.push("story");
  }
  if (light) {
    classes.push("light");
  }
  if (shadowed) {
    classes.push("shadowed");
  }
  if (color) {
    classes.push(color);
  }

  return (
    <header className={classes.join(" ")}>
      <div className="title">
        <Link to="/">
          <img src="/assets/images/logo.svg" />
          <h1 className="unstyled">
            Metro Mayors Coalition <br />
            Regional Housing Task Force
          </h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/strategies"}>Strategies</Link>
          </li>
          <li>
            <Link to={"/tracking-progress"}>Tracking Progress</Link>
          </li>
          <li>
            <Link to={"/local-implementation-projects"}>Local Implementation Projects</Link>
          </li>
          <li>
            <Link to={"/legislative-priorities"}>Legislative Priorities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
