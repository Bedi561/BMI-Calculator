import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }


  function onHeightChange(event) {
    setHeight(event.target.value);
  }


  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <div className="div-style">
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight}kg</p>
        <input className='input-slider' type='range' step="1" min='40' max='200' onChange={onWeightChange}></input>
        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider' type='range' min='140' max='220' onChange={onHeightChange}></input>
      </div>
      <div className='output-section'>
        <p style={{ textAlign: 'center' }}>
          Your BMI is
        </p>

        <p className='output'>{output}</p>
      </div>
    </div>
  )
}

export default App
