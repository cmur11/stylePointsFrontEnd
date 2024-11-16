import React from "react";
import { Step } from "../../../models/steps.model";
import { StepProps } from "../../../models/stepProps";
import "./Steps.css";
function RenderSteps({ steps }: StepProps) {
  return (
    <div className="step-wrapper row flex">
      {steps.map((step: Step, index: number) => {
        return (
          <section className="step-box col-md-4" key={index}>
            <div className="image-wrapper">
              <img src={step.stepImage} className="step-image" />
            </div>
            <div className="step-header">
              {step.stepNumber}. {step.stepHeader}
            </div>
            <div className="step-body">{step.stepBody}</div>
          </section>
        );
      })}
    </div>
  );
}

export default RenderSteps;
