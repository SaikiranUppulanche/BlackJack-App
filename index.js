let player = {
    name: "Saikiran",
    chips: "150"
}
let cards = []
let sumOfCards = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sumOfCards = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sumOfCards
    if (sumOfCards <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sumOfCards === 21) {
        message = "You have got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sumOfCards += card
        cards.push(card)
        renderGame()
    }
}