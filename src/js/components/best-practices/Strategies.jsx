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

    this.renderOverlay = this.renderOverlay.bind(this);
    this.nextPractice = this.nextPractice.bind(this);
    this.previousPractice = this.previousPractice.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);

    this.state = {
      overlayPracticeIndex: 0,
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
    const uniquePractices = this.getPractices();

    return uniquePractices.map((_practice, overlayPracticeIndex) => (
      <BestPractice
        key={_practice}
        practice={this.state.practices[_practice]}
        onClick={() => this.setState({ overlayPracticeIndex })}
      />
    ));
  }

  componentDidUpdate() {
    const overlayContent = document.querySelector('.overlay-content-scrollbox');

    if (overlayContent) {
      overlayContent.scrollTo(0,0);
    }
  }


  renderOverlay() {
    const practices = this.getPractices();
    const practice = this.state.practices[practices[this.state.overlayPracticeIndex]];

    return (
      <div className="practice-overlay">
        <div className="overlay-net" onClick={this.closeOverlay}></div>

        <div className='overlay-controls'>
          <button className='slide-control' onClick={this.previousPractice}></button>
          <button className='slide-control' onClick={this.nextPractice}></button>
        </div>

        <div className="overlay-content-wrapper">
          <div className="overlay-content-scrollbox">
            <div className="overlay-content">
              <h2>{practice.title}</h2>

              <img src={`/assets/images/${practice.image}`} className="overlay-icon" />

              <div className="field">
                <h4>Location{practice.location.length > 1 ? 's' : null}</h4>
                <ul className="locations">
                  {practice.location.map(location => <li key={location}>{location}</li>)}
                </ul>
              </div>

              <div className="field">
                <h4>Guiding Principle{practice.principles.length > 1 ? 's' : null}</h4>
                <ul className="principles">
                  {practice.principles.map(principle => <li key={principle}>{principle}</li>)}
                </ul>
              </div>

              <div className="field">
                <h4>Overview</h4>
                <p>{practice.overview}</p>
              </div>

              {practice.adoption
                ? (
                  <div className="field">
                    <h4>Adoption</h4>
                    <p>{practice.adoption}</p>
                  </div>
                ) : null
              }

              {practice.who
                ? (
                  <div className="field">
                    <h4>Who</h4>
                    <p>{practice.who}</p>
                  </div>
                ) : null
              }

              {practice.what
                ? (
                  <div className="field">
                    <h4>What</h4>
                    <p>{practice.what}</p>
                  </div>
                ) : null
              }

              {practice.where
                ? (
                  <div className="field">
                    <h4>Where</h4>
                    <p>{practice.where}</p>
                  </div>
                ) : null
              }

              {practice.considerations
                ? (
                  <div className="field">
                    <h4>Considerations</h4>
                    <p>{practice.considerations}</p>
                  </div>
                ) : null
              }

              <div className="field">
                <h4>Resources</h4>
                <ul className="resources">
                  {practice.resources.map(resource => (
                    <li key={resource.title}>
                      <a target="_blank" href={resource.link}>
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  getPractices() {
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
        .reduce((a,b) => a.concat(b), []);

      return [ ...bestPractices, ...strategyBestPractices ];
    }, []);

    return Array.from(new Set(bestPractices));
  }


  nextPractice() {
    const overlayPracticeIndex = (
      this.state.overlayPracticeIndex === this.getPractices().length - 1
      ? 0
      : this.state.overlayPracticeIndex + 1
    );

    this.setState({ overlayPracticeIndex });
  }


  previousPractice() {
    const overlayPracticeIndex = (
      this.state.overlayPracticeIndex === 0
      ? this.getPractices().length
      : this.state.overlayPracticeIndex
    ) - 1;

    this.setState({ overlayPracticeIndex });
  }


  closeOverlay() {
    this.setState({ overlayPracticeIndex: null });
  }


  render() {
    return (
      <div className="component Strategies housing-best-practices container">
        {typeof this.state.overlayPracticeIndex === 'number' ? this.renderOverlay() : null}

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
