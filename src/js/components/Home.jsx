import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import IntroSection from './home/IntroSection.jsx';
import TaskForceSection from './home/TaskForceSection.jsx';
import CompactSection from './home/CompactSection.jsx';

class Home extends React.Component {
  render() {

    return (
      <main className="component Home">
        <IntroSection />
        <TaskForceSection />
        <CompactSection />
      </main>
    );
  }
}

Home.propTypes = {
};

export default Home;
