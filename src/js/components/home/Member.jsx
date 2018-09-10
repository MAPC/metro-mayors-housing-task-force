import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import colors from '~/_data/colors';


class Member extends React.Component {

  render() {
    return (
      <div className="component Member">
        <div className={`image-container ${this.props.color}`}>
          <img
            alt={`${this.props.title} ${this.props.name} from ${this.props.municipalityName}`}
            src={`/assets/images/${this.props.municipalityName.toLowerCase()}.png`}
          />
          <h4>{this.props.municipalityName}</h4>
        </div>

        <div className="name">{this.props.name}</div>
        <div className="title">{this.props.title}</div>
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
