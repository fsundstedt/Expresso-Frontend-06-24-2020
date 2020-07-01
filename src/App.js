import React, { useState } from 'react';
import Modal from 'react-modal';
import { Navbar } from './components/navbar';
import { Signup } from './components/signup';
import { Login } from './components/login';
import Index  from './components/indexPage';

function App() {
  const [modalStatus, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }
  
  function closeModal() {
    setModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br />
        <Modal
          isOpen={modalStatus}
        >
          aaaaa
        </Modal>
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
