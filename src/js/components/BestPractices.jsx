import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Topics from './best-practices/Topics.jsx';

class BestPractices extends React.Component {
  render() {
    return (
      <main className="component BestPractices">
        <Topics />
      </main>
    );
  }
}

BestPractices.propTypes = {
};

export default BestPractices;
