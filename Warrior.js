const Character = require('./Character');

/**
 * Class Warrior
 */
class Warrior extends Character {

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name, "Warrior");

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

        console.log(`${this.__name}: My name will go down in history!`);
    }

    /**
     * @param {string} weapon
     */
    attack(weapon) {
        if (weapon === "hammer" || weapon === "sword") {
            console.log(`${this.__name}: Rrrrrrrrr....`);
            console.log(`${this.__name}: I'll crush you with my ${weapon}!`);
        }
    }

}

module.exports = Warrior;
