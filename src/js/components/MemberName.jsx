import { getMuniProfileURL } from "../utils";

const MemberName = ({ municipality, name, title }) => {
  return (
    <div className="component Member">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="name">
        <a style={{ color: "#002D40", textTransform: "uppercase", cursor: "pointer" }} href={getMuniProfileURL(municipality)}>
          {municipality}
        </a>
      </div>
    </div>
  );
};

export default MemberName;
