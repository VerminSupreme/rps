let wins = 0;
let ties = 0;
let losses = 0;

function simulate(number){
    for (let i = 0; i<number; i++){
        humanPlay(computerPlay());
    }
}

//called by buttons 
//param@ 1-3
function humanPlay(num){
    let pc = computerPlay();
    let result = compare(num, pc);
    console.log(result);
    sendResults(result, num, pc);

}

//returns 1-3 for rps
function computerPlay(){
    return Math.floor(Math.random()*3)+1;
}

function compare(human, computer){
    console.log(human + " " + computer);
    if (human == computer){
        return 0;
    } else if (human == computer - 1 || human == 3 && computer == 1){
        return -1;
    } else if (human == computer + 1 || human == 1 && computer == 3){
        return 1;
    }
}

function handString(number){
    switch (number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return -1;
    }
}

function didYouWin(number){
    switch (number){
        case -1:
            losses++;
            return "lose.";
        case 0:
            ties++;
            return "tied.";
        case 1:
            wins++;
            return "win!";
        default:
            return "broke the game :(";
    }
}

function sendResults(result, human, computer){
    let man = handString(human);
    let notMan = handString(computer);
    let win = didYouWin(result);

    document.getElementById("results").innerHTML="You picked " + man + "<br>Computer picked " + notMan +"<br>You " + win;
    document.getElementById("winCount").innerHTML="Wins: " + wins;
    document.getElementById("tieCount").innerHTML="Ties: " + ties;
    document.getElementById("lossCount").innerHTML="Losses: " + losses;
}