import React from 'react';
import * as pic from '../scrum-master.png';

const Header = (props) => {
  return (
      <div id="Header">
      <h1 id="Header-Title">{props.title}</h1>
      <img id="Header-Image" src={pic} alt=''/>
      {!!props.subtitle && <h2 id="Header-Subtitle" hidden={props.hideElements}>{props.subtitle}</h2>}
      </div>
  );
}

Header.defaultProps = {
  title: "Choose A Scrum Master"
}

export default Header;