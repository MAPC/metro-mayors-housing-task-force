import React from 'react';

import ScrollToTop from './utils/ScrollToTop';
import IntroSection from './home/IntroSection.jsx';
import TaskForceSection from './home/TaskForceSection.jsx';
import CompactSection from './home/CompactSection.jsx';


const OriginalCompact = () => {
  return (
    <main className="component Home">
      <ScrollToTop>
        <IntroSection />
        <TaskForceSection />
        <CompactSection />
      </ScrollToTop>
    </main>
  );
}

export default OriginalCompact;
