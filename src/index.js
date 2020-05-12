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

app.listen(300, () => {
    console.log(';) Server Online!')
});