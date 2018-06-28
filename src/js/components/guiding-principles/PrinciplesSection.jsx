import React from 'react';

import Principle from './Principle';
import ImagePrinciple from './ImagePrinciple';

import principles from '~/_data/principles';


class PrinciplesSection extends React.Component {

  renderPrinciples() {
    return principles.map((principle, i) => {
      return (
        <li>
          <div className="container">
            {
              (principle.image)
              ? (<ImagePrinciple 
                  key={principle.title}
                  number={i+1}
                  principle={principle} 

                />)
              : (<Principle 
                  key={principle.title}
                  number={i+1}
                  principle={principle} 
                />)
            }
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="principles-section" >
        <ol className="principles-list"> 
          {this.renderPrinciples()}
        </ol>
      </section>
    );
  }

}

export default PrinciplesSection;
