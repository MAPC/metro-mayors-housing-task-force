import React from 'react';
import ReactDOM from 'react-dom';
import topicData from './topic-data.json';

function App() {
  return (
    <Topics />
  );
}

function Topic(props) {
  return (
    <button className="topic">{props.title}</button>
  );
}

function SubTopic(props) {
  return (
    <button className="sub-topic">{props.title}</button>
  );
}

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.renderSubTopics = this.renderSubTopics.bind(this)
  }

  renderTopics(topicData) {
    return topicData.map((topic) => {
        return (
          [<Topic title={topic.title} />, this.renderSubTopics(topic)]
        );
    });
  }

  renderSubTopics(topic) {
    return topic.subTopics.map((subTopic) => {
      return (
        <SubTopic title={subTopic.title} />
        );
    });
  }

  render() {
    return (
      <div className="topic-buttons">
        {this.renderTopics(topicData)}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
