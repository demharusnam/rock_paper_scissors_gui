// stores all available choices for game
const choice = ["rock", "paper", "scissors"];
// tracks game scores
let winCount = 0;
let lossCount = 0;
let roundCount = 0;
// retrieves game buttons to know which is pressed
const buttons = Array.from(document.querySelectorAll('.btn'));
// randomly decides which of the available options the computer picks
let computerPlay = () => choice[Math.floor(Math.random(2)*3)];
// compares player choice with computer choice and returns result
// represents one round of the game
let playRound = (playerSelection, computerSelection) => {
	roundCount++;
	switch(playerSelection) {
		case "rock":
			if (computerSelection == "rock") {
				 console.log("Round tie. Rock and Rock");
			} else if (computerSelection == "paper") {
				console.log("Round lost. Paper beats Rock");
				lossCount++;
			} else if (computerSelection == "scissors") {
				console.log("Round won! Rock beats Scissors");
				winCount++;
			}
			break;
		case "paper":
			if (computerSelection == "paper") {
				console.log("Round tie. Paper and Paper");
			}
			else if (computerSelection == "scissors") {
				console.log("Round lost. Scissors beats Paper");
				lossCount++;
			}
			else if (computerSelection == "rock") {
				console.log("Round won! Paper beats Rock");
				winCount++;
			}
			break;
		case "scissors":
			if (computerSelection == "scissors") {
				console.log("Round tie. Scissors and Scissors");
			}
			else if (computerSelection == "rock") {
				console.log("Round lost. Rock beats Scissors");
				lossCount++;
			}
			else if (computerSelection == "paper") {
				console.log("Round won! Scissors beats Paper");
				winCount++;
			}
			break;
		default:
			break;
	}
	// declares game winner after either best of 5 matches have been won
	// or a tie has been reached. Then, the game resets.
	if (winCount > 2) {
		console.log("Game over. You won!");
		winCount = 0;
		lossCount = 0;
		roundCount = 0;
	} else if (lossCount > 2) {
		console.log("Game over. You lost.");
		winCount = 0;
		lossCount = 0;
		roundCount = 0;
	} else if (winCount == lossCount && roundCount > 4) {
		console.log("Game over. It's a tie.");
		winCount = 0;
		lossCount = 0;
		roundCount = 0;
	}
}

// handles button press events for Rock, Paper, and Scissors buttons
buttons.forEach((button) => { 
	button.addEventListener("click", () => {
		playRound(button.id, computerPlay());
	});
});