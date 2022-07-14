// verificar se o valor é truthy

function isTruthy(value) {
  return !!value;
}

console.log(isTruthy('teste'));

// perimetro quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(2));

// Mostrar o nome completo
function nomeCompleto() {
  var nome = 'Rafael';
  var sobrenome = 'Reis';

  var nomeCompleto = nome + ' ' + sobrenome;
  console.log(nomeCompleto);
}

nomeCompleto();

// ou

function nomeCompleto2(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// função se o numer é par par

function isEven(num) {
  var module = num % 2;
  if (module !== 0) {
    console.log('O número é impar');
  } else {
    console.log('O número é par');
  }
}

// retornando o tipo de dado
function tipoDeDado(dado) {
  return typeof dado;
}

// usando addEventListener
var nome = 'Rafael Alves';

addEventListener('scroll', () => {
  console.log(nome, 'Scrollou a pagina');
});

addEventListener('click', () => {
  console.log(nome, 'clicou na pagina');
});

// corrigindo o erro
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} países do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(10));
console.log(jaVisitei(10));
