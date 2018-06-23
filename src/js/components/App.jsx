import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BestPractices from './BestPractices.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Story from './Story.jsx';


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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
