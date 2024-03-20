import randomNum from "./helpFunc.js";

// создание клавиатуры
const alphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

const KBBody = document.querySelector(".key-board");

export function createKB() {
  alphabet.forEach((e) => {
    KBBody.innerHTML += `<div class="key">${e}</div>`;
  });
}

// создание слова
const word = [
  { МАРИО: "известный игровой сантехник" },
  { БЕГ: "Усэйн Болт" },
  { ФУТБОЛ: "CИИИИИИИ" },
  { ЧУБАККА: "Шерстянной из космоса" },
];
export function createWord() {
  return Object.keys(word[randomNum(0, word.length - 1)]);
}

export function createWordInUprow(trueWord, upRow) {
  for (let i = 0; i < trueWord.length; i++) {
    upRow.innerHTML += `<div class="cell">
        <div class="word">${trueWord[i]}</div>
        <div class="under-line">-</div>
        </div>`;
  }
}

export function createGameOver(trueWord) {
  const gameOverScreen = document.querySelector(".game-over-screen");
  gameOverScreen.innerHTML = `<div class="true-word">Правильное слово: ${trueWord}</div>
    <button class="playGM">Play again</button>`;
  gameOverScreen.style.position = "absolute";
  gameOverScreen.style.zIndex = "10";
}

export function createWin() {
  const WinScreen = document.querySelector(".win-screen");

  WinScreen.innerHTML = `<p class="text">you Win</p>
        <button class="playWIN">play-again</button>`;

  WinScreen.style.position = "absolute";
  WinScreen.style.zIndex = "11";
  WinScreen.style.top = "0";
}

export function createHint(trueWord) {
  const hintBT = document.querySelector(".hint-bt");
  const popUpBody = document.querySelector(".pop-up");
  const hintText = document.querySelector(".hint");
  const close = document.querySelector(".close");
  hintBT.style.transform = "scale(1)";
  hintBT.addEventListener("click", () => {
    word.forEach((e) => {
      if (e.hasOwnProperty(`${trueWord}`)) {
        // появление подсказки
        hintText.innerHTML = e[`${trueWord}`];
        popUpBody.style.transform = "scale(1)";
      }
    });
  });
  close.addEventListener("click", () => {
    popUpBody.style.transform = "scale(0)";
  });
}
