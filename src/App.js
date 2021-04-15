import React, { useState, useEffect } from 'react';
import { filter, find } from 'lodash';
import './App.css';

import Utils from './utils/scoreCalculation';

import Questionnaire from './components/Questionnaire';
import Results from './components/Results';

function App() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [startQuestionnaire, setStartQuestionnaire] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const getData = () => {
    fetch('./mockData/questions.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setQuestions(myJson.questions)
      }, (error => {
        setError('There was something wrong with loading the questionnaire')
        console.error(error);
      }));
  }

  useEffect(() => {
    getData()
  }, []);

  const handlePageChange = (pageNumber) => {
    setActiveQuestion(find(questions, (q, i) => i === pageNumber - 1))
  }

  const handleStartQuestionnaire = () => {
    setActiveQuestion(find(questions, (q, i) => i === 0));
    setStartQuestionnaire(true);
  }

  const calculateScore = () => {
    console.log(questions);
    console.log('calculate score');
    setStartQuestionnaire(false);
    const abilityToChange =  Utils.calculateAbilityToChange(filter(questions, q => q.type === 'slider'));
    const teamplayer = Utils.calculateTeamPlayer(filter(questions, q => q.type === 'scale'))
    setResults({ teamplayer, abilityToChange })
  }

  return (
    <div className="container">

      {
        (!startQuestionnaire) ?
          (!results) ?
            <div className="row mt-5 justify-content-center">
              <div className="col-md-3 col-sm-12">
                <h1 className="h5 text-center">A new questionnaire</h1>
                <button className="btn btn-primary w-100 mt-3" onClick={handleStartQuestionnaire}>Start Questionnaire</button>
                {(!!error && !!startQuestionnaire ? <p>{error}</p> : '')}
              </div>
            </div> :
            <Results {...results}/> :
          <Questionnaire
            question={activeQuestion}
            questionsNumber={questions.length}
            onPageChange={(pageNumber) => handlePageChange(pageNumber)}
            handleSelectedAnswers={calculateScore} />
      }
    </div>
  );
}

export default App;
