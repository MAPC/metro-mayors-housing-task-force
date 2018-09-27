import React from 'react';


class Strategy extends React.Component {
  render() {
    return (
      <button
        className={`component Strategy ${this.props.selected ? 'selected' : ''}`}
        onClick={() => this.props.onClick()}
      >
        {this.props.title}
      </button>
    );
  }
}

Strategy.propTypes = {
};

export default Strategy;
