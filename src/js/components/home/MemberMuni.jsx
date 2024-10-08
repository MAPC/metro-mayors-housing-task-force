import React from "react";

import { getMuniProfileURL } from "../../utils";

const MemberMuni = ({municipalityName, color}) => {
  return (
    <div className="component Member">
      <a href={getMuniProfileURL(municipalityName)}>
        <div className={`image-container ${color}`}>
          <h4>{municipalityName}</h4>
        </div>
      </a>
    </div>
  );
}

export default MemberMuni;
