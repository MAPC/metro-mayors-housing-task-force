import { getMuniProfileURL } from "../../utils";

const MemberMuni = ({ municipality, color }) => {
  return (
    <div className="component Member">
      <a href={getMuniProfileURL(municipality)}>
        <div className={`image-container ${color}`}>
          <h4>{municipality}</h4>
        </div>
      </a>
    </div>
  );
};

export default MemberMuni;
