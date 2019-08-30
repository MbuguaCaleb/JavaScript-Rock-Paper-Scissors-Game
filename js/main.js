//query selector all puts items in a node list which is like an array
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

//Play game when we click one of the images
function play(e) {
  // console.log(e.target.id);
  restart.style.display = "inline-block";

  const playerChoice = e.target.id;

  //computer's choice
  const computerChoice = getComputerChoice();

  //console.log(playerChoice, computerChoice);
  const winner = getWinner(playerChoice, computerChoice);

  //console.log(playerChoice, computerChoice, winner);
  showWinner(winner, computerChoice);
}

//Get Computers choice

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }

  //even chance of either getting Rock,Paper or Scissors
}

//get Game winner

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}
//showing winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //Inc player score
    scoreboard.player++;

    //Show modal result
    //appending to the Dom
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>

     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer choses <strong>${computerChoice.charAt(0).toUpperCase() +
       computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === "computer") {
    //Inc computer score
    scoreboard.computer++;

    //Show modal result
    //appending to the Dom
    result.innerHTML = `
    <h1 class='text-lose'>You Lose</h1>
 <i class="fas fa-hand-${computerChoice} fa-10x"></i>
 <p>Computer choses <strong>${computerChoice.charAt(0).toUpperCase() +
   computerChoice.slice(1)}</strong></p>
`;
  } else {
    result.innerHTML = `<h1>It's a Draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer choses <strong>${computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1)}</strong></p>
    `;
  }

  //show score
  //appending to the score
  score.innerHTML = `
  
  <p>Player :${scoreboard.player}</p>
  <p>Player :${scoreboard.computer}</p>
  
  `;

  modal.style.display = "block";
}

//Restart game

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player:0 </p>
    <p>Computer:0</p>
    `;
}
// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
