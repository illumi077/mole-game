const elements = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let time = document.getElementById('countDown')
let score = document.querySelector('#score')
const clicker = document.querySelector('#start-btn')

var result = 0
let hit = 0
var timeLeft = 10
let timerID = null
let countdownTimerID = null

clicker.addEventListener('click',moveMole)

function randomSquare() {
    elements.forEach(square => {
        square.classList.remove('mole')
    });

    let ranSquare = elements[Math.floor(Math.random() * 9)]
    ranSquare.classList.add('mole')
    hit = ranSquare.id
    elements.forEach(square => {
        square.addEventListener('mousedown', () =>{
            if (square.id == hit){
                result +=1
                score.textContent = result
                hit = null
            }
        })
    })
}

function moveMole(){
    result = 0
    score.textContent = result
    timerID = setInterval(randomSquare,500)
    countdownTimerID = setInterval(countdown,1000)
}

function countdown(){
    timeLeft--
    time.innerHTML = timeLeft
    console.log(timeLeft)
    if(timeLeft == 0){
        clearInterval(countdownTimerID)
        clearInterval(timerID)
        console.log(score)
        alert(`Time's up. Don't click Any more. And you killed ${result} moles!.`)
        timeLeft = 10
        
    }
}


