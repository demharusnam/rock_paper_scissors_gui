// stores all available choices for game
const choice = ["rock", "paper", "scissors"];
// randomly decides which of the available options the computer picks
let computerPlay = () => choice[Math.floor(Math.random(2)*3)];
// compares player choice with computer choice and returns result
// represents one round of the game
let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	switch(playerSelection) {
		case "rock":
			if (computerSelection == "rock") {
				return "It's a tie! Rock and Rock";
			}
			else if (computerSelection == "paper") {
				return "You lose! Paper beats Rock";
			}
			else {
				return "You win! Rock beats Scissors";
			}
		case "paper":
			if (computerSelection == "paper") {
				return "It's a tie! Paper and Paper";
			}
			else if (computerSelection == "scissors") {
				return "You lose! Scissors beats Paper";
			}
			else {
				return "You win! Paper beats Rock";
			}
		case "scissors":
			if (computerSelection == "scissors") {
				return "It's a tie! Scissors and Scissors";
			}
			else if (computerSelection == "rock") {
				return "You lose! Rock beats Scissors";
			}
			else {
				return "You win! Scissors beats Paper";
			}
		default:
			return "Error. You spelled your choice incorrectly. You lose this round."	
	}
}

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