import React from "react";

const GameQuestion = ({
  question,
  op1,
  op2,
  op3,
  op4,
  onClickOp1,
  onClickOp2,
  onClickOp3,
  onClickOp4
}) => {
  return (
    <div className="gameQuestion">
      <p>{question}</p>
      <div className="buttonSelector">
        <button onClick={onClickOp1}>{op1}</button>
        <button onClick={onClickOp2}>{op2}</button>
        {op3 && <button onClick={onClickOp3}>{op3}</button>}
        {op4 && <button onClick={onClickOp4}>{op4}</button>}
      </div>
    </div>
  );
};

export default GameQuestion;
