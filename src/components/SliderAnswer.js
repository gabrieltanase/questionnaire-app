import React from 'react';

import { map } from 'lodash'

const SliderAnswer = ({ possibleAnswers, answer ,selectedAnswer }) => {
  
  const handleOnChange = (e) => {
    selectedAnswer(e.target.value);
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <label htmlFor="slider" className="form-label">Totally disagree</label>
        <label htmlFor="slider" className="form-label">Totally agree</label>
      </div>
      {
        map(possibleAnswers, (a, i) => {
          return <input type="range"
            className="form-range" min={a.min} max={a.max} step={a.step}
            value={answer || ''}
            onChange={handleOnChange}
            id="slider"
            key={i} />
        })
      }

    </>
  )
}

export default SliderAnswer;