// mostrando a url

const href = location.href;

console.log(href);

// selecionando tag

const h1Select = document.querySelector('h1');

function h1Text() {
  h1Select.innerHTML = 'Manipulando DOM';
}

// adicionando o evento na tag

function text() {
  alert('clicou em: ' + h1Select.innerHTML);
}

h1Select.addEventListener('click', text);

// adicionando a linguagem do navegador

const linguagem = navigator.language;

console.log(linguagem);

// vendo o tamanho da tela do navegador

const tamanho = innerWidth;
console.log(tamanho);
