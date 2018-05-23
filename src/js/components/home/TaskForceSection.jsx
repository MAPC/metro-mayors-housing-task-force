import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Member from './Member.jsx';

class TaskForceSection extends React.Component {
  constructor(props) {
    super(props);
    this.taskForceMembers = [{
      title: '',
      name: '',
      image: '',
      municipalityName: '',
    }];
  }

  render() {

    const members = this.taskForceMembers.map((info) => (
      <Member
        key={info.name}
        title={info.title}
        name={info.name}
        img={info.image}
        municipalityName={info.municipalityName}
      />
    ));

    return (
      <section className="component TaskForceSection task-force">
        <div className="task-force-members">
          {members}
        </div>
        <h2 className="task-force-text">
          {'Meet the Mayors'}
          <div className="right-bottom-border"></div>
        </h2>
      </section>
    );
  }
}

TaskForceSection.propTypes = {
};

export default TaskForceSection;
