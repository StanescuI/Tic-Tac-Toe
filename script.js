let scoreBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerTurn = "X";
let result = document.getElementById("result");
let totalClicks = 0;

function markButton(clicked) {
    let buttonId = document.getElementById(clicked);
    let idToText = parseInt(clicked);
    
    if (scoreBoard[idToText - 1] === 0) {
        ++totalClicks;
        if (playerTurn === "X") {
            buttonId.innerText = "X";
            scoreBoard[idToText - 1] = 1;
            playerTurn = "0";
            result.innerText = "0 Turn";
            checkWin(scoreBoard, "X");
        } else {
            buttonId.innerText = "0";
            scoreBoard[idToText - 1] = 2;
            playerTurn = "X";
            result.innerText = "X Turn";
            checkWin(scoreBoard, "0");
        }
    }
}

function checkWin(array, winner) {
    let winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    for (let combination of winningCombinations) {
        let [index1, index2, index3] = combination;
        let value1 = array[index1 - 1];
        let value2 = array[index2 - 1];
        let value3 = array[index3 - 1];
        if (value1 !== 0 && value1 === value2 && value2 === value3) {
            result.innerText = winner + " won";
            finishedGame();
        }
    }
}

function finishedGame() {
    playerTurn = "Z";
    totalClicks = 0;
    scoreBoard = [3, 3, 3, 3, 3, 3, 3, 3, 3];
    let playAgain = document.createElement('button');
    playAgain.textContent = 'Play again!';
    playAgain.id = "rematch";
    playAgain.onclick = function() {
    scoreBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i <= 8; ++i) {
        let allButtons = document.querySelectorAll("button");
        allButtons.forEach(button => {
            button.innerText = "";
        });
        result.innerText = "X turn";
        playerTurn = "X";
        }
        playAgain.remove();
    }
    document.body.appendChild(playAgain);
}