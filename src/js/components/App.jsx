import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BestPractices from './BestPractices';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Story from './Story';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="component App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/best-practices" component={BestPractices} />
              <Route path="/story" component={Story} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
