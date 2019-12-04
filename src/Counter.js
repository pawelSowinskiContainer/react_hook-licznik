import React, {useState} from 'react';

const Counter = () => {

  const initValue = 100;
  const [counter, setCounter] = useState(initValue);
  const [step, setStep] = useState(1);


  const changeStep = (e) => {
    let inputValue = parseInt(e.target.value); // sparsuj do numbera!
    setStep(inputValue);
  };

    return (

      <div className="counter">
        <h2>Licznik</h2>
        <p>Stan licznika - <span className="bold">{counter}</span></p>
        <button onClick={() => setCounter(counter + step)}>Dodaj {step}</button>
        <button onClick={() => setCounter(initValue)}>Reset</button>
        <button onClick={() => setCounter(counter - step)}>Odejmij {step}</button>
        <input type="number" onChange={changeStep} value={step}/>
      </div>
    )
}

export default Counter;