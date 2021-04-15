const SCALE_ANSWERS = [
  { value: 'Totally agree', score: 7 },
  { value: 'Agree', score: 6 },
  { value: 'Slightly agree', score: 5 },
  { value: 'Neutral', score: 4 },
  { value: 'Slightly disagree', score: 3 },
  { value: 'Disagree', score: 2 },
  { value: 'Totally disagree', score: 1 },
];

const SLIDER_ANSWERS = [{ min: 10, max: 70, step: 10 }];

const Questions = [
  { question: 'Ik focus mij het liefst op één taak', type: 'slider', possibleAnswers: SLIDER_ANSWERS },
  { question: 'Ik hou van vernieuwing', type: 'slider', possibleAnswers: SLIDER_ANSWERS },
  { question: 'Ik vind het lastig om te switchen tussen taken', type: 'slider', possibleAnswers: SLIDER_ANSWERS },
  { question: 'Voordat ik aan een taak begin werk ik de taakhelemaal uit', type: 'slider', possibleAnswers: SLIDER_ANSWERS },
  { question: 'Ik ga graag naar meet-ups', type: 'slider', possibleAnswers: SLIDER_ANSWERS },
  { question: 'Ik werk het liefste alleen', type: 'scale', possibleAnswers: SCALE_ANSWERS },
  { question: 'Als ik tot nieuwe inzichten ben gekomen deel ik diegraag met anderen', type: 'scale', possibleAnswers: SCALE_ANSWERS },
  { question: 'Ik vind het leuk om te leren van anderen', type: 'scale', possibleAnswers: SCALE_ANSWERS },
  { question: 'Als ik met een probleem zit, los ik dat het liefst zelf op', type: 'scale', possibleAnswers: SCALE_ANSWERS },
  { question: 'Ik hou er niet van om gestoord te worden tijdens mijn werk door collega’s met een probleem', type: 'scale', possibleAnswers: SCALE_ANSWERS },
];

export default Questions;