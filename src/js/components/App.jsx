import React from 'react';
// import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import BestPractices from './BestPractices';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import OriginalCompact from './OriginalCompact';
import About from './About';
import Story from './Story';
import GuidingPrinciples from './GuidingPrinciples';
import GA from './utils/GoogleAnalytics';


const App = () => {
  // render() {
  //   let location = useLocation();
  //   React.useEffect(() => {
  //     ga('send', 'pageview');
  //   }, [location]);
    // usePageViews();
    return (
      <Router>
        <div className="component App">
          <GA.RouteTracker />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/original-compact" component={OriginalCompact} />
            <Route path="/about" component={About} />
            <Route exact path="/guiding-principles" component={GuidingPrinciples} />
            <Route exact path="/strategies" component={BestPractices} />
            <Route path="/story" component={Story} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  // }
}

export default App;
