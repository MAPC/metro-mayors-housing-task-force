import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Member extends React.Component {
  render() {
    return (
      <Link
        className="component Member"
        to={this.props.municipalityName.toLowerCase()}
      >
        <img
          alt={`${this.props.title} ${this.props.name} from ${this.props.municipalityName}`}
          src={`/assets/images/${this.props.municipalityName}-small.png`}
        />
        <div className="name-title">
          <div>{this.props.title}</div>
          <div className="name">{this.props.name}</div>
          <div>{this.props.municipalityName}</div>
        </div>
      </Link>
    );
  }
}

Member.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
};

export default Member;
