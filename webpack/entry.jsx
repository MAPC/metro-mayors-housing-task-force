import React from 'react';
import ReactDOM from 'react-dom';
import topicData from './topic-data.json';

function App() {
  return (
    <Topics />
  );
}

class Topics extends React.Component {
  render() {
    return (
      <div className="topic-buttons">
        {
          topicData.map(function(topic) {
              const subTopicButtons = topic.subTopics.map(function(subTopic) {
                return (
                  <button className='sub-topic'>{subTopic.title}</button>
                );
              })
              return (
                [<button className='topic'>{topic.title}</button>, subTopicButtons]
              );
          })
        }
      </div>
    );
  }
}

// this.props.data.participants.map(function(player) {
//    return <li key={player.championId}>{player.summonerName}</li>

// function TopicButton() {
//   return (
//     <button className="topic-button">Topic Name</button>
//   );
// }

// function BestPractice() {
//   return (
//     <div>
//       <div className="best-practice">
//         <h2>This is a best practice</h2>
//         <p>This is the text of the best practice</p>
//       </div>

//       <div className="best-practice-image">
//         <img alt="an interesting thing" src="" />
//       </div>
//     </div>
//   );
// }

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
