import React from 'react';
import { useLocation } from 'react-router-dom';

import Member from './Member';
import taskForce from '~/_data/task-force';


const TaskForceSection = (props) => {
  /**
   * Check the current path that includes 2018-compact or not
   * @param {*} isOriginalContract  the current path 
   * @returns the member components need to be render
   */
  const renderMembers = (isOriginalContract) => {
    return taskForce
      .filter(member => {
        if (isOriginalContract) {
          // If it's an original contract, filter out "Watertown" members
          return member.municipalityName !== "Watertown";
        } else {
          // If it's not an original contract, filter out "Braintree" members
          return member.municipalityName !== "Braintree";
        }
      })
      .map(member => (
        <Member
          key={member.name}
          title={member.title}
          name={member.name}
          municipalityName={member.municipalityName}
          color={member.color}
        />
      ));
  };
    const location = useLocation();
    const isOriginalContract =  location.pathname.split("/").pop() === '2018-compact';
    return (
      <section className="component TaskForceSection container">
        <h3 className="with-bar">{isOriginalContract ? 'The 2018 Task Force' : 'The Task Force Communities'}</h3>
        <div className="task-force-members">
          {renderMembers(isOriginalContract)}
        </div>
      </section>
    );
}

export default TaskForceSection;
