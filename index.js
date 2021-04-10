const Character = require('./Character');

/**
 * @type {Character}
 */
const perso = new Character("Jean-Luc");

console.log(perso.getName());
console.log(perso.getLife());
console.log(perso.getAgility());
console.log(perso.getStrength());
console.log(perso.getWit());
console.log(perso.getRPGClass());

perso.attack("my weapon");
