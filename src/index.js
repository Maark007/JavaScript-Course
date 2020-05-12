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

app.listen(3000, () => {
  console.log();
});
