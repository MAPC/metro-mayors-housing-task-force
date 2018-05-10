import React from 'react';
import ReactDOM from 'react-dom';
import topicData from './topic-data.json';

function App() {
  return (
    <Topics />
  );
}

// function Topic(props) {
//   return (
//     <button className="topic">{props.title}</button>
//   );
// }

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="topic" onClick={() => this.setState({value: 'clicked'})}>
        {this.props.title}
      </button>
    );
  }
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
  renderTopics(topicData) {
    return topicData.map((topic) => {
        return (
          [<Topic title={topic.title} />, <SubTopics data={topic.subTopics} />]
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
