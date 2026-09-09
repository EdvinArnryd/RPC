let humanScore = 0;
let computerScore = 0;

const winnerText = document.querySelector("#winnerText");

const humanScoreTxt = document.querySelector("#humanScore");

const computerScoreTxt = document.querySelector("#computerScore");

const computerChoiceTxt = document.querySelector("#computerChoice");

let getComputerChoice = () => {
    let random = Math.random();

    let rand = random * (4 - 1) + 1;

    let res = Math.floor(rand);

    switch(res)
    {
        case 1:
            res = "rock";
            break;
        case 2:
            res = "paper";
            break;
        case 3:
            res = "scissor";
            break;
        default:
            break;
    }
    return res;
}

let decideChoice = (user, val) => {
    let res = 0;
    switch(val)
    {
        case "rock":
            computerChoiceTxt.textContent = user + " picked Rock";
            res = "Rock";
            break;
        case "paper":
            computerChoiceTxt.textContent = user + " picked Paper";
            res = "Paper";
            break;
        case "scissor":
            computerChoiceTxt.textContent = user + " picked Scissors";
            res = "Scissors";
            break;
        default:
            break;
    }
    return res;
}

let humanWin = () => {
    humanScore++;
    humanScoreTxt.textContent = humanScore;
    winnerText.textContent = "Human wins round.";

    if(humanScore >= 5)
    {
        decideWinner();
    }
}

let computerWin = () => {
    computerScore++;
    computerScoreTxt.textContent = computerScore;
    winnerText.textContent = "Computer wins round.";

    if(computerScore >= 5)
    {
        decideWinner();
    }
}

function playRound(event) {
    let target = event.target;

    let human = decideChoice("Human", target.id)
    let computer = decideChoice("Computer", getComputerChoice());
    if(human === computer)
    {
        winnerText.textContent = "It's a tie!";
        return;
    }
    if(human == "Rock")
    {
        if(computer == "Scissors")
        {
            humanWin();
            return;
        }
        computerWin();
        return;
    }

    if(human == "Paper")
    {
        if(computer == "Rock")
        {
            humanWin();
            return;
        }
        computerWin();
        return;
    }

    if(human == "Scissors")
    {
        if(computer == "Paper")
        {
            humanWin();
            return;
        }
        computerWin();
        return;
    }
}

function decideWinner() {
    if(humanScore == computerScore)
    {
        winnerText.textContent = "It is a tie, no one wins.";
    }
    else if(humanScore >= computerScore)
    {
        winnerText.textContent = "Human wins the game!";
    }
    else
    {
        winnerText.textContent = "Computer wins the game!";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);