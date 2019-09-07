import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { jsx } from '@emotion/core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});