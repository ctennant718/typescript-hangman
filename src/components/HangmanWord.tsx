import React from "react";

function HangmanWord() {
  const word = "test";
  const guessedLetters = ["t", "e", "g"];
  return (
    <>
      <div className="word-wrapper">
        {word.split("").map((letter, index) => (
          <span className="word-underline" key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
              className="word-letter"
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

export default HangmanWord;
