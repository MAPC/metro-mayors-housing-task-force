import React from 'react';
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

export default BestPractices;
