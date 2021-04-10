const Character = require('./Character');
const WeaponException = require('./WeaponException');

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
        if (!weapon || weapon.length < 1) throw new WeaponException(`${this.__name}: I refuse to fight with my bare hands.`);
        if (weapon !== "magic" && weapon !== "wand") {
            throw new WeaponException(`${this.__name}: I don 't need this stupid ${weapon}! Don 't misjudge my powers!`);
        }

        console.log(`${this.__name}: Rrrrrrrrr....`);
        console.log(`${this.__name}: Feel the power of my ${weapon}!`);
    }

    moveRight() {
        console.log(`${this.__name}: moves right furtively.`);
    }

    moveLeft() {
        console.log(`${this.__name}: moves left furtively.`);
    }

    moveBack() {
        console.log(`${this.__name}: moves back furtively.`);
    }

    moveForward() {
        console.log(`${this.__name}: moves forward furtively.`);
    }

}

module.exports = Mage;
