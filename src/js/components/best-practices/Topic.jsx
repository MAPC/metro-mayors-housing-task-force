import React from 'react';


class Topic extends React.Component {
  render() {
    return (
      <button
        className={`component Topic ${this.props.selected ? 'selected' : ''}`}
        onClick={() => this.props.onClick()}
      >
        {this.props.title}
      </button>
    );
  }
}

Topic.propTypes = {
};

export default Topic;
