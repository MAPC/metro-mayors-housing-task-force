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

function SubTopics(props) {
  return (
    props.data.map((subTopic) => {
      return <SubTopic title={subTopic.title} />;
    })
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
    this.state = {
      selectedTopic: topicData[0],
    };
  }

  renderTopics(topicData) {
    return topicData.map((topic) => {
      return (
        <Topic
          title={topic.title}
          onClick={() => this.handleClick[i]}
        />
      );
    });
  }

  renderSubTopics(topic) {
    return <SubTopics data={topic.subTopics} />
  }

  render() {
    return (
      <div>
        <div className="topic-buttons">
          {this.renderTopics(topicData)}
        </div>
        <div className="sub-topic-buttons">
          {this.renderSubTopics(this.state.selectedTopic)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
