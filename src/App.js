import { useEffect, useState } from 'react';
import './App.css';
import data from './quotes.json'

function App() {

  const [number, setNumber] = useState("")

  useEffect(() => {
    setNumber(Math.floor(Math.random() * data.quotes.length))
  },[])

  const shuffle = () => {
    setNumber(Math.floor(Math.random() * data.quotes.length))
  }

  return (
    <div className="App">
      <div>
        <div className='quote' onClick={() => shuffle()}>
          {number && data.quotes[number].quote}
        </div>
        <div className='author'>
          - {number && data.quotes[number].author ? data.quotes[number].author : 'Unknown'}
        </div>
      </div>
    </div>
  );
}

export default App;
