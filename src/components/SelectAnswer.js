import React, { useState } from 'react';

const AnswerButton = ({ active, answerOption, onSetActive }) => {
  return (
    <button type="button"
      className={`list-group-item list-group-item-action text-center ${active ? 'active' : ''}`}
      onClick={onSetActive}>
      {answerOption.value}
    </button>
  )
}

const SelectAnswer = ({ possibleAnswers, answer, selectedAnswer }) => {
  const [activeButtonIndex, setButtonIndex] = useState(null);

  const handleOnClick = (answer, newActiveButtonIndex) => {
    setButtonIndex(newActiveButtonIndex);
    selectedAnswer(answer);
  }
  return (
    <div className="list-group">
      {
        possibleAnswers.map((a, i) => {
          return <AnswerButton
            onSetActive={() => handleOnClick(a, i)}
            active={i === activeButtonIndex || (answer && answer.score === a.score)}
            answerOption={a} key={i} />
        })
      }
    </div>
  )
}

export default SelectAnswer;