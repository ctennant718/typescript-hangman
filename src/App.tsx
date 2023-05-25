import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  return (
    <>
      <div className={"hangman-wrapper"}>
        <div className={"outcome-text"}>Lose Win</div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
