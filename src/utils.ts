import words from "./wordList.json";

export function getWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

export function refreshPage() {
  window.location.reload()
}
