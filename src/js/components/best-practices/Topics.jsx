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

    this.deselectTopics = this.deselectTopics.bind(this);
    this.deselectSubTopics = this.deselectSubTopics.bind(this);
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


  handleTopicClick(topic) {
    const { topics } = this.state;
    const selectedSubTopics = this.getSelectedSubTopics();

    topics[topic].selected = !topics[topic].selected;

    for (let subTopic in topics[topic].subTopics) {
      topics[topic].subTopics[subTopic].selected = (
        !topics[topic].selected ? false : selectedSubTopics.includes(subTopic)
      );
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


  deselectTopics() {
    const { topics } = this.state;

    for (let topic in topics) {
      topics[topic].selected = false;
    }

    this.setState({ topics }); 
  }


  deselectSubTopics() {
    const { topics } = this.state;

    for (let topic in topics) {
      for (let subTopic in topics[topic].subTopics) {
        topics[topic].subTopics[subTopic].selected = false;
      }
    }

    this.setState({ topics });
  }


  renderTopics(topicData) {
    const topics = topicData.map(topic => {
      return (
        <Topic
          title={topic.title}
          onClick={() => this.handleTopicClick(topic.title)}
          selected={this.getSelectedTopics().includes(topic.title)}
        />
      );
    });

    return [
      <Topic
        title={'All'}
        onClick={() => this.deselectTopics()}
        selected={this.getSelectedTopics().length === 0}
      />,
      ...topics, 
    ];
  }


  renderSubTopics() {
    // collect all the subtopics from each selected topic
    let allSubTopics = this.getSelectedTopics()
      .map(topic => this.state.topics[topic].subTopics)
      .reduce((a, b) => ({ ...a, ...b }), {});

    const subTopics = Object.keys(allSubTopics).map((subtopic, index) => {
      return (
        <Topic
          title={subtopic}
          onClick={() => this.handleSubTopicClick(subtopic)}
          selected={this.getSelectedSubTopics().includes(subtopic)}
        />
      );
    });

    return [
      <Topic
        title={'All'}
        onClick={() => this.deselectSubTopics()}
        selected={this.getSelectedSubTopics().length === 0}
      />,
      ...subTopics,
    ];
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
