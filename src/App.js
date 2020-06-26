import React from 'react';
import { Test } from './components/reduxTest';
import { Signup } from './components/signup';
import Index  from './components/indexPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <Test />
        <Signup />
        <Index />
      </header>
    </div>
  );
}

export default App;
