const Warrior = require('./exceptions/Warrior');
const Mage = require('./exceptions/Mage');
const WeaponException = require('./exceptions/WeaponException');

/**
 * @type {Warrior}
 */
const warrior = new Warrior("Jean-Luc");

/**
 * @type {Mage}
 */
const mage = new Mage("Robert");

warrior.tryToAttack("screwdriver");
mage.tryToAttack("hammer");
warrior.tryToAttack("hammer");

try {
    mage.attack("");
} catch (e) {
    if (e instanceof WeaponException) {
        console.log(e.getMessage());
    }
}
