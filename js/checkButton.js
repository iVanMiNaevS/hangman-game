import { createGameOver, createWin, createHint } from "./create.js";

let j = -1;
let i = 0;
export default function checkBT(key, trueWord, words) {
    const imgs = document.querySelectorAll(".img-item");
    if (trueWord.indexOf(key.innerHTML) != -1) {
        words.forEach((element) => {
            if (key.innerHTML === element.innerHTML) {
                element.style.transform = "scale(1)";
                key.classList.add("tip-true");
            }
        });
        i++;
        if (i === words.length) {
            console.log(i);
            createWin();
            const playWIN = document.querySelector(".playWIN");
            playWIN.addEventListener("click", () => {
                location.reload();
            });
        } else {
            let a = 0;
            words.forEach((element) => {
                if (element.style.transform === "scale(1)") {
                    a += 1;
                }
            });
            if (a === words.length) {
                createWin();
                const playWIN = document.querySelector(".playWIN");
                playWIN.addEventListener("click", () => {
                    location.reload();
                });
            }
        }
    } else {
        j++;
        if (j === 4) {
            createHint(trueWord);
        }
        if (j !== 9) {
            imgs[j].style.transform = "scale(1)";
            console.log(imgs[j]);
            key.classList.add("tip-false");
        } else {
            imgs[j].style.transform = "scale(1)";
            createGameOver(trueWord);
            const playGM = document.querySelector(".playGM");
            playGM.addEventListener("click", () => {
                location.reload();
            });
            return;
        }
    }
}
