// stores all available choices for game
const choice = ["rock", "paper", "scissors"];

let winCount = 0;
let tieCount = 0;
let roundCount = 0;

const buttons = Array.from(document.querySelectorAll('.btn'));
console.log(buttons);
// randomly decides which of the available options the computer picks
let computerPlay = () => choice[Math.floor(Math.random(2)*3)];
// compares player choice with computer choice and returns result
// represents one round of the game
let playRound = (playerSelection, computerSelection) => {
	//playerSelection = playerSelection.toLowerCase();
	switch(playerSelection) {
		case "rock":
			if (computerSelection == "rock") {
				 console.log("It's a tie! Rock and Rock");
				 tieCount++;
			} else if (computerSelection == "paper") {
				console.log("You lose! Paper beats Rock");
			} else if (computerSelection == "scissors") {
				console.log("You win! Rock beats Scissors");
				winCount++;
			}
			break;
		case "paper":
			if (computerSelection == "paper") {
				console.log("It's a tie! Paper and Paper");
				tieCount++;
			}
			else if (computerSelection == "scissors") {
				console.log("You lose! Scissors beats Paper");
			}
			else if (computerSelection == "rock") {
				console.log("You win! Paper beats Rock");
				winCount++;
			}
			break;
		case "scissors":
			if (computerSelection == "scissors") {
				console.log("It's a tie! Scissors and Scissors");
				tieCount++;
			}
			else if (computerSelection == "rock") {
				console.log("You lose! Rock beats Scissors");
			}
			else if (computerSelection == "paper") {
				console.log("You win! Scissors beats Paper");
				winCount++;
			}
			break;
		default:
			break;
	}

	roundCount++;

	if(roundCount > 4) {
		console.log("game over");
	}
}

// handles button press events for Rock, Paper, and Scissors buttons
buttons.forEach((button) => { 
	button.addEventListener("click", () => {
		playRound(button.id, computerPlay());
	});
});

// plays a game of 5 rounds and determines winner at the end
/*let game = () => {
	let winCount = 0;
	let tieCount = 0;

	for (let i = 1; i <= 5; i++) {
		console.log(`Round ${i}:`);
		// prompts user to choose 
		playerSelection = window.prompt("Rock Paper Scissors");
		// computer randomly selects choice
		computerSelection = computerPlay();
		// player and computer choices are compared and the round result is returned
		result = playRound(playerSelection, computerSelection);

		// increment appropriate counters if user wins or ties
		result.includes("win") ?
		winCount++ :
		result.includes("tie") ?
		tieCount++ :
		null

		// prints out round result
		console.log(result);
	}

	// prints out player's standing after all 5 rounds have been played
	winCount > 2 ? 
	console.log(`GAME OVER! You won! (${winCount}/5)`) : 
	(winCount >= Math.ceil((5 - tieCount)/2)) ? 
	console.log(`GAME OVER! It's a tie! (${winCount}/5)`) :
	console.log(`GAME OVER! You lost! (${winCount}/5)`);
}

// plays game
game();*/