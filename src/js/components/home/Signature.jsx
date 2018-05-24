import React from 'react';
import PropTypes from 'prop-types';

class Signature extends React.Component {
  render() {
    return (
      <img
        className="component Signature"
        alt={`Signature of ${this.props.title} ${this.props.name} from ${this.props.municipalityName}`}
        src={`/assets/images/${this.props.municipalityName.toLowerCase()}-signature.svg`}
      />
    );
  }
}

Signature.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
};

export default Signature;
