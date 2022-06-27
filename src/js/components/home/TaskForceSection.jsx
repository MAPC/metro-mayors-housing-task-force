import React from 'react';
import { useLocation } from 'react-router-dom';

import Member from './Member';
import taskForce from '~/_data/task-force';


const TaskForceSection = (props) => {

  const renderMembers = () => {
    return taskForce.map(member => (
      <Member
        key={member.name}
        title={member.title}
        name={member.name}
        municipalityName={member.municipalityName}
        color={member.color}
      />
    ));
  }
    const location = useLocation();
    const isOriginalContract =  location.pathname.split("/").pop() === '2018-compact';
    return (
      <section className="component TaskForceSection container">
        <h3 className="with-bar">{isOriginalContract ? 'The Task Force' : 'The Task Force Communities'}</h3>
        <div className="task-force-members">
          {renderMembers()}
        </div>
      </section>
    );
}

export default TaskForceSection;
