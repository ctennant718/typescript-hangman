import "./styles/components.css";
import { refreshPage } from "../utils";

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

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <>
      <div className="keyboard-wrapper">
        <div className="keyboard-grid">
          {KEYS.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
              <button
                onClick={() => addGuessedLetter(key)}
                key={key}
                className={`keyboard-button keyboard-button-${
                  isActive ? "active" : ""
                } keyboard-button-${isInactive ? "inactive" : ""}`}
                disabled={isInactive || isActive || disabled}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="play-again-button-wrapper">
          <button onClick={refreshPage} className="play-again-button">
            Play Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
