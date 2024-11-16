import React, { useContext, useEffect } from "react";
import { Step } from "../../../models/steps.model";
import clipboard from "../../../assets/clipboard.jpg";
import money from "../../../assets/money.png";
import signUpImage from "../../../assets/SignUp.jpg";
import createAccount from "../../../assets/createAccount.png";
import RenderSteps from "../Steps/Steps";
import "./DesignerFirstTime.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DesignerLanding() {
  const navigate = useNavigate();
  const info = [
    {
      image: "",
      header: "Be your own boss",
      body: "Work how, when, and how often you want. Offer services in your specialty and set a flexible schedule.",
    },
    {
      image: "",
      header: "Set your own rates",
      body: "You keep 100% of what you charge, plus tips! Invoice and get paid directly through our secure payment system",
    },
    {
      image: "",
      header: "Build your portfolio",
      body: "We connect you with clients, and ways to market yourself — so you can focus on what you do best.",
    },
  ];

  const steps: Step[] = [
    {
      stepNumber: "1",
      stepHeader: "Sign up",
      stepBody: "Create your account",
      stepImage: createAccount,
      stepImageAltText: "clipboard full of questions",
    },
    {
      stepNumber: "2",
      stepHeader: "Build your profile",
      stepBody: "Select the services you want to offer and what rate",
      stepImage: clipboard,
      stepImageAltText: "photo of people matching",
    },
    {
      stepNumber: "3",
      stepHeader: "Get personalized recommendations",
      stepBody: "Set your schedule and start getting jobs!",
      stepImage: money,
      stepImageAltText: "person relieved to get help",
    },
  ];
  return (
    <div>
      <div className="what-is row">
        <div className="img-wrapper col-md-6">
          <img className="sign-up-image" src={signUpImage} />
        </div>
        <div className="what-is-wrapper col-md-6">
          <div className="what-is-header">
            <h1>What is Style Points?</h1>
          </div>
          <div className="what-is-body">
            Stylepoints connects busy people looking for help with fashion.
            Designers who can lend a hand with everything from date night
            outfits to suggested wardrobe additions. As a Designer, you can get
            paid to do what you love, when you want — all while helping someone
            become more confident in how they look.
          </div>
          <Button onClick={() => navigate("/signUp")} className="get-started">
            Get Started
          </Button>
        </div>
      </div>
      <div className="info-wrapper">
        <hr className="solid"></hr>
        <div className="info">
          <h1>Flexible work, at your fingertips</h1>
          <div>
            Find jobs that fit your skills and schedule. With Style Points you
            have the freedom and support to be your own boss
          </div>
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

export default DesignerLanding;
