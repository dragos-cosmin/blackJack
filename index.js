// let age=100

// if(age<100){
//     console.log("Not eligible")
// } else if (age>100){
//     console.log("Not eligible, you already gotten one")
// } else {
//     console.log("Here's your birthday card from the King!")
// }


let cards = [];   // array - oredered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive=false;
let message="";
let chips=100;
let playerName='Dragos';

let player = {
    name: playerName,
    chips: chips
}


let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
// let sumEl=document.querySelector("#sum-el") // # for selecting id. 
//                                  if the paragraph is class="sum-el" then we should have ".sum-el"
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips


function startGame() {
    if (!isAlive && player.chips>0){
        cards=[]
        sum=0
        hasBlackJack=false
        player.chips-=10;
    
        isAlive=true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard,secondCard)
        sum= firstCard+secondCard
        renderGame()
    }
    
}

function renderGame(){
    
    if (sum <= 20) {
        message="Do you want to draw a new card?"
     //   console.log("Do you want to draw a new card?😊")
    } else if(sum === 21){
        hasBlackJack = true
        message="You've got Blackjack!"
     //   console.log("Wohoo! You've got blackjack!🥳")
        isAlive=false
        player.chips+=50;
    } else {
        message="You're out of the game!"
     //   console.log("You're out of the game!😭")
        isAlive=false
    }
    let cardsStr=""
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        if (index<cards.length-1){
            cardsStr+=element+", "
        } else {
            cardsStr+=element
        }

        cardsEl.textContent="Cards: "+cardsStr
        playerEl.textContent=player.name+": $"+player.chips

        
    }
    
    sumEl.textContent="Sum: "+sum
    messageEl.textContent=message
}

function newCard() {
    if (isAlive && !hasBlackJack){
        let newCard=getRandomCard()
        sum+=newCard
        cards.push(newCard)
        renderGame()
    }
    
}

function getRandomCard() {
    let randomNumber= Math.floor(Math.random()*13)+1
    if (randomNumber===1) {
        return 11
    } else if (randomNumber>10) {
        return 10
    } else return randomNumber
}


// console.log("isAlive: "+isAlive)
// console.log("hasBlackJack: "+hasBlackJack)
