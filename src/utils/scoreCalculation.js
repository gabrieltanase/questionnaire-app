// Score calculation
// Ability to change score
// Score = ((80 - question1) + question2 + (80 - question3) + (80 - question4) + question5) / 5
// Team player score
// Score = ((8 - question6) + question7 + question8 + (8 - question9) + (8 - question10)) / 5

const Utils = {
  calculateAbilityToChange: (questions) => {
    const score = ( (80 - Number(questions[0].answer)) + Number(questions[1].answer) + (80 - Number(questions[2].answer)) + (80 - Number(questions[3].answer)) + Number(questions[4].answer) ) / 5;
    return score;
  },


  calculateTeamPlayer: (questions) => {
    const score = ((8 - Number(questions[0].answer['score'])) + Number(questions[1].answer['score']) + Number(questions[2].answer['score']) + (8 - Number(questions[3].answer['score'])) + (8 - Number(questions[4].answer['score']))) / 5;
    return score;
  }
}

export default Utils;