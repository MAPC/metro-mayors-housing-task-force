import React from 'react';
import PropTypes from 'prop-types';

class SubTopic extends React.Component {
  render() {
    return (
      <button
        className={this.props.selected ? 'selected-topic' : 'topic'}
        onClick={() => this.props.onClick()}
      >
        {this.props.title}
      </button>
    );
  }
}

SubTopic.propTypes = {
};

export default SubTopic;
