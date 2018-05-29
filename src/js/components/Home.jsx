import React from 'react';
import PropTypes from 'prop-types';

import IntroSection from './home/IntroSection.jsx';
import TaskForceSection from './home/TaskForceSection.jsx';
import CompactSection from './home/CompactSection.jsx';

class Home extends React.Component {
  render() {
    return (
      <main className="component Home">
        <TaskForceSection />
        <IntroSection />
        <CompactSection />
      </main>
    );
  }
}

Home.propTypes = {
};

export default Home;
