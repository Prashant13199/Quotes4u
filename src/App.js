import { useEffect, useState } from 'react';
import './App.css';
import data from './quotes.json'

function App() {

  const [number, setNumber] = useState("")

  useEffect(() => {

    shuffle()
  }, [])

  const shuffle = () => {
    const ele = document.querySelectorAll('.animate')
    if (ele) {
      ele[0].classList.add('show');
      ele[1].classList.add('show');
    }
    setTimeout(() => {
      ele[0].classList.remove('show');
      ele[1].classList.remove('show');
      setNumber(Math.floor(Math.random() * data.quotes.length))
    }, 500);

  }

  return (
    <div className="App">
      <div>
        <div className='quote animate' onClick={() => shuffle()}>
          {number && data.quotes[number].quote}
        </div>
        <div className='author animate'>
          {number && data.quotes[number].author ? data.quotes[number].author : 'Unknown'}
        </div>
      </div>
    </div>
  );
}

export default App;
