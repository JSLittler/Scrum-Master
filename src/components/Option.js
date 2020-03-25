import React from 'react';

const Option = (props) => {
  return (
      <div id="Option">
          <button id="Option-Button" onClick={props.handleRemoveOption}>Remove this victim</button> <span id="Option-Text">Could it be...</span><span id="Option-Name" className="red">{props.optionText}</span>
      </div>
  );
}

export default Option;