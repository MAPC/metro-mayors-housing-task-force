import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Member from './Member';
import taskForce from '~/_data/task-force';

class TaskForceSection extends React.Component {

  render() {
    const members = taskForce.map((info) => (
      <Member
        key={info.name}
        title={info.title}
        name={info.name}
        municipalityName={info.municipalityName}
        color={info.color}
      />
    ));

    return (
      <section className="component TaskForceSection">
        <h2>{'The Task Force'}</h2>
        <div className="task-force-members">
          {members}
        </div>
      </section>
    );
  }
}

TaskForceSection.propTypes = {
};

export default TaskForceSection;
