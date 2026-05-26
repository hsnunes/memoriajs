
const gridTpl = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const photos = [
    'ancora',
    'pai',
    'frutas',
    'careta',
    'bigode',
    'cabelo',
    'metal',
    'natal',
    'lego',
    'pavulagem'
]

let firstCard = '';
let secondCard = '';

const createElements = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const resetCards = () => {
    firstCard = '';
    secondCard = '';
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === photos.length * 2) {
        setTimeout(() => {
            clearInterval(this.loop);
            alert(`Parabéns, ${localStorage.getItem('gamer')}! Seu tempo foi: ${timer.innerHTML}`);
            // gridTpl.innerHTML = '';
            // loadGame();
            location.reload();
        }, 500);
    }
}

const checkCards = () => {
    const firstPhoto = firstCard.getAttribute('data-photo');
    const secondPhoto = secondCard.getAttribute('data-photo');
    
    if (firstPhoto === secondPhoto) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        resetCards();

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            resetCards();
        }, 500);
    }
}

const revealCard = ({ target }) => {
    // Não pode ser revelada a carta se o clique for na face de trás ou se a carta já estiver revelada
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    // Declarando os cards nas variaveis para fazer comparação
    if (firstCard === '') {
        target.parentNode.className += ' reveal-card';
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.className += ' reveal-card';
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (photo) => {
    const card  = createElements('div', 'card');
    const front = createElements('div', 'face front');
    const back  = createElements('div', 'face back');

    // front.style.backgroundImage = `url('./img/${photo}.jpg')`;
    front.style.backgroundImage = `url('./../img/${photo}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);


    card.addEventListener('click', revealCard);

    // Colocar um atributo data- para armazenar o nome da foto, facilitando a comparação entre as cartas
    card.setAttribute('data-photo', photo);

    return card;
}

const loadGame = () => {
    // Spread operator to duplicate the photos array
    let duplicatePhotos = [...photos, ...photos];
    const shuffledPhotos = duplicatePhotos.sort(() => Math.random() - 0.5);
    shuffledPhotos.forEach((photo) => {
        const card = createCard(photo);
        gridTpl.appendChild(card);
    });
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('gamer');
    startTimer();
    loadGame();
}
