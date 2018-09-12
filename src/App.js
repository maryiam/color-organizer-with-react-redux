import React from 'react';
import { CreateColor, Colors, SortColors } from './components/containers';

const App = () =>
  <div className='content'>
    <div className='header'>
      <CreateColor />
      <SortColors />
    </div>
    <Colors />
  </div>

export default App;
