import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Strategies from './best-practices/Strategies';


class BestPractices extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <main className="component BestPractices">
          <Strategies />
        </main>
      </ScrollToTop>
    );
  }
}

export default BestPractices;
