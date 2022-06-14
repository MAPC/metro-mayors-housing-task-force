import React from 'react';
import PropTypes from 'prop-types';

const normalize = x => x.split(' ').join('-').toLowerCase();

class Member extends React.Component {

  render() {
    const isOriginalContract =  window.location.href.split("/").pop() === 'original-compact';
    return (
      <div className="component Member">
        <a href={`https://datacommon.mapc.org/profile/${normalize(this.props.municipalityName)}/housing`}>
          <div className={`image-container ${this.props.color}`}>
            <h4>{this.props.municipalityName}</h4>
          </div>
        </a>
      {isOriginalContract &&
        <><div className="name">{this.props.name}</div>
        <div className="title">{this.props.title}</div></>
      }
      </div>
    );
  }

}

Member.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Member;
