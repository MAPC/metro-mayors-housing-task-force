import React from 'react';
import PropTypes from 'prop-types';

import BestPractice from './BestPractice';
import topicData from '~/_data/topic-data';


function Topic(props) {
  return (
    <button
      className={`topic ${props.selected?'selected':''}`}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}

class Topics extends React.Component {
  constructor(props) {
    super(props);

    this.getSelectedTopics = this.getSelectedTopics.bind(this);
    this.getSelectedSubTopics = this.getSelectedSubTopics.bind(this);

    this.state = {
      topics: topicData.reduce((topics, topic) => {
        topics[topic.title] = {
          selected: false,
          subTopics: topic.subTopics.reduce((subTopics, subTopic) => {
            return { 
              ...subTopics, 
              [subTopic.title]: {
                selected: false,
                bestPractices: subTopic.bestPractices,
              },
            };
          }, {}),
        };

        return topics;
      }, {}),
    };
  }


  getSelectedTopics() {
    const { topics } = this.state;

    return Object.keys(topics)
                 .filter(topicTitle => topics[topicTitle].selected);
  }


  getSelectedSubTopics() {
    const { topics }  = this.state;

    const selectedSubTopics = this.getSelectedTopics()
      .map(topic => topics[topic])
      .map(({ subTopics }) => (
        Object.keys(subTopics)
              .filter(subTopic => subTopics[subTopic].selected)
      ))
      .reduce((a,b) => a.concat(b), []);

    return Array.from(new Set(selectedSubTopics));
  }


  handleClick({ title }) {
    const { topics } = this.state;
    const selectedSubTopics = this.getSelectedSubTopics();

    topics[title].selected = !topics[title].selected;

    if (!topics[title].selected) {
      Object.keys(topics[title].subTopics).forEach(subTopic => {
        topics[title].subTopics[subTopic].selected = false;
      });
    }
    else {
      Object.keys(topics[title].subTopics).forEach(subTopic => {
        topics[title].subTopics[subTopic].selected = selectedSubTopics.includes(subTopic);
      });
    }
        
    this.setState({ topics });
  }


  handleSubTopicClick(subtopic) {
    const { topics } = this.state;

    this.getSelectedTopics().forEach(topic => {
      const subTopic = topics[topic].subTopics[subtopic];
      if (subTopic) {
        topics[topic].subTopics[subtopic].selected = !subTopic.selected;
      }
    });

    this.setState({ topics });
  }


  renderTopics(topicData) {
    return topicData.map(topic => {
      return (
        <Topic
          title={topic.title}
          onClick={() => this.handleClick(topic)}
          selected={this.getSelectedTopics().includes(topic.title)}
        />
      );
    });
  }


  renderSubTopics() {
    // collect all the subtopics from each selected topic
    let allSubTopics = this.getSelectedTopics()
      .map(topic => this.state.topics[topic].subTopics)
      .reduce((a, b) => ({ ...a, ...b }), {});

    return Object.keys(allSubTopics).map((subtopic, index) => {
      return (
        <Topic
          title={subtopic}
          onClick={() => this.handleSubTopicClick(subtopic)}
          selected={this.getSelectedSubTopics().includes(subtopic)}
        />
      );
    });
  }

  renderBestPractices() {
    const selectedSubTopics = this.getSelectedSubTopics();
    const allBestPractices = this.getSelectedTopics().reduce((bestPractices, topic) => {
      const subTopics = this.state.topics[topic].subTopics;

      const topicBestPractices = Object.keys(subTopics)
        .filter(subTopic => selectedSubTopics.includes(subTopic))
        .map(subTopic => subTopics[subTopic].bestPractices)
        .reduce((a,b) => a.concat(b), []);

      return [ ...bestPractices, ...topicBestPractices ];
    }, [])

    return allBestPractices.map((bestPractice) => {
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
      <div className="component Topics housing-best-practices container">
        <div className="button-container">
          <h3>TOPIC</h3>
          {this.renderTopics(topicData)}
        </div>
        <div className="button-container">
          <h3>SUBTOPIC</h3>
          {this.renderSubTopics()}
        </div>
        <div className="best-practices">
          {this.renderBestPractices()}
        </div>
      </div>
    );
  }
}

Topics.propTypes = {
};

export default Topics;
