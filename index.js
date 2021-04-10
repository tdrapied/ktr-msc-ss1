const Warrior = require('./Warrior');
const Mage = require('./Mage');

/**
 * @type {Warrior}
 */
const warrior = new Warrior("Jean-Luc");

/**
 * @type {Mage}
 */
const mage = new Mage("Robert");

warrior.attack("hammer");
mage.attack("magic");
