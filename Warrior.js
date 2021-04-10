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

    moveRight() {
        console.log(`${this.__name}: moves right like a bad boy.`);
    }

    moveLeft() {
        console.log(`${this.__name}: moves left like a bad boy.`);
    }

    moveBack() {
        console.log(`${this.__name}: moves back like a bad boy.`);
    }

    moveForward() {
        console.log(`${this.__name}: moves forward like a bad boy.`);
    }

}

module.exports = Warrior;
