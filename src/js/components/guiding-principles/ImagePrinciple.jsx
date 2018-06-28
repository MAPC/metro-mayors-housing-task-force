import React from 'react';

import Principle from './Principle';


class ImagePrinciple extends React.Component {

  render() {
    return (
      <div className="component ImagePrinciple" >
        <div className="image-wrapper">
          <img src={`/assets/images/${this.props.principle.image}`} />
        </div>

        <Principle 
          number={this.props.number}
          principle={this.props.principle}
        />
      </div>
    );
  }

}

export default ImagePrinciple;
