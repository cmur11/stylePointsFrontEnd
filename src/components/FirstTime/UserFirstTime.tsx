import React from "react";
import styleImg from "../../assets/mens-wardrobe.jpg";
import "./UserFirstTime.css";
import Button from "react-bootstrap/Button";
import { Step } from "../../models/steps.model";
import RenderSteps from "./Steps/Steps";
import clipboard from "../../assets/clipboard.jpg";
import help from "../../assets/help.png";
import match from "../../assets/match-icon.png";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const steps: Step[] = [
    {
      stepNumber: "1",
      stepHeader: "Take your style quiz",
      stepBody: "Tell us about your style, size, budget, and goals",
      stepImage: clipboard,
      stepImageAltText: "clipboard full of questions",
    },
    {
      stepNumber: "2",
      stepHeader: "Match with your stylist",
      stepBody:
        "Let your stylist know the occasion and if you are looking to expand your wardrobe",
      stepImage: match,
      stepImageAltText: "photo of people matching",
    },
    {
      stepNumber: "3",
      stepHeader: "Get personalized recommendations",
      stepBody:
        "Receive outfit recommendations for every occasion and item suggestions to improve your wardobe",
      stepImage: help,
      stepImageAltText: "person relieved to get help",
    },
  ];

  return (
    <div className="landing">
      <div className="container">
        <div className="image-row">
          <div className="landing-image">
            <img
              src={styleImg}
              className="wardrobe-image"
              alt="Image showing a menswear wardrobe"
            />
          </div>
        </div>
        <div className="quiz-row">
          <div className="styling-content">Online personal styling for you</div>
          <Button onClick={() => navigate("/signUp")} variant="primary">
            Take your style quiz
          </Button>
        </div>
      </div>
      <div className="step-wrapper">
        <RenderSteps steps={steps} />
        <Button onClick={() => navigate("/signUp")} className="get-started">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Landing;
