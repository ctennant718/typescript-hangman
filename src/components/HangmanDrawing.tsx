import React from "react";
import "./styles/components.css";

const HEAD = (<div className="hangman-head" />)
const BODY =(<div className="hangman-body" />)
const RIGHT_ARM = (<div className="hangman-right-arm" />) 
const LEFT_ARM = (<div className="hangman-left-arm" />) 
const RIGHT_LEG = (<div className="hangman-right-leg" />) 
const LEFT_LEG = (<div className="hangman-left-leg" />)

//in order!
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <>
      <div className="drawing-wrapper">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="drawing-small-bar" />
        <div className="drawing-top-bar" />
        <div className="drawing-horizontal-bar" />
        <div className="drawing-bottom-bar" />
      </div>
    </>
  );
}

export default HangmanDrawing;
