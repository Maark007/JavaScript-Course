const express = require('express');

const app = express();

// Aula 01 - Declarações de variáveis

var name = "AgileCode";
var top10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var $scope = {title: "JavaScript", version: "6"};
var _person = "John";
var numberCode = 8987977;
var a = 10, b = 9, c = 8;
var language;

// Aula 02 - Numbers

var nota = 10;

nota.toExponential(2); // 100
nota.toFixed(2); // 10.00
nota.toPrecision(1); // 1e+1
nota.toString() // "10"
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

app.listen(300, () => {
    console.log(';) Server Online!')
});