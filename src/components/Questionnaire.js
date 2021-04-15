import React, { useState } from 'react';
import Paginator from './Paginator';
import Question from './Question';
import CompleteQuestionnaire from './CompleteQuestionnaire';

import { assign, filter, some } from 'lodash';

const Questionnaire = ({ question, questionsNumber, onPageChange, handleSelectedAnswers }) => {
  const [questionsAnswers, setQuestionAnswers] = useState([]);
  
  const handleAnswers = (answer) => {
    let questionWithAnswer;
    // check if the question has already exists within the array and update only the answer value
    const existingQuestion = some(questionsAnswers, (q) => q.id === question.id);

    if (!!existingQuestion) {
      // ok we found an existing question , now we need to update the state
      const newArray = filter(questionsAnswers, (item) => item.id !== question.id);
      setQuestionAnswers(newArray);
    }
    // merge question with answer
    questionWithAnswer = assign(question, { answer: answer });
    setQuestionAnswers(oldArray => [...oldArray, questionWithAnswer])
  }

  // send the questionnaire answers state to main app to check and calculate 

  return (
    <div className="row mt-5 justify-content-center">
      <Question {...question} key={question.id} handleAnswers={(answer) => handleAnswers(answer)} />
      <Paginator maxPages={questionsNumber} onPageChange={(e) => onPageChange(e)} />

      {
        (questionsAnswers && questionsAnswers.length === questionsNumber) ?
          <CompleteQuestionnaire handleSubmit={handleSelectedAnswers} /> : ''
      }
    </div>
  )
}

export default Questionnaire;