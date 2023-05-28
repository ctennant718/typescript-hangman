import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { getWord } from "./utils";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return getWord();
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser],
  );

  //allows user to make use of their keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      //if no key is matched, just return
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <>
      <div className={"hangman-wrapper"}>
        <div className={"outcome-text"}>
          {isWinner && "You won! Press enter to try again."}
          {isLoser && "Oh no! Beter luck next time! Press enter to try again."}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
          reveal={isLoser}
        />
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  );
}

export default App;
