//Entire JS code is following the moludarity concept

let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const countUserWin = document.querySelector("#user-score");
const countCompWin = document.querySelector("#comp-score");

// Random function for computer to generate a choice from the 3
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

// If game drawn
const drawGame = () => {
    console.log("Game Drawn");
    msg.style.backgroundColor = "rgb(37, 74, 55)";
    msg.innerText = "It was a DRAW!";
    
}


//To show Winner
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin)
    {
        msg.innerText = `You WON! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#702a9e";
        userScore++;
    }
    else
    {
        msg.style.backgroundColor = "#ca2727";
        compScore++;
        msg.innerText = `You LOST! ${compChoice} beats your ${userChoice}`;
    }
    // Update the score display
    countUserWin.innerText = userScore;
    countCompWin.innerText = compScore;
}


// Logic of win or loss
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice)
    {
        // Game drawn
        drawGame();
    }
    else
    {
        let userWin = true;
        if (userChoice === "rock")
        {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper")
        {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            //rock,paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
