import React from 'react';
import Nav from './Nav.jsx';
import Overview from './components/Overview.jsx';

const App = props => {
  
  return (
  <div className="app">
    <Nav />
    <Overview />
  </div>
  );
};

export default App;