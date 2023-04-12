const cardArray = [
    {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'icecream',
        img: 'images/pizza.png'
    },
    {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'icecream',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay=document.querySelector('#grid')

let cardsChosen=[]
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i )
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    console.log('check for match!')
    if(cardsChosen[0]== cardsChosen[1]){
        alert('ypu found a match')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }

    cardsChosen = []
    cardsChosenIds = []
}

function flipCard(){
    console.log(cardArray)
    const cardId= this.getAttribute('data-id')
    console.log('clicked', cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}