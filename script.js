// retrieves game buttons to know which is pressed
const buttons = Array.from(document.querySelectorAll('.btn'));
// retrieves scoreboard information, [0] = Player:, [1] = Tie:, [2] = Computer:
const paragraphs = Array.from(document.querySelectorAll('.scoreboard'));
// retrieves tag holding text for round result
const roundStatus = document.querySelector('#roundresult');
// retrieves tag holding text for game status/greeting
const gameStatus = document.querySelector('#gameStatus');

// stores all available choices for game
const choice = ["Rock", "Paper", "Scissors"];
// tracks game scores
let winCount = 0;
let lossCount = 0;
let roundCount = 0;

// randomly decides which of the available options the computer picks
let computerPlay = () => choice[Math.floor(Math.random(2)*3)];

// compares player choice with computer choice and updates result to UI
// represents one round of the game
let playRound = (playerSelection, computerSelection) => {
	roundCount++;

	switch (choiceComparison(playerSelection, computerSelection)) {
		case 0:
			roundStatus.textContent = `Round lost. ${playerSelection} and ${computerSelection}`;
			lossCount++;
			paragraphs[2].textContent = `Computer: ${lossCount}`;
			break;
		case 1:
			roundStatus.textContent = `Round tie. ${playerSelection} and ${computerSelection}`;
			paragraphs[1].textContent = `Tie: ${roundCount - winCount - lossCount}`;
			break;
		case 2:
			roundStatus.textContent = `Round won! ${playerSelection} and ${computerSelection}`;
			winCount++;
			paragraphs[0].textContent = `Player: ${winCount}`;
			break;
	}
	// declares game winner after either best of 5 matches have been won
	// or a tie has been reached. Then, the game resets.
	if (winCount > 2) {
		gameStatus.textContent = `Game Over! You won ${winCount}-${lossCount}!`;
		resetGame();
	} else if (lossCount > 2) {
		gameStatus.textContent = `Game Over! You lost ${winCount}-${lossCount}.`;
		resetGame();
	} else if (roundCount > 4) {
		if (winCount == lossCount) {
			gameStatus.textContent = `Game Over! You tied ${winCount}-${lossCount}.`;	
		} else if (winCount < lossCount) {
			gameStatus.textContent = `Game Over! You lost ${winCount}-${lossCount}.`;	
		} else {
			gameStatus.textContent = `Game Over! You won ${winCount}-${lossCount}!`;	
		}
		resetGame();
	}
}

resetGame = () => {
	winCount = 0;
	lossCount = 0;
	roundCount = 0;
	paragraphs[1].textContent = `Tie:`;
	paragraphs[2].textContent = `Computer:`;
	paragraphs[0].textContent = `Player:`;
	roundStatus.textContent = "Play again!";
}

// compares player and comuter choices and returns a result
// 0 = player loss, 1 = tie, 2 = player win
choiceComparison = (player, computer) => {
	const pVal = player.length;
	const cVal = computer.length;

	if (pVal == cVal) { //same value
		return 1;
	} else if (pVal*2 == cVal) { //rock*2 == scissors
		return 2;
	} else if (pVal*2 > cVal && cVal == 5) { //rock*2 > paper && paper
		return 0;
	} else if (pVal > cVal && cVal == 4) { //paper > rock && rock
		return 2;
	} else if (pVal < cVal && cVal == 8) { //paper < scissors && scissors
		return 0;
	} else if (pVal == cVal*2) { //scissors == rock*2
		return 0;
	} else if (pVal > cVal && cVal == 5) { //scissors > paper && paper
		return 2;
	}
}

// handles button press events for Rock, Paper, and Scissors buttons
buttons.forEach((button) => { 
	button.addEventListener("click", () => {
		playRound(button.id, computerPlay());
	});
});