let score = JSON.parse(
    localStorage.getItem('score')) || 
    { wins: 0, losses: 0 , ties: 0 };

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(() => {
            playGame(pickComputerMove());
        },1000)
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
};

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock')
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper')
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors')
    });

document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
        score.wins = 0
        score.losses = 0
        score.ties = 0
        localStorage.removeItem('score')
        updateScoreElement()
        document.querySelector('.js-result').innerHTML = ''
        document.querySelector('.js-moves').innerHTML = ''
    });

document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => {
        autoPlay()
    });

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('rock');
    }else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('scissors');
    }
})

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
        result = 'It\'s a tie!';
        score.ties++;
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        score.wins++;
    } else {
        result = 'You lose!';
        score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon-result"> <img src="images/${computerMove}-emoji.png" class="move-icon-result"> Computer`;

    // alert(`You played ${playerMove}. Computer played ${computerMove}. ${result}
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}