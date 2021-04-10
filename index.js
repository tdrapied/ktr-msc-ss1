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

warrior.moveRight();
warrior.moveLeft();
warrior.moveBack();
warrior.moveForward();
mage.moveRight();
mage.moveLeft();
mage.moveBack();
mage.moveForward();
