import React from 'react';
import Listing from './components/Listing';
import { data } from './components/data';

const App: React.FC = () => {
  return (
      <Listing items={data} />
  );
};

export default App;