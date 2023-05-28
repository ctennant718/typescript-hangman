import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <>
      <div className="word-wrapper">
        {wordToGuess.split("").map((letter, index) => (
          <span className="word-underline" key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
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
