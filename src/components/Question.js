import React from 'react';

import SliderAnswer from './SliderAnswer';
import SelectAnswer from './SelectAnswer';

const Question = ({ id, type, title, answer, possibleAnswers, handleAnswers }) => {
  return (

    <div className="col-md-6 col-sm-12 mb-auto">
      <p className="fw-small">Question {id}</p>
      <p className="lead fw-bold">{title}</p>
      {
        type === 'scale' ?
          <SelectAnswer possibleAnswers={possibleAnswers} answer={answer} selectedAnswer={handleAnswers} /> :
          <SliderAnswer possibleAnswers={possibleAnswers} answer={answer} selectedAnswer={handleAnswers} />
      }
    </div>
  );
}

export default Question;