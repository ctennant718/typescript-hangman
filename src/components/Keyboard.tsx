import React from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard() {
  return (
    <>
      <div className="keyboard-wrapper">
        <div className="keyboard-grid">
          {KEYS.map((key) => {
            return <button key={key} className="keyboard-button">{key}</button>;
          })}
        </div>
      </div>
    </>
  );
}

export default Keyboard;
