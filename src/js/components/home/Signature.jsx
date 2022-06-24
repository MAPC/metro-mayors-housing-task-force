import React from 'react';
import PropTypes from 'prop-types';

const Signature = (props) => {
  return (
    <img
      className="component Signature"
      alt={`Signature of ${props.title} ${props.name} from ${props.municipalityName}`}
      src={`/assets/images/${props.municipalityName.toLowerCase()}-signature.svg`}
    />
  );
}

Signature.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  municipalityName: PropTypes.string.isRequired,
};

export default Signature;
