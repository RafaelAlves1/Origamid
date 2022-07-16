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

// trazendo todas as 7 imagens
const imgs = document.querySelectorAll('img');
console.log(imgs);

// trazendo so as imagens que tem os animais (6 imagens)
const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimais);

// trazendo links internos
const links = document.querySelectorAll('[href^="#"]');
console.log(links.innerHTML);

// selecionar primeiro h2 dentro de .animais desc

const h2animais = document.querySelector('.animaisDesc h2');
console.log(h2animais);

// selecionando ultimo p do site

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);

// estrutura do forEach
const img = document.querySelectorAll('img');
console.log(img);

img.forEach((item, index, array) => {
  console.log(item, index, array);
});

const titulo = document.getElementsByClassName('title');
const tituloArray = Array.from(titulo);

tituloArray.forEach(() => {
  console.log();
});

// mostrar todos paragrafos

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// corrigindo erro

const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log('primeiro erro:', item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log('segundo erro: ', i++);
});

imgs2.forEach(() => console.log('terceiro erro: ', i++));
