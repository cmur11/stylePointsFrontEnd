import React, { useState, useContext } from "react";
import { SignUpAnswer, SignUpQuestion } from "../../../models/SignUp";
import "./SignupQuestionsWrapper.css";
import SignUpDisplay from "./SignUpDisplay/SignUpDisplayQuestions";

function Signup() {
  let questions: SignUpQuestion[];

  if (true) {
    questions = [
      {
        id: 1,
        question: "How would you describe your style?",
        type: "select",
        options: [
          "Retro",
          "Casual",
          "Athleisure",
          "Rugged",
          "Urban",
          "Hipster",
          "Preppy",
        ],
        answer: "",
      },
    ];
  } else {
    questions = [
      {
        id: 1,
        question: "How would you describe your style?",
        type: "select",
        options: [
          "Retro",
          "Casual",
          "Athleisure",
          "Rugged",
          "Urban",
          "Hipster",
          "Preppy",
        ],
        answer: "",
      },
      {
        id: 2,
        question: "What is your email address",
        type: "email",
        options: [],
        answer: "",
      },
      {
        id: 3,
        question: "Create a password",
        type: "password",
        options: [],
        answer: "",
      },
      {
        id: 4,
        question: "What kind of assistance do you need? ",
        type: "select",
        options: ["Work dress", "Date night", "Day to day"],
        answer: "",
      },
      {
        id: 5,
        question: "Are you looking to add to your wardrobe?",
        type: "select",
        options: ["yes", "no"],
        answer: "",
      },

      {
        id: 6,
        question: "What is your budget?",
        type: "select",
        options: ["50-200", "200-350", "350-500", "500+"],
        answer: "",
      },
    ];
  }

  const [error, setError] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [answers, setAnswers] = useState<SignUpAnswer>(
    questions.reduce((accumulator: SignUpAnswer, question: SignUpQuestion) => {
      accumulator[question.id] = question.answer;

      return accumulator;
    }, {})
  );
  const handleAnswerChange = (questionId: number, newAnswer: string) => {
    setError("");
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: newAnswer,
    }));
  };
  const nextQuestion = () => {
    if (validateAnswer()) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setError("");
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const validateAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestion.id];

    switch (currentQuestion.type) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(currentAnswer)) {
          setError("Please enter a valid email address.");
          return false;
        }
        break;
      case "password":
        if (currentAnswer.length < 6) {
          setError("Password must be at least 6 characters long.");
          return false;
        }
        break;
      case "select":
        if (currentAnswer === "") {
          setError("Please make a selection");
          return false;
        }
        break;
      default:
        break;
    }

    setError("");
    return true;
  };

  const handleSubmit = () => {
    // need to handlesubmit
    console.log("in handle submitanswers", answers);
  };
  return (
    <SignUpDisplay
      currentQuestion={currentQuestion}
      answers={answers}
      error={error}
      nextQuestion={nextQuestion}
      prevQuestion={prevQuestion}
      handleSubmit={handleSubmit}
      handleAnswerChange={handleAnswerChange}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={questions.length}
    />
  );
}

export default Signup;
