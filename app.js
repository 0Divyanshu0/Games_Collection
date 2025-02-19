let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turn0 = true;
let newgamebtn = document.querySelector(".newgame");
let msgdiv = document.querySelector(".Msg");
let winnerText = document.querySelector(".Winnertext");

// Enable all buttons and hide the message
const buttonenabled = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = ""; // Clear the boxes for a new game
    });
    msgdiv.classList.add("hide");
};

// Reset game function
const resetgame = () => {
    turn0 = true;
    buttonenabled();
};

// Create 2-D array of winning patterns
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Check if we have a winner
const checkwinner = () => {
    for (let pattern of winningpattern) {
        let patternvalue1 = boxes[pattern[0]].innerText;
        let patternvalue2 = boxes[pattern[1]].innerText;
        let patternvalue3 = boxes[pattern[2]].innerText;
        if (patternvalue1 !== "" && patternvalue2 !== "" && patternvalue3 !== "") {
            if (patternvalue1 === patternvalue2 && patternvalue2 === patternvalue3) {
                namewinner(patternvalue1);
            }
        }
    }
    // Check for a draw
    const isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        winnerText.innerText = "It's a Draw!";
        msgdiv.classList.remove("hide");
    }
};



// Disabling the buttons after the winner is declared
const buttondisabled = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

// Display the winner
const namewinner = (winner) => {
    winnerText.innerText = `Congrats 🎉! Winner is ${winner}`;
    msgdiv.classList.remove("hide");
    buttondisabled();
};

// Add event listener for each box
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

//reset game and new game button when clicked it will reset the game.
newgamebtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);
