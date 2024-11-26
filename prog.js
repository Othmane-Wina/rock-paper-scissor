function computerMove(){
    let random = Math.random();
    if(random < 0.33) return 'rock';
    else if(random < 0.66) return 'paper';
    else return'scissor';
}

const score = {
    wins: 0,
    ties: 0,
    losses: 0
}

function playGame(playerMove){
    let computer = computerMove();
    let result='lose';

    if(playerMove === 'rock'){
        switch(computer){
            case 'rock':
                score.ties++;
                result = 'Tie.';
                break;
            case 'paper':
                score.losses++;
                result = 'You lose.';
                break;
            case 'scissor':
                score.wins++;
                result = 'You win.';
                break;
        }
    }
    else if(playerMove === 'paper'){
        switch(computer){
            case 'rock':
                score.wins++;
                result = 'You win.';
                break;
            case 'paper':
                score.ties++;
                result = 'Tie.';
                break;
            case 'scissor':
                score.losses++;
                result = 'You lose.';
                break;
        }
    }
    else{
        switch(computer){
            case 'rock':
                score.losses++;
                result = 'You lose.';
                break;
            case 'paper':
                score.wins++;
                result = 'You win.';
                break;
            case 'scissor':
                score.ties++;
                result = 'Tie.';
                break;
        }
    }
    document.querySelector('.result').innerHTML = result;

    document.querySelector('.you-computer').innerHTML=`
            You
            <img src="images/${playerMove}-emoji.png" alt="">
            <img src="images/${computer}-emoji.png" alt="">
            Computer
    `;
    document.querySelector('#stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function resetCount(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    document.querySelector('#stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

let auto = false;
let id;
function autoPlay(){
    auto = !auto;
    if(auto){
        id = setInterval(function(){
            playGame(computerMove());
        }, 1000);
        document.querySelector('.result-button2').innerHTML='Stop';
    }
    else{
        clearInterval(id);
        document.querySelector('.result-button2').innerHTML='Auto Play';
    }
}