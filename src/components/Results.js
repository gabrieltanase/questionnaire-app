import React from 'react';

const Results = ({ abilityToChange, teamplayer}) => {
  return (
    <div className="row my-5 gy-3 justify-content-center">

      <h1 className="h2 text-center text-success">Results</h1>

      <div className="col-md-4 col-sm-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">Veranderkracht</h5>
            <p className="card-text text-center fw-bold fs-1">{abilityToChange}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-muted">Teamplayer</h5>
            <p className="card-text text-center fw-bold fs-1">{teamplayer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results;