const express = require("express");

const app = express();

// Aula 01 - Declarações de variáveis

var name = "AgileCode";
var top10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var $scope = { title: "JavaScript", version: "6" };
var _person = "John";
var numberCode = 8987977;
var a = 10,
  b = 9,
  c = 8;
var language;

// Aula 02 - Numbers

var nota = 10;

nota.toExponential(2); // 100
nota.toFixed(2); // 10.00
nota.toPrecision(1); // 1e+1
nota.toString(); // "10"
nota.valueOf(); //10

Math.abs(); // Valor absolute
Math.floor(); // Valor inteiro
Math.log(); // Logarítmo
Math.min(); // Menor número
Math.max(); // Maior número
Math.pow(); // Potencia de número
Math.random(); // Gera um número aleatório
Math.round(); // Arredonda o número para o inteiro mais próximo
Math.sin(); // Seno do número
Math.sqrt(); // Raíz quadrada
Math.tan(); // Tangente do número

// Aula 03 - Strings

var nome = "AgileCode";

nome.charAt(2); // = 'i' => Retorna o char da posição
nome.charCodeAt(0); // = 65 => Retorna o codigo do char
nome.concat("!"); // = 'AgileCode!' => Concatena as strings
nome.indexOf("e"); // = 4 => retorna o indice da ocorrencia do char
nome.replace("Code", "!"); // = "Agile!" =>  Substitui parte da String por outra
nome.split("e"); // = ['Agil', 'Cod'] => Divide a string

nome.length; // = 9 => Tamanho da String
nome.toUpperCase; // = AGILECODE => Gera uma nova string em letra maiúscula
nome.toLowerCase; // = agilecode => Gera uma nova string em letra minúscula
nome.trim; // Remove os espaços em branco
nome.substring(0, 5); // = Agile => Extrai a parte da string desejada
nome.search("g"); // = 1 =Retorna a posição da string

// Aula 04 - Booleans

var sobrenome = "Sousa";
{
  /*
  !sobrenome = false;
  !!sobrenome = true;

  ! = Negação
  !! = afirmação
*/
}

// Aula 05 - Undefined e Null

var laranja;
var nulo = null;

{
  /*
  laranja = undefined;
  nulo = null;

  Undefined = Retorna quando consultamos uma propriedade que não exista.
  Null = Ausencia de valor
 */
}

// Aula 06 - Object

var pessoa = {
  nome: "João",
  idade: 17,
  endereço: {
    bairro: "Centro",
    logradouro: "Rua trajano",
  },
};

pessoa.nome = "Joao";
pessoa["nome"] = "joao";
pessoa.endereço.bairro = "Centro";
pessoa["endereço"]["bairro"] = "Centro";
pessoa.endereço["bairro"] = "Centro";
pessoa.telefone = null;
pessoa.peso = undefined;

// Aula 07 - Functions parte 1

function sum(a = 2, b = 1) {
  return a + b;
  // Function Declaration
  // Carregada antes da interpretação do código
}

var secondSum = function (a, b) {
  return a + b;
  // Function Expression
  // Carregada durante a interpretação do código
};

thirdSum = (a = 5, b = 5) => {
  return a + b;
  // Arrow Function
  // Carregada durante a interpretação do código
};

var helloWorld = function () {
  return function () {
    return function () {
      return "Hello World!";
    };
  };
  // Chamadas de Inner functions
  // Para acessar funções dentro de funcões temos que chama-las mais de uma vez.
  // por exemplo: console.log(helloWorld()()())
};

var pessoa = {
  nome: "Joao",
  idade: 20,
  getIdade: function () {
    return this.idade;
  },
  // Utilizamos o this para o código perceber que a idade vem de 'dentro do objeto'
};

// Funções Fábrica = Reutilizamos objetos.
var criarPessoa = function (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
};

// Funções Construtoras = Utilizamos o operador NEW, onde criamos objetos.
var Pessoa = function (nome, idade) {
  (this.nome = nome), (this.idade = idade);
};

// Aula 08 funçoes parte 2

var createCounter = function () {
  var value = 0;
  return {
    add: function () {
      return ++value;
    },
  };
  // Factory function
  // Deixando a função pública
};
var counter = createCounter();

var Counter = function () {
  var value = 0;
  this.add = function () {
    return ++value;
  };
  // Constructor function
  // Deixando a função pública
};
var newCounter = new Counter();

var count = (function () {
  var value = 0;
  return {
    add: function () {
      return ++value;
    },
  };
  // Auto execução
  // () no final
  // Revelling pattern
})();

// Aula 09 - Arrays

