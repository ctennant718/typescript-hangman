import React from "react";

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
  return (
    <>
      <div className="word-wrapper">
        {wordToGuess.split("").map((letter, index) => (
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
