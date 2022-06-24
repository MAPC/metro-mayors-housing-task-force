import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const normalize = x => x.split(' ').join('-').toLowerCase();

const Member = (props) => {
    const location = useLocation();
    const isOriginalContract =  location.pathname.split("/").pop() === 'original-compact';
    return (
      <div className="component Member">
        <a href={`https://datacommon.mapc.org/profile/${normalize(props.municipalityName)}/housing`}>
          <div className={`image-container ${props.color}`}>
            <h4>{props.municipalityName}</h4>
          </div>
        </a>
      {isOriginalContract &&
        <><div className="name">{props.name}</div>
        <div className="title">{props.title}</div></>
      }
      </div>
    );
}

Member.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Member;
