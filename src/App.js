import { useEffect, useState, useContext } from 'react';
import './App.css';
import data from './quotes.json'
import { ColorModeContext } from './Services/ThemeContext';

function App() {

  const [number, setNumber] = useState("")
  const { mode } = useContext(ColorModeContext)

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
      setTimeout(() => {
        ele[1].classList.remove('show');
      }, 800);
      setNumber(Math.floor(Math.random() * data.quotes.length))
    }, 500);
  }

  return (
    <div className={mode === 'light' ? 'BodyApp' : 'BodyAppDark'}>
      <div className="App">
        <div>
          <div className={mode === 'light' ? 'quote animate' : 'quoteDark animate'} onClick={() => shuffle()}>
            {number && data.quotes[number].quote}
          </div>
          <div className='author animate'>
            {number && data.quotes[number].author ? data.quotes[number].author : 'Unknown'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
