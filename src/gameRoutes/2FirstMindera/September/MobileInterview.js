import React, { useState } from "react";
import { connect } from "react-redux";

import GameQuestion from "../../../components/game/GameQuestion";
import {
  updateCareerAction,
  updateTimeBoxAction
} from "../../../redux/game/actions";

const MobileInterview = ({
  timestamps,
  interviewResult,
  setMobileAsCareer
}) => {
  const [correctAnswersMB, setCorrectAnswersMB] = useState(0);
  const [wrongAnswersMB, setWrongAnswersMB] = useState(0);

  const [isQ1Solved, setIsQ1Solved] = useState(false);
  const [isQ2Solved, setIsQ2Solved] = useState(false);
  const [isQ3Solved, setIsQ3Solved] = useState(false);
  const [isQ4Solved, setIsQ4Solved] = useState(false);
  const [isQ5Solved, setIsQ5Solved] = useState(false);
  const [isQ6Solved, setIsQ6Solved] = useState(false);
  const [isQ7Solved, setIsQ7Solved] = useState(false);
  const [areAllSolved, setAreAllSolved] = useState(false);

  return (
    <>
      {!isQ1Solved && (
        <Question1
          correctAnswer={() => {
            setIsQ1Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ1Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ1Solved && !isQ2Solved && (
        <Question2
          correctAnswer={() => {
            setIsQ2Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ2Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ2Solved && !isQ3Solved && (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ3Solved && !isQ4Solved && (
        <Question4
          correctAnswer={() => {
            setIsQ4Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ4Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ4Solved && !isQ5Solved && (
        <Question5
          correctAnswer={() => {
            setIsQ5Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ5Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ5Solved && !isQ6Solved && (
        <Question6
          correctAnswer={() => {
            setIsQ6Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ6Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}

      {isQ6Solved && !isQ7Solved && (
        <Question7
          correctAnswer={() => {
            setIsQ7Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersMB > wrongAnswersMB
              }
            });
          }}
          wrongAnswer={() => {
            setIsQ7Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersMB > wrongAnswersMB
              }
            });
          }}
        />
      )}
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the difference between val and var in Kotlin?"
      op1="Variables with val can only access const members."
      op2="Variables with val are final, and variables with var are not."
      op3="Variables with var are final, and variables with val are not."
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the correct way to declare an integer variable in Kotlin?"
      op1="var i : int = 42;"
      op2="let i = 42;"
      op3="int i = 42;"
      op4="var i = Int = 42;"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What does data class do?"
      op1="Auto-generated hashCode() and equals() methods."
      op2="Automatic conversion from or to JSON."
      op3="Auto-generated toString() method."
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const Question4 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='What is the correct syntax to convert the String "42" to a Long in Kotlin?'
      op1='val x: Long = Long.parseLong("42");'
      op2='val x: Long = "42".toLong();'
      op3='val x: Long = <Long> "42";'
      op4='val x: Long = <Long> "42";'
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question5 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Does Kotlin have primitive data types, such as int, long, float?"
      op1="No, not at language level. But the Kotlin compiler makes use of JVM primitives for best performance."
      op2="Yes, but Kotlin internally always converts them to their non-primitive counterparts."
      op3="No, Kotlin does not have nor use primitive data types."
      op4="Yes, Kotlin is similar to Java in this respect."
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question6 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which is a valid function declaration in Kotlin?"
      op1="int sum (a: Int, b: Int);"
      op2="fun sum(a: Int, b: Int): Int;"
      op3="int sum(int a, int b);"
      op4="function sum (a: Int, b: Int): Int;"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question7 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What does the !! operator do?"
      op1="It compares two values for identity rather than equality."
      op2="It converts any value to a non-null type and throws an exception if the value is in fact null."
      op3="It returns the left-hand operand if the operand is not null. Otherwise it returns the right hand operand."
      op4="It's the modulo operator in Kotlin, similar to Java's %."
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  interviewResult: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  setMobileAsCareer: career => dispatch(updateCareerAction(career))
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileInterview);
