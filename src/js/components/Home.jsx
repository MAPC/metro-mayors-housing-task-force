import React from 'react';

import ScrollToTop from './utils/ScrollToTop';
import IntroSection from './home/IntroSection.jsx';
import TaskForceMunis from './home/TaskForceMunis.jsx';
import CompactSection from './home/CompactSection.jsx';
import About from './home/About';


const Home = () => {

  return (
    <main className="component Home">
      <ScrollToTop>
        <IntroSection />
        <TaskForceMunis />
        <About />
      </ScrollToTop>
    </main>
  );
}

export default Home;
