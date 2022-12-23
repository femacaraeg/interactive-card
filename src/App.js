import React, { useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';

import './App.css';

function App() {
  const [name, setName] = useState('Jane Appleseed');
  const [cardNumber, setCardNumber] = useState('0000');
  const [expMonth, setExpMonth] = useState('00');
  const [expYear, setExpYear] = useState('00');

  const handleFormChange = (props) => {
    setName(props.name);
    setCardNumber(props.number);
    setExpMonth(props.month);
    setExpYear(props.year);
  };

  console.log(name);

  return (
    <div className='App'>
      <Header
        name={name}
        number={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
      />
      <div className='Form'>
        <Form onFormChange={handleFormChange} />
      </div>
    </div>
  );
}

export default App;
