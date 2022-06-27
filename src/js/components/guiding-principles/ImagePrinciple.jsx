import React from 'react';

import Principle from './Principle';


const ImagePrinciple = (props) =>{

  return (
    <div className="component ImagePrinciple" >
      <div className="image-wrapper">
        <img src={`/assets/images/${props.principle.image}`} />
      </div>

      <Principle 
        number={props.number}
        principle={props.principle}
      />
    </div>
  );

}

export default ImagePrinciple;
