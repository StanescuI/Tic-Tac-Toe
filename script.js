let playerTurn = 1;
let totalClicks = 0;
let result = document.getElementById("result");
let scoreBoard = [];
for (let i = 0; i <= 7; ++i) {
    scoreBoard[i] = 3;
}

function setElement(pressedButton) {
    let pressed = document.getElementById(pressedButton);
    if (playerTurn === 1 && pressed.innerText === "") {
        pressed.innerText = "X";
        playerTurn = 0;
        ++totalClicks;
        result.innerText = "0 turn";
        addPoints(pressed);
    } else if (playerTurn === 0 && pressed.innerText === "") {
        pressed.innerText = "0";
        playerTurn = 1;
        ++totalClicks;
        result.innerText = "X turn";
        decreasePoints(pressed);
    }
    if (totalClicks > 8) {
        result.innerText = "The game ended with a Tie !"
        finishedGame();
    }
}

function addPoints(clicked) {
    if (clicked.classList.contains("firstLine")) {
        ++scoreBoard[0];
    } else if (clicked.classList.contains("secLine")) {
        ++scoreBoard[1];
    } else {
        ++scoreBoard[2];
    }
    if (clicked.classList.contains("firstCol")) {
        ++scoreBoard[3];
    } else if (clicked.classList.contains("secCol")) {
        ++scoreBoard[4];
    } else {
        ++scoreBoard[5];
    }
    if (clicked.classList.contains("firstDiag")) {
        ++scoreBoard[6];
    } else if (clicked.classList.contains("secDiag")) {
        ++scoreBoard[7];
    }
    for (let i = 0; i <= 7; ++i) {
        if (scoreBoard[i] === 6) {
            result.innerText = "X won!";
            finishedGame();
        }
    }
}

function decreasePoints(clicked) {
    if (clicked.classList.contains("firstLine")) {
        --scoreBoard[0];
    } else if (clicked.classList.contains("secLine")) {
        --scoreBoard[1];
    } else {
        --scoreBoard[2];
    }
    if (clicked.classList.contains("firstCol")) {
        --scoreBoard[3];
    } else if (clicked.classList.contains("secCol")) {
        --scoreBoard[4];
    } else {
        --scoreBoard[5];
    }
    if (clicked.classList.contains("firstDiag")) {
        --scoreBoard[6];
    } else if (clicked.classList.contains("secDiag")) {
        --scoreBoard[7];
    }
    for (let i = 0; i <= 7; ++i) {
        if (scoreBoard[i] === 0) {
            result.innerText = "0 won!";
            finishedGame();
        }
    }
}

function finishedGame() {
    playerTurn = 3;
    totalClicks = 0;
    let playAgain = document.createElement('button');
    playAgain.textContent = 'Play again!';
    playAgain.id = "rematch";
    playAgain.onclick = function() {
        for (let i = 0; i <= 7; ++i) {
            scoreBoard[i] = 3;
        }
        for (let i = 0; i <= 8; ++i) {
            let allButtons = document.querySelectorAll("button");
            allButtons.forEach(button => {
                button.innerText = "";
            });
        result.innerText = "X turn";
        playerTurn = 1;
        }
        playAgain.remove();
    }
    document.body.appendChild(playAgain);
}