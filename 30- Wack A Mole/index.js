const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTIme(min, max){
    return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    // console.log(hole);
    if(hole === lastHole){
        // console.log('Same Hole as Before');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(){
    const time = randomTIme(200,1000);
    const hole = randomHole(holes);
    // console.log(time, hole);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp){
            peep();
        }       
    }, time);
}

//will run only for 10 Seconds
function startGame(){
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();

    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

function bonked(e){
    // console.log(e);
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonked));