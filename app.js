document.addEventListener('DOMContentLoaded',() =>{
    const cardArray = [
        {
            name:'bubamara',
            img: 'images/bubamara.png'
        },
        {
            name:'bubamara',
            img: 'images/bubamara.png'
        },
        {
            name:'cizma',
            img: 'images/cizma.png'
        },
        {
            name: 'cizma',
            img: 'images/cizma.png'
        },
        {
            name: 'dedomraz',
            img: 'images/dedomraz.png'
        },
        {
            name:'dedomraz',
            img: 'images/dedomraz.png'
        },
        {
            name: 'elka',
            img: 'images/elka.png'
        },
        {
            name:'elka',
            img: 'images/elka.png'
        },
        {
            name:'oblaci',
            img: 'images/oblaci.png'
        },
        {
            name:'oblaci',
            img: 'images/oblaci.png'
        },
        {
            name:'riba',
            img: 'images/riba.png'
        },
        {
            name:'riba',
            img: 'images/riba.png'
        },
        {
            name: 'srce',
            img: 'images/srce.png'
        },
        {
            name:'srce',
            img: 'images/srce.png'
        },
        {
            name: 'superMario',
            img: 'images/superMario.png'
        },
        {
            name:'superMario',
            img: 'images/superMario.png'
        }
/*        {
            name:'super',
            img: 'images/super.png'
        },
        {
            name:'peperutka',
            img: 'images/peperutka.jpg'
        }*/
    ];

    cardArray.sort(()=> 0.5- Math.random());

    const  grid = document.querySelector('.grid');
    const resultDisplay=document.querySelector('#result');
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    
    function createBoard(){
        for(let i=0 ; i<cardArray.length ; i++ ){
        var card=document.createElement('img');
        card.setAttribute('src','images/myGrid.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
       grid.appendChild(card);
        }
    
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1]){
            alert('You found the match');
            cards[optionOneId].setAttribute('src','images/super.png');
            cards[optionTwoId].setAttribute('src','images/super.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src','images/myGrid.png');
            cards[optionTwoId].setAttribute('src','images/myGrid.png');
            alert('Sorry...try again');

        }
        cardsChosen=[];
        cardsChosenId=[];
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent='Congratulations...you match all :)'
        }

    }

    function flipCard (){
        var cardId=this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length==2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard ();
})