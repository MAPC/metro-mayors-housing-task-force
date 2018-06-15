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
    this.getFilteredTopics = this.getFilteredTopics.bind(this);
    this.getSelectedTopics = this.getSelectedTopics.bind(this);
    this.getSelectedSubTopics = this.getSelectedSubTopics.bind(this);
    this.withoutSubTopics = this.withoutSubTopics.bind(this);

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
                 .filter(topic => topics[topic].selected);
  }


  getSelectedSubTopics() {
    const { topics } = this.state;

    const selectedSubTopics = this.getFilteredTopics()
      .map(topic => topics[topic])
      .map(({ subTopics }) => (
        Object.keys(subTopics)
              .filter(subTopic => subTopics[subTopic].selected)
      ))
      .reduce((a,b) => a.concat(b), []);

    return Array.from(new Set(selectedSubTopics));
  }


  getFilteredTopics() {
    const selectedTopics = this.getSelectedTopics();
    return selectedTopics.length > 0 ? selectedTopics : Object.keys(this.state.topics);
  }


  withoutSubTopics() {
    const { topics } = JSON.parse(JSON.stringify(this.state)); // Deep copy

    for (let topic in topics) {
      for (let subTopic in topics[topic].subTopics) {
        topics[topic].subTopics[subTopic].selected = false;
      }
    }

    return topics;
  }


  handleTopicClick(topicTitle) {
    const selectedSubTopics = this.getSelectedSubTopics();
    const selectedTopics = this.getSelectedTopics();
    const topics = this.state.topics;
    const topic = topics[topicTitle];

    topic.selected = !topic.selected;

    for (let subTopic in topic.subTopics) {
      topic.subTopics[subTopic].selected = (
        !topic.selected ? false : selectedSubTopics.includes(subTopic)
      );
    }

    const unselectedTopics = Object.keys(topics).filter(
      topic => topic !== topicTitle && !selectedTopics.includes(topic)
    );

    unselectedTopics.forEach(topic => {
      for (let subTopic in topics[topic].subTopics) {
        topics[topic].subTopics[subTopic].selected = false;
      }
    });

    this.setState({ topics });
  }


  handleSubTopicClick(subtopic) {
    const { topics } = this.state;
    const selectedSubTopics = this.getSelectedSubTopics();

    this.getFilteredTopics().forEach(topic => {
      const subTopic = topics[topic].subTopics[subtopic];

      if (subTopic) {
        subTopic.selected = !subTopic.selected ? true : selectedSubTopics.includes(subTopic.title);
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
    this.setState({
      topics: this.withoutSubTopics(),
    });
  }


  renderTopics(topicData) {
    const topics = topicData.map(topic => {
      return (
        <Topic
          key={topic.title}
          title={topic.title}
          onClick={() => this.handleTopicClick(topic.title)}
          selected={this.getSelectedTopics().includes(topic.title)}
        />
      );
    });

    return [
      <Topic
        key={'All'}
        title={'All'}
        onClick={() => this.deselectTopics()}
        selected={this.getSelectedTopics().length === 0}
      />,
      ...topics,
    ];
  }


  renderSubTopics() {
    const selectedTopics = this.getSelectedTopics();
    const selectedSubTopics = this.getSelectedSubTopics();
    const topics = this.getFilteredTopics();

    const uniqueSubTopics = topics.map(topic => this.state.topics[topic].subTopics)
                                  .reduce((a, b) => ({ ...a, ...b }), {});

    const subTopics = Object.keys(uniqueSubTopics).map(subtopic => {
      return (
        <Topic
          key={subtopic}
          title={subtopic}
          onClick={() => this.handleSubTopicClick(subtopic)}
          selected={selectedSubTopics.includes(subtopic)}
        />
      );
    });

    return [
      <Topic
        key={'All'}
        title={'All'}
        onClick={() => this.deselectSubTopics()}
        selected={selectedSubTopics.length === 0}
      />,
      ...subTopics,
    ];
  }


  renderBestPractices() {
    const topics = this.getFilteredTopics();
    const selectedSubTopics = this.getSelectedSubTopics();

    const bestPractices = topics.reduce((bestPractices, topic) => {
      const { subTopics } = { ...this.state.topics[topic] };

      const filteredSubTopics = (
        selectedSubTopics.length > 0
        ? Object.keys(subTopics).filter(subTopic => selectedSubTopics.includes(subTopic))
        : Object.keys(subTopics)
      );

      const topicBestPractices = filteredSubTopics.map(subTopic => subTopics[subTopic].bestPractices)
                                                  .reduce((a,b) => a.concat(b), []);

      return [ ...bestPractices, ...topicBestPractices ];
    }, []);

    return bestPractices.map(bestPractice => {
      return (
        <BestPractice
          key={bestPractice.title}
          title={bestPractice.title}
          description={bestPractice.description}
          image={bestPractice.image}
          color={bestPractice.color}
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
