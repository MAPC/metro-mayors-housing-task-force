import React from 'react';
import { Link } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import Topics from './best-practices/Topics.jsx';


class BestPractices extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <main className="component BestPractices">
          <div className="container">
            <div className="best-practice-intro">
              <h1>Best Practices</h1>

              <p>
                Elit magni provident omnis reiciendis hic velit! Iure porro ad accusamus dicta reprehenderit. Fugit animi assumenda repudiandae qui quos atque, quidem eaque Recusandae nesciunt nemo temporibus nulla veniam quis.
                Dolor aut numquam vel consectetur suscipit Sunt fugit excepturi asperiores et perspiciatis Magnam temporibus provident ipsum asperiores aspernatur dicta nihil a! Consequatur assumenda est molestiae vitae provident omnis ab Quo.
              </p>
            </div>
          </div>

          <Topics />
        </main>
      </ScrollToTop>
    );
  }
}

export default BestPractices;
