'use strict';

/*

// Select the element 
// console.log(document.querySelector('.message'));

// on that element select the text
console.log(document.querySelector('.message').textContent);


// To set the value.
document.querySelector(".message").textContent = "Correct Number!"
console.log(document.querySelector('.message').textContent);


document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);

*/
let randomNum = Math.trunc(Math.random() * 20);
let score = 20;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20);
    displayMessage("Start guessing..");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = "#222";
    // document.querySelector('.highscore').textContent = 0;
    document.querySelector(".number").textContent = '?';
    document.querySelector('.guess').value = "";

})
document.querySelector('.check').addEventListener("click", function (e) {
    e.preventDefault();
    const guess = +document.querySelector('.guess').value;

    if (!guess) {
        // document.querySelector(".message").textContent = "⛔ No Number!"
        displayMessage("⛔ No Number!")
    }
    else if (guess !== randomNum) {
        if (score > 1) {
            displayMessage(guess > randomNum ? "⛔ Too High!" : "⛔ Too Low");
            // let score = Number(document.querySelector('.score').textContent);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("☠ You Lost the game!");
            document.querySelector('.score').textContent = 0

        }
    }
    else if (guess === randomNum) {
        displayMessage("✔ Correct Number!");

        // to set the background-color of body.
        document.querySelector('body').style.backgroundColor = "#60b347";

        // to change the width of .number.
        document.querySelector('.number').style.width = '30rem'

        // to set the number in place of ?.
        document.querySelector(".number").textContent = randomNum;
        let highScore = Number(document.querySelector('.highscore').textContent);
        if (highScore < score) {
            document.querySelector('.highscore').textContent = score;
        }
    }
})