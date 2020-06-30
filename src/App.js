import React from 'react';
import { Signup } from './components/signup';
import { Login } from './components/login';
import Index  from './components/indexPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <Login />
        <br />
        <Signup />
        <Index />
      </header>
    </div>
  );
}

export default App;
