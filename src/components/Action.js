import React from 'react';

const Action = (props) => {
  return (
      <div id="Action-Component">
          <button
              id="Action-Button"
              disabled={!props.hasOptions}
              onClick={props.handlePick}
              className="red"
              hidden={props.hideElements}
          >
              Who should I victimise?
          </button>
      </div>
  );
}

export default Action;