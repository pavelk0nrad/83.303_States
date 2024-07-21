import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [timmer, setTimmer] = useState(0);
  const timerId = useRef(null);
 

  function timmerStart() {
    setStart(true);
    setTimmer(count * 60);

    // Zastav předchozí interval, pokud existuje
    if (timerId.current) {
      clearInterval(timerId.current);
    }

    // Nastav nový interval
    timerId.current = setInterval(() => {
      setTimmer(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timerId.current);
          setStart(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  }

  function timmerStop() {
    setStart(false);
    setCount(0);
    setTimmer(0);
    clearInterval(timerId.current);   
    console.log(timmer)

  }

  function increaseNum(){
    setCount(count + 1);
  }

  function decreaseNum(){
    setCount(count -1);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;  }
  
  return (
    <>
    <h1>Timmer from Pavel K0nrad</h1>
      <h2 className="display">{!start ? formatTime(count * 60) : formatTime(timmer)}</h2>

      <div className="button-container">
        {start == false && <button onClick={increaseNum}>+</button>}
        {start == false && <button onClick={decreaseNum}>-</button>}
          <div>
            {start == false ? <button onClick={timmerStart}>Start</button> : <button onClick={timmerStop}>Stop</button>}
          </div>
      </div>
    </>
  )
}

export default App
