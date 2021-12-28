let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("user-computer");
const scoreBoard_div = document.querySelector(".result");
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub()
const smallCompWord = "comp".fontsize(3).sub()


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3 )
    return choices[randomNumber]
}

function convertToWord(letter){
    if (letter==="r") return "Rock";
    if (letter==="p") return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_spam.innerHTML = userScore;
    result_div.innerHTML = convertToWord(userChoice) + smallUserWord + ' beats ' + convertToWord(computerChoice) + smallCompWord + '. YOU WIN '
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 1950)
}

function lost(userChoice, computerChoice){
    computerScore++
    computerScore_spam.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + smallUserWord + ' beats ' + convertToWord(computerChoice)+ smallCompWord + '. COMP WIN '
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 1950)
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} is equals   ${convertToWord(computerChoice)} ${smallCompWord}. IT'S A DRAW `
    document.getElementById(userChoice).classList.add('grey-glow')
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 1950)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
                win(userChoice, computerChoice);
        break;
        
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}

main();
function main() {
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s")
    })
}