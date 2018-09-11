import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Topics from './best-practices/Topics.jsx';


class BestPractices extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <main className="component BestPractices">
          <Topics />
        </main>
      </ScrollToTop>
    );
  }
}

export default BestPractices;
