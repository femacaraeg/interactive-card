import './App.css';

import Card from './components/Card/Card';
import Form from './components/Form';
import mobileBg from './assets/bg-main-mobile.png';

function App() {
  return (
    <div className='App'>
      <div className='divContainer'>
        <div className='fill'>
          <img src={mobileBg} className='mobileBg' alt='mobile background' />
          <div className='card-back' />
          <Card />
        </div>
      </div>

      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
