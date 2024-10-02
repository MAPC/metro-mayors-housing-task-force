import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import BestPractices from './BestPractices';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import OriginalCompact from './OriginalCompact';
import Story from './Story';
import GuidingPrinciples from './GuidingPrinciples';
import GoogleAnalytics from './utils/GoogleAnalytics';


const App = () => {
  return (
    <Router>
      <div className="component App">
        <Header />
        <Routes>
          <Route element={<GoogleAnalytics />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/2018-compact" element={<OriginalCompact />} />
          <Route exact path="/guiding-principles" element={<GuidingPrinciples />} />
          <Route exact path="/strategies" element={<BestPractices />} />
          <Route path="/story" element={<Story />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
