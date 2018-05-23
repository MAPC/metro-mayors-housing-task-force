import React from 'react';
import PropTypes from 'prop-types';
import topicData from '../../../../_data/topic-data.json';

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

function SubTopics(props) {
  return (
    props.data.map((subTopic) => {
      return <SubTopic title={subTopic.title} />;
    })
  );
}

function SubTopic(props) {
  return (
    <button
      className={props.selected ? 'selected-topic' : 'topic'}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}

function BestPractices(props) {
  return (
    props.data.map((bestPractice) => {
      return (
        <BestPractice
          title={bestPractice.title}
          description={bestPractice.description}
          image={bestPractice.image}
        />);
    })
  );
}

function BestPractice(props) {
  return (
    <div className="best-practice">
      <div className="best-practice-description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className="best-practice-image">
        <img src={props.image} />
      </div>
    </div>
  );
}

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: topicData[0],
      selectedSubTopic: topicData[0].subTopics[0],
    };
  }

  handleClick(index) {
    this.setState({selectedTopic: topicData[index] });
  }

  handleSubTopicClick(index) {
    this.setState({selectedSubTopic: this.state.selectedTopic.subTopics[index]});
  }

  renderTopics(topicData) {
    return topicData.map((topic, index) => {
      return (
        <Topic
          title={topic.title}
          onClick={() => this.handleClick(index)}
          selected={topic === this.state.selectedTopic}
        />
      );
    });
  }

  renderSubTopics(topic) {
    return topic.subTopics.map((subtopic, index) => {
      return (
        <SubTopic
          title={subtopic.title}
          onClick={() => this.handleSubTopicClick(index)}
          selected={subtopic === this.state.selectedSubTopic}
        />
      );
    });
  }

  renderBestPractices() {
    return <BestPractices data={this.state.selectedSubTopic.bestPractices} />;
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
            {this.renderSubTopics(this.state.selectedTopic)}
          </div>
        </div>
        <div className="best-practices">
          {this.renderBestPractices(this.state.selectedSubTopic)}
        </div>
      </div>
    );
  }
}

Topics.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.boolean.isRequired,
};

export default Topics;
