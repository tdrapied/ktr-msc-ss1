const Character = require('./Character');

/**
 * Class Mage
 */
class Mage extends Character {

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name, "Mage");

        /**
         * @type {number}
         */
        this.__life = 100;

        /**
         * @type {number}
         */
        this.__agility = 8;

        /**
         * @type {number}
         */
        this.__strength = 10;

        /**
         * @type {number}
         */
        this.__wit = 3;

        console.log(`${this.__name}: May the gods be with me.`);
    }

    /**
     * @param {string} weapon
     */
    attack(weapon) {
        if (weapon === "magic" || weapon === "wand") {
            console.log(`${this.__name}: Rrrrrrrrr....`);
            console.log(`${this.__name}: Feel the power of my ${weapon}!`);
        }
    }

}

module.exports = Mage;