var carros = [];
carros[0] = "Ford";
carros[1] = "Chevrolet";
carros[2] = "Golf";
var motos = new Array();
motos[0] = "Honda";
motos[1] = "Susuki";
motos[2] = "Harley Deividson";

motos.toString(); // Transforma em um texto
motos.lenght; // calcula os items
motos.push(); // insere elementos no final do Array
motos.pop(); // remove o ultimo elemento do Array
motos.unshift(); // insere elementos no começo do Array
motos.shift(); // remove o primeiro elemento do Array
motos.indexOf(); // localizar o indice de um elemento

motos.forEach(function (elemento) {
  // Mapeia cada elemento, podemos fazer qualque coisa.
});
motos.filter(function (elemento) {
  return elemento.marca === "Ford";
  // Só ira retorna os valores com os parametros acima.
});

var veiculos = carros.concat(motos); // Concatenam os arrays

// Aula 10 - Expressões Regulares(regex)

var regExp = /<'Expressão Regular'>/;
var regExp = new RegExp("Expressão regular");

{
  /*
   exec - Executa a RegExp, retornando os detalhes.
   test - Testa o RegExp, retornando true ou false.

    ^ - Inicia com um determinado caractere.
    $ - Finaliza com um determinado caractere.
    [abc] - Aceita qualquer caractere dentro do grupo
    [^abc] - Não aceita qualquer caractere dentro do grupo
    [0-9] - Aceita qualquer caractere dentro do grupo
    [^0-9] - Não aceita qualquer caractere dentro do grupo
    {n,m} - Quantifica um número mínimo e máximo
    ? - Zero ou um
    * - Zero ou mais
    + - um ou mais
  */
}

var regularExp = /\d{1,2}-?\d{4}/g;
var telefone = "(63) 4002-8922"; // Irá retornar 02-8922 devido as limitações do regex

// Aula 11 - Date

var hora = new Date();

hora.getDate; // Retorna o dia
hora.getDay; // Retorna o dia da semana
hora.getFullYear; // Retorna o ano
hora.getHours; // Retorna as Horas
hora.getMilliseconds; // Retorna os milisegundos
hora.getMonth; // Retorna o mes
hora.getSeconds; // Retorna os segundos
hora.getTime; // Retorna o tempo em milisegundos
hora.getMonth; // Retorna a data em String
hora.toLocaleDateString; // Retorna a data completa
hora.toLocaleTimeString; // Retorna a hora completa

var horaAtual = `${hora.toLocaleTimeString()} in ${hora.toLocaleDateString()}`;

// Aula 12 - Operadores

{
  /*
    Lógicos
      || = ou
      && = e
      ! = negação
      !! = afirmação
      !== = diferente de
      === = igual ao tipo e o valor
    Aritméticos
      + = adição
      - = subtração
      * = multiplicação
      % = resto da divisão
      / = divisão
    Operador Ternário

  */
}

10 === 10; // true
10 < 20 && 10 !== 5; //true
10 + 5 - 5; // = 10 = true
!!10; //true
10 === "10"; //false
10 == "10"; //true
10 > 20 || 10 > 100; //false
10 + 10 === 20 && 20 > 30; // false

// Aula 13 - Statemets

{
  /*
   FOR
   IF
   else
   continue
   while
   switch
   break
   throw
   try e catch
  */
}

var toHackerCase = function (text) {
  for (var i = 0; i < text.lenght; i++) {
    if (text.charAt(i) === "o") {
      hackerTextArray.push(0);
    } else {
      hackerTextArray.push(text.charAt(i));
    }
  }
};

var toHackerCase = function (text) {
  for (var i = 0; i < text.lenght; i++) {
    switch (text.charAt(i)) {
      case "o":
        hackerTextArray.push(0);
      case "e":
        hackerTextArray.push(1);
      case "s":
        hackerTextArray.push(2);
      case "l":
        hackerTextArray.push(3);
      default:
        hackerTextArray.push(text.charAt(i));
    }
  }
  // com o operador SWITCH
};

// Aula 14 - Heranças

{
  /*
    A propriedade PROTO nos da a referencia do protótipo do objeto
    O Object.create determinamos o protótipo do objeto
   */
}
var homem = {
  sexo: "Masculino",
};

var joao = {
  name: "João",
  idade: 20,
  _proto_: homem, // Retornara Masculino
};

Object.setPrototypeOf(joao, homem);
var pedro = Object.create(homem);
pedro.nome = 'Pedro';
pedro.idade = 18;

app.listen(3000, () => {
  console.log("Server ON ;)");
  console.log(pedro.sexo);
});
