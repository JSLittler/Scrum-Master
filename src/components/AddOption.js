import React, { useState } from 'react';

const AddOption = (props) => {
  const [name, setName] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddOption(name.trim());
    setName('');
  }

  return (
    <div id="Add-Option" className="options">
      {props.error && <p id="Add-Option-Error">{props.error}</p>}
        <form id="Add-Option-Form" onSubmit={handleSubmit}>
            <button id="Add-Option-Form-Button" className="red">Add a potential victim</button>
            <input id="Add-Option-Form-Input" type="text" value={name} onChange={e => setName(e.target.value) } placeholder="victim name" />
            <input id="Add-Option-Form-Submit" type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default AddOption;