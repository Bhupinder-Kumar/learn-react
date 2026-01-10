import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  // let counter = 15;

    const addCount = () => {
      counter = counter + 1;
      setCounter(counter);
    }

    const decrementCount = () => {
      if(counter > 0){
        counter = counter -1;
        setCounter(counter);
      } else{
        alert("Counter cannot be negative");
        setCounter(0);
      }
    }

  return (
    <>
      <h1>Chai Aur React Learning!</h1>
      <h2>Count is: {counter}</h2>
      <button onClick={addCount}>Increment Btn {counter}</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement Btn {counter}</button>
    </>
  )
}

export default App
