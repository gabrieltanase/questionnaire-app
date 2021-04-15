import React from 'react';

const CompleteQuestionnaire = ({ handleSubmit }) => {
  return (
    <div className="row my-5 justify-content-center">
      <div className="col-md-3 col-sm-12">
        <button className="btn btn-success w-100" onClick={handleSubmit}>Submit questionnaire</button>
      </div>
    </div>
  )
}

export default CompleteQuestionnaire;