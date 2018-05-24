import React from 'react';
import PropTypes from 'prop-types';
import topicData from '../../../../_data/topic-data.json';

import SubTopic from './SubTopic.jsx';
import BestPractice from './BestPractice.jsx';

function Topic(props) {
  return (
    <button
      className={props.selected ? 'selected-topic' : 'topic'}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: [topicData[0]],
      selectedSubTopics: [topicData[0].subTopics[0]],
    };
  }

  handleClick(index) {
    if (this.state.selectedTopics.includes(topicData[index])) {
      let arrayIndex = this.state.selectedTopics.indexOf(topicData[index]);
      if (arrayIndex !== -1) this.setState({ selectedTopics: this.state.selectedTopics.splice(arrayIndex, 1)});
    } else {
      this.setState({ selectedTopics: [...this.state.selectedTopics, topicData[index]] });
    }
  }

  handleSubTopicClick(index) {
    this.setState({ selectedSubTopics: this.state.selectedTopics[0].subTopics[index] });
  }

  renderTopics(topicData) {
    return topicData.map((topic, index) => {
      return (
        <Topic
          title={topic.title}
          onClick={() => this.handleClick(index)}
          selected={this.state.selectedTopics.includes(topic)}
        />
      );
    });
  }

  renderSubTopics(topics) {
    // collect all the subtopics from each selected topic
    let allSubTopics = topics
      .map(topic => topic.subTopics)
      .reduce((a, b) => a.concat(b), []);
    return allSubTopics.map((subtopic, index) => {
      return (
        <SubTopic
          title={subtopic.title}
          onClick={() => this.handleSubTopicClick(index)}
          selected={subtopic === this.state.selectedSubTopics}
        />
      );
    });
  }

  renderBestPractices(subTopicData) {
    return subTopicData.bestPractices.map((bestPractice) => {
      return (
        <BestPractice
          title={bestPractice.title}
          description={bestPractice.description}
          image={bestPractice.image}
        />
      );
    });
  }

  render() {
    return (
      <div className="component Topics housing-best-practices">
        <div className="button-container">
          <div className="topic-buttons">
            <h3>Topic</h3>
            {this.renderTopics(topicData)}
          </div>
          <div className="sub-topic-buttons">
            <h3>Subtopic</h3>
            {this.renderSubTopics(this.state.selectedTopics)}
          </div>
        </div>
        <div className="best-practices">
          {this.renderBestPractices(this.state.selectedSubTopics[0])}
        </div>
      </div>
    );
  }
}

Topics.propTypes = {
};

export default Topics;
