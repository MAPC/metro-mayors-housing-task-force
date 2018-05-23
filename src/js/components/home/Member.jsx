import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Member extends React.Component {
  render() {
    return (
      <Link to={this.props.municipalityName.toLowerCase()}>
        <img
          className="task-force-member"
          alt={`${this.props.title} ${this.props.name} from ${this.props.municipalityName}`}
          src={this.props.image}
        />
      </Link>
    );
  }
}

Member.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
};

export default Member;
