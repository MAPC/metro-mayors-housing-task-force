import React from 'react';


class Principle extends React.Component {

  render() {
    const { title, content } = this.props.principle;

    return (
      <div className="component Principle">
        <h3>{this.props.number} {title}</h3>
        <p>
          {content}
        </p>
      </div>
    );
  }

}

export default Principle;
