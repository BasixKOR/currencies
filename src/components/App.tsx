import React from 'react';
import { jsx } from '@emotion/core';

/** @jsx jsx */

import Header from './Header'
import Selection from './Selection'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Selection />
    </div>
  );
};

export default App;
