import { getMuniProfileURL } from "../utils";

const MemberName = ({ municipalityName, name, title }) => {
  return (
    <div className="component Member">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="name">
        <a style={{ color: "#002D40", textTransform: "uppercase", cursor: "pointer" }} href={getMuniProfileURL(municipalityName)}>
          {municipalityName}
        </a>
      </div>
    </div>
  );
};

export default MemberName;
