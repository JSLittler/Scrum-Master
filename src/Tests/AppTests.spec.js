import React from 'react';
import ReactDOM from 'react-dom';
import ChooseAScrumMasterApp from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChooseAScrumMasterApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
