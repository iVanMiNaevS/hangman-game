import checkBT from "./checkButton.js";
import { createKB, createWord, createWordInUprow } from "./create.js";

const startScreen = document.querySelector(".start-screen");
const playBt = document.querySelector(".strart-screenPlay");

window.addEventListener("load", () => {
    startScreen.style.display = "flex";
});
// загрузка всего
const upRow = document.querySelector(".up-row");
const trueWord = createWord()[0].toUpperCase();
createWordInUprow(trueWord, upRow);

const words = document.querySelectorAll(".word");

playBt.addEventListener("click", () => {
    const mainGameBody = document.querySelector(".main-game");
    mainGameBody.style.display = "flex";
    startScreen.style.display = "none";

    createKB();

    words.forEach((e) => {
        e.style.transform = "scale(0)";
    });
});

// основной функционал
const keyBoard = document.querySelector(".key-board");

keyBoard.addEventListener("click", (e) => {
    if (e.target.closest(".key")) {
        checkBT(e.target, trueWord, words);
    }
});
