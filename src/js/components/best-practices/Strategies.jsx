import React from 'react';

import Strategy from './Strategy';
import BestPractice from './BestPractice';
import topicData from '~/_data/topic-data';


class Strategies extends React.Component {
  constructor(props) {
    super(props);

    this.deselectStrategies = this.deselectStrategies.bind(this);
    this.deselectPrinciples = this.deselectPrinciples.bind(this);
    this.getFilteredStrategies = this.getFilteredStrategies.bind(this);
    this.getSelectedStrategies = this.getSelectedStrategies.bind(this);
    this.getSelectedPrinciples = this.getSelectedPrinciples.bind(this);
    this.withoutPrinciples = this.withoutPrinciples.bind(this);


    this.state = {
      strategies: topicData.reduce((strategies, strategy) => {
        strategies[strategy.title] = {
          selected: false,
          title: strategy.title,
          principles: strategy.practices.reduce((principles, practice) => {
            practice.principles.forEach(principle => {
              if (!principles[principle]) {
                principles[principle] = {
                  selected: false,
                  practices: [],
                };
              }

              principles[principle].practices.push(practice.title);
            });

            return principles;
          }, {}),
        };

        return strategies;
      }, {}),
      practices: topicData.reduce((practices, strategy) => {
        strategy.practices.forEach(practice => {
          practices[practice.title] = practice;
        });

        return practices;
      }, {}),
    };

    console.log(this.state);
  }


  getSelectedStrategies() {
    const { strategies } = this.state;

    return Object.keys(strategies)
                 .filter(strategy => strategies[strategy].selected);
  }


  getSelectedPrinciples() {
    const { strategies } = this.state;

    const selectedPrinciples = this.getFilteredStrategies()
      .map(strategy => strategies[strategy])
      .map(({ principles }) => (
        Object.keys(principles)
              .filter(principle => principles[principle].selected)
      ))
      .reduce((a,b) => a.concat(b), []);

    return Array.from(new Set(selectedPrinciples));
  }


  getFilteredStrategies() {
    const selectedStrategies = this.getSelectedStrategies();
    return selectedStrategies.length > 0 ? selectedStrategies : Object.keys(this.state.strategies);
  }


  withoutPrinciples() {
    const { strategies } = JSON.parse(JSON.stringify(this.state)); // Deep copy

    for (let strategy in strategies) {
      for (let principle in strategies[strategy].principles) {
        strategies[strategy].principles[principle].selected = false;
      }
    }

    return strategies;
  }


  handleStrategyClick(strategyTitle) {
    const selectedPrinciples = this.getSelectedPrinciples();
    const selectedStrategies = this.getSelectedStrategies();
    const { strategies } = this.state;
    const strategy = strategies[strategyTitle];

    strategy.selected = !strategy.selected;

    for (let principle in strategy.principles) {
      strategy.principles[principle].selected = (
        !strategy.selected ? false : selectedPrinciples.includes(principle)
      );
    }

    const unselectedStrategies = Object.keys(strategies).filter(
      strategy => strategy !== strategyTitle && !selectedStrategies.includes(strategy)
    );

    unselectedStrategies.forEach(strategy => {
      for (let principle in strategies[strategy].principles) {
        strategies[strategy].principles[principle].selected = false;
      }
    });

    this.setState({ strategies });
  }


  handlePrincipleClick(principleTitle) {
    const { strategies } = this.state;
    const selectedPrinciples = this.getSelectedPrinciples();

    this.getFilteredStrategies().forEach(strategy => {
      const principle = strategies[strategy].principles[principleTitle];

      if (principle) {
        principle.selected = !principle.selected ? true : selectedPrinciples.includes(principleTitle);
      }
    });

    this.setState({ strategies });
  }


  deselectStrategies() {
    const { strategies } = this.state;

    for (let strategy in strategies) {
      strategies[strategy].selected = false;
    }

    this.setState({ strategies });
  }


  deselectPrinciples() {
    this.setState({
      strategies: this.withoutPrinciples(),
    });
  }


  renderStrategies(topicData) {
    const strategies = topicData.map(strategy => {
      return (
        <Strategy
          key={strategy.title}
          title={strategy.title}
          onClick={() => this.handleStrategyClick(strategy.title)}
          selected={this.getSelectedStrategies().includes(strategy.title)}
        />
      );
    });

    return [
      <Strategy
        key={'All'}
        title={'All'}
        onClick={() => this.deselectStrategies()}
        selected={this.getSelectedStrategies().length === 0}
      />,
      ...strategies,
    ];
  }


  renderPrinciples() {
    const selectedStrategies = this.getSelectedStrategies();
    const selectedPrinciples = this.getSelectedPrinciples();
    const strategies = this.getFilteredStrategies();

    const uniquePrinciples = strategies.map(topic => this.state.strategies[topic].principles)
                                  .reduce((a, b) => ({ ...a, ...b }), {});

    const principles = Object.keys(uniquePrinciples).map(principle => {
      return (
        <Strategy
          key={principle}
          title={principle}
          onClick={() => this.handlePrincipleClick(principle)}
          selected={selectedPrinciples.includes(principle)}
        />
      );
    });

    return [
      <Strategy
        key={'All'}
        title={'All'}
        onClick={() => this.deselectPrinciples()}
        selected={selectedPrinciples.length === 0}
      />,
      ...principles,
    ];
  }


  renderBestPractices() {
    const strategies = this.getFilteredStrategies();
    const selectedPrinciples = this.getSelectedPrinciples();

    const bestPractices = strategies.reduce((bestPractices, strategy) => {
      const { principles } = { ...this.state.strategies[strategy] };

      const filteredPrinciples = (
        selectedPrinciples.length > 0
        ? Object.keys(principles).filter(principle => selectedPrinciples.includes(principle))
        : Object.keys(principles)
      );

      const strategyBestPractices = filteredPrinciples
        .map(principle => principles[principle].practices)
        .reduce((a,b) => a.concat(b), [])
        .map(practice => ({ title: practice, image: null }));


      strategyBestPractices.forEach(practice => practice.image = `${strategy.toLowerCase().split(' ').join('-')}.svg`);

      return [ ...bestPractices, ...strategyBestPractices ];
    }, []);


    return Array.from(new Set(bestPractices)).map(_practice => {
      const practice = this.state.practices[_practice.title];

      return (
        <BestPractice
          practice={practice}
          image={_practice.image}
        />
      );
    });
  }


  render() {
    return (
      <div className="component Strategies housing-best-practices container">
        <div className="button-container">
          <h3>STRATEGY</h3>
          {this.renderStrategies(topicData)}
        </div>
        <div className="button-container">
          <h3>Principles</h3>
          {this.renderPrinciples()}
        </div>
        <div className="best-practices">
          {this.renderBestPractices()}
        </div>
      </div>
    );
  }
}

export default Strategies;
