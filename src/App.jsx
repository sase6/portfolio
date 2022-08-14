import React from 'react';
import Nav from './Nav.jsx';
import Overview from './components/Overview.jsx';
import Featured from './components/Featured.jsx';
import Stacks from './components/Stacks.jsx';

const App = props => {
  
  return (
  <div className="app">
    <Nav />
    <Overview />
    <Featured />
    <Stacks />
  </div>
  );
};

export default App;