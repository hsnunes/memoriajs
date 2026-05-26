const inputNome = document.querySelector('.login_input');
const buttonIniciar = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

// Desestructuing do evento de input para pegar o valor do input
const validateInput = ({ target }) => {
    if (target.value.length > 1) {
        buttonIniciar.removeAttribute('disabled');
        return;
    }

    buttonIniciar.setAttribute('disabled', '');
    //  else {
    //     // SetAtribute precisa de dois argumentos, o nome do atributo e o valor, mesmo que seja vazio
    //     buttonIniciar.setAttribute('disabled', '');

    // }
}

const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
    localStorage.setItem('gamer', inputNome.value);
    window.location = "./pages/game.html";
}

inputNome.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);