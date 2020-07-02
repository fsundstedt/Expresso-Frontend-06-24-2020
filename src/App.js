import React from 'react';
import { Navbar } from './components/navbar';
import { Signup } from './components/signup';
import { Login } from './components/login';
import Index  from './components/indexPage';

function App() {

  return (
    <div>
      <header>
        <Navbar />
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
