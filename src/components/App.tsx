import React from 'react';
import { jsx } from '@emotion/core';

/** @jsx jsx */

import Header from './Header';
import Selection from './Selection';
import RateTable from './RateTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Selection />
      <RateTable />
    </div>
  );
};

export default App;
