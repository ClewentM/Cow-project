const cowsay = require('cowsay');
const data = require('./information');
console.log(cowsay.say({text: `Je suis ${data.name} du campus de ${data.campus}`}));

