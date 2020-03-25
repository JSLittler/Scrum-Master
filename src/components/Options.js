import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
      <div id="Options" className="aqua">
          <button id="Options-Button" onClick={props.handleDeleteOptions} className="red">Remove All</button>
          {
              props.options.map((option) => <Option 
                                              key={option}
                                              optionText={option}
                                              value={option}
                                              handleRemoveOption={() => { props.handleRemoveOption(option) }}
                                            />)
          }
      </div>
      );
}

export default Options;