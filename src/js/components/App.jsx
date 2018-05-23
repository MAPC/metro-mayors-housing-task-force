import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import BestPractices from './BestPractices.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
// import Municipality from './Municipality.jsx';
// import Story from './Story.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="component App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
};

export default App;


            // <Route path="/best-practices" component={BestPractices} />
            // <Route path="/story" component={Story} />
            // <Route path="/:municipality" component={Municipality} />
            //
            //
