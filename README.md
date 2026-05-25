
echo "# memoriajs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hsnunes/memoriajs.git
git push -u origin main



1 - Criando estrutura básica com html;
2 - Criando o estilo da página e aplicando reset;
3 - Preparando a pagina inicial do game;
4 - Criando o JavaScript e implementando a lógica do login;

5 - Funcionalidade inicial: Digitar o nome, botão só vai estar disponivel se o campo estiver preenchido. Depois de preenchido e acionado, será direcionado para a tela do jogo;
6 - Regra do Nome: min 2 letras e max 10;
7 - Identificar o input do nome e o botão de início do jogo;
8 - Identificando o input, criar a funcionalidade de pegar o que está sendo digitado (addEventListener(), e pegar o event target value), para fazer a validação da quantidade de letras;
9 - Criando a validação da quantidade de letras;

10 - Pegar o nome digitado e salvar e enviar o usuário para a tela do jogo;
11 - Utilizar o disparo do form da página para enviar o nome para a tela do jogo;
12 - O nome digitado será salvado no Local Storage;
13 - Depois de salvar o nome do jogador, será feito um redirecionamento para uma página chamada game.html dentro do diretório pages;
14 - Montar toda estrutura na pagina game.html e modificar alguns textos para identificar a página;

15 - Criando a pagina do jogo. Criando um grid para compor as cartas;
16 - Grid de 5 colunas com largura máxima de 800px;
17 - Criando as cartas. Tanto de frente quanto de verso, com o mesmo tamanho;