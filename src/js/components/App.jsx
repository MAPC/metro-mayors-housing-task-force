import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BestPractices from './BestPractices';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Story from './Story';
import GuidingPrinciples from './GuidingPrinciples';
import GA from './utils/GoogleAnalytics';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="component App">
          <GA.RouteTracker />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/guiding-principles" component={GuidingPrinciples} />
            <Route exact path="/strategies" component={BestPractices} />
            <Route path="/story" component={Story} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
