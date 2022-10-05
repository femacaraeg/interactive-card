import React, { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';

import './App.css';

function App() {
  const [name, setName] = useState('Jane Appleseed');
  const [cardNumber, setCardNumber] = useState('');

  const handleFormChange = (props) => {
    setName(props.name);
    setCardNumber(props.number);
  };

  console.log(name);

  return (
    <div className='App'>
      <Header name={name} number={cardNumber} />
      <div>
        <Form onFormChange={handleFormChange} />
      </div>
    </div>
  );
}

export default App;
