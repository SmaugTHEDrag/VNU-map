const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')
const restartButton = document.querySelector('.restart')
const restartButton2 = document.querySelector('.restart2')
const congratsScreen = document.querySelector('.congrats');
const finalScore = document.querySelector('.final-score');
const losingScreen = document.querySelector('.losing-screen');
const losingScore = document.querySelector('.losing-score');
suffleImage()
clicking()
restartButton.addEventListener('click', () => {
    location.reload()
})
restartButton2.addEventListener('click', () => {
    location.reload()
})
function suffleImage(){
    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    })
}
function clicking(){
    for(let i =0; i<card.length; i++){
        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
            const flippedCard = document.querySelectorAll('.flip')
            if(flippedCard.length == 2){
                container.style.pointerEvents ='none'
                setInterval(() => {                    
                    container.style.pointerEvents ='all'
                }, 1000);
                match(flippedCard[0] , flippedCard[1])
            }
        })
    }
}
function match(cardOne , cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        score.innerHTML = parseInt(score.innerHTML) + 10
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 
        cardOne.classList.add('match')
        cardTwo.classList.add('match')
        const matchedCards = document.querySelectorAll('.match');
        if (matchedCards.length === card.length) {
            showCongratsScreen();
        }
    } else {
        score.innerHTML = parseInt(score.innerHTML) - 1;
        if (score.innerHTML == 0) {
            showLosingScreen();
            return;
        }
        setTimeout(() => {
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 500);
    }
}
function showCongratsScreen() {
    // Hide the game board
    document.querySelector('.container').style.display = 'none';
  
    // Show the congrats screen
    congratsScreen.style.display = 'block';
  
    // Set the final score
    finalScore.textContent = score.innerHTML;
}

function showLosingScreen() {
    // Hide the game board
    document.querySelector('.container').style.display = 'none';
  
    // Show the losing screen
    losingScreen.style.display = 'block';
  
    // Set the losing score
    losingScore.textContent = score.innerHTML;
}
