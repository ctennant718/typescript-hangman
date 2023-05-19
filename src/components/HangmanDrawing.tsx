import React from "react";
import HangmanHead from "./HangmanHead";
import HangmanBody from "./HangmanBody";
import HangmanRightArm from "./HangmanRightArm";
import HangmanLeftArm from "./HangmanLeftArm";
import HangmanRightLeg from "./HangmanRightLeg";
import HangmanLeftLeg from "./HangmanLeftLeg";
import "./styles/components.css";

function HangmanDrawing() {
  return (
    <>
      <div className={"drawing-wrapper"}>
        <HangmanHead />
        <HangmanBody />
        <HangmanRightArm />
        <HangmanLeftArm />
        <HangmanRightLeg />
        <HangmanLeftLeg />
        <div className={"drawing-small-bar"} />
        <div className={"drawing-top-bar"} />
        <div className={"drawing-horizontal-bar"} />
        <div className={"drawing-bottom-bar"} />
      </div>
    </>
  );
}

export default HangmanDrawing;
