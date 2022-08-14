import React from 'react';
import Nav from './Nav.jsx';
import Overview from './components/Overview.jsx';
import Featured from './components/Featured.jsx';

const App = props => {
  
  return (
  <div className="app">
    <Nav />
    <Overview />
    <Featured />
  </div>
  );
};

export default App;