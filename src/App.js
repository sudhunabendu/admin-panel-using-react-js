import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
