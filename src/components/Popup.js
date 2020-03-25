import React from 'react';

const Popup = (props) => {
  return (
    <div id="Popup" className="popup">
        <h2 id="Popup-Text">{props.text}</h2>
      <button id="Popup-Button" onClick={props.closePopup}>close</button>
    </div>
  );
}

export default Popup;