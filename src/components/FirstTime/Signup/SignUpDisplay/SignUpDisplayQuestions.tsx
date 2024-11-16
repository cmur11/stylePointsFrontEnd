import React from "react";
import { SignUpQuestion } from "../../../../models/SignUp";
interface SignUpDisplayProps {
  currentQuestion: SignUpQuestion;
  answers: Record<number, string>;
  error: string;
  nextQuestion: () => void;
  prevQuestion: () => void;
  handleSubmit: () => void;
  handleAnswerChange: (questionId: number, newAnswer: string) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}
function SignUpDisplay({
  currentQuestion,
  answers,
  error,
  nextQuestion,
  prevQuestion,
  handleSubmit,
  handleAnswerChange,
  currentQuestionIndex,
  totalQuestions,
}: SignUpDisplayProps) {
  return (
    <div className="questions">
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.type === "select" && (
        <select
          value={answers[currentQuestion.id] || ""}
          onChange={(selection) =>
            handleAnswerChange(currentQuestion.id, selection.target.value)
          }
        >
          <option value="">Select an answer</option>
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {currentQuestion.type === "email" && (
        <input
          type="email"
          placeholder="Enter your email"
          value={answers[currentQuestion.id] || ""}
          onChange={(e) =>
            handleAnswerChange(currentQuestion.id, e.target.value)
          }
        />
      )}
      {currentQuestion.type === "password" && (
        <input
          type="password"
          placeholder="Enter your password"
          value={answers[currentQuestion.id] || ""}
          onChange={(e) =>
            handleAnswerChange(currentQuestion.id, e.target.value)
          }
        />
      )}

      {error && <div className="error-message">{error}</div>}
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && (
          <button className="back-button" onClick={prevQuestion}>
            Back
          </button>
        )}
        {currentQuestionIndex < totalQuestions ? (
          <button className="next-button" onClick={nextQuestion}>
            Next
          </button>
        ) : (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>

      <div className="current-question-index">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
    </div>
  );
}

export default SignUpDisplay;
