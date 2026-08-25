let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let random = Math.random();

    let rand = random * (4 - 1) + 1;

    return Math.floor(rand);
}

let getHumanChoice = () => {
    let enteredValue = prompt("Enter your choice:");

    return parseInt(enteredValue);
}

let decideChoice = (user, val) => {
    let returner = 0;
    switch(val)
    {
        case 1:
            console.log(user + " picked Rock");
            returner = "Rock";
            break;
        case 2:
            console.log(user + " picked Paper");
            returner = "Paper";
            break;
        case 3:
            console.log(user + " picked Scissors");
            returner = "Scissors";
            break;
        default:
            break;
    }

    return returner;
}

let humanWin = () => {
    humanScore++;
    console.log("Human wins.");
}

let computerWin = () => {
    computerScore++;
    console.log("Computer wins.");
}

let playRound = (human, computer) => {
    if(human === computer)
    {
        console.log("It's a tie! AAA");
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

let decideWinner = () => {
    console.log(" ");
    console.log(" ");
    console.log("Game Over.");
    console.log(" ");
    console.log(" ");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if(humanScore == computerScore)
    {
        console.log("It's a tie! No one wins.");
    }
    else if(humanScore >= computerScore)
    {
        console.log("Human wins!");
    }
    else
    {
        console.log("Computer wins!");
    }
}

console.log("Welcome to the Game!");
console.log("     Start      ");
console.log(" ");

let humanResult = decideChoice("Human", getHumanChoice());
let computerResult = decideChoice("Computer", getComputerChoice());

playRound(humanResult, computerResult);

humanResult = decideChoice("Human", getHumanChoice());
computerResult = decideChoice("Computer", getComputerChoice());

playRound(humanResult, computerResult);

humanResult = decideChoice("Human", getHumanChoice());
computerResult = decideChoice("Computer", getComputerChoice());

playRound(humanResult, computerResult);

humanResult = decideChoice("Human", getHumanChoice());
computerResult = decideChoice("Computer", getComputerChoice());

playRound(humanResult, computerResult);

humanResult = decideChoice("Human", getHumanChoice());
computerResult = decideChoice("Computer", getComputerChoice());

playRound(humanResult, computerResult);

decideWinner();