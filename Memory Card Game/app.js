const cards = document.querySelectorAll(".memory-card");


let flippedCard = false;
let lockBoard = false;
let firstCard , secondCard ;

function flipCard()
{
    if(lockBoard) return; 
    if(this === firstCard) return;
    this.classList.add("flip");

    if(!flippedCard)
    {
        flippedCard = true;
        firstCard = this;
        return;
    }
        secondCard = this;
        checkForMatch();

    
}

function checkForMatch()
{
    let isMatched = firstCard.dataset.name === secondCard.dataset.name;
    isMatched ? disableCards() : unFlipCards();
}

function disableCards()
{
    firstCard.removeEventListener("click" , flipCard ); 
    secondCard.removeEventListener("click", flipCard );
    resetBoard();
}

function unFlipCards()
{
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
    } , 1200);
}

(function shuffle()
{
    cards.forEach(function(card){
        let randomPositon = Math.floor(Math.random()*12);
        card.style.order = randomPositon;
    })
})();
function resetBoard(){
    [flippedCard , lockBoard] = [false ,false];
    [firstCard , secondCard] = [null , null];
}
cards.forEach(function(card){
    card.addEventListener("click", flipCard);
});