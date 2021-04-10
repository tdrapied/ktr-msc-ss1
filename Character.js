/**
 * Abstract Class Character
 */
class Character {

    /**
     * @param {string} name
     * @param {string} RPGClass
     */
    constructor(name, RPGClass) {
        // Uncomment this code to apply the abstract class
        //
        // if (this.constructor == Character) {
        //     throw new Error(`The ${this.constructor.name} abstract class may not be instantiated.`);
        // }

        /**
         * @type {string}
         */
        this.__name = name;

        /**
         * If RPGClass is not defined ; the variable get constructor name
         *
         * @type {string}
         */
        this.__RPGClass = RPGClass || this.constructor.name;

        /**
         * @type {number}
         */
        this.__life = 50;

        /**
         * @type {number}
         */
        this.__agility = 2;

        /**
         * @type {number}
         */
        this.__strength = 2;

        /**
         * @type {number}
         */
        this.__wit = 2;
    }

    /**
     * @return {string}
     */
    getName() {
        return this.__name;
    }

    /**
     * @return {string}
     */
    getRPGClass() {
        return this.__RPGClass;
    }

    /**
     * @return {number}
     */
    getLife() {
        return this.__life;
    }

    /**
     * @return {number}
     */
    getAgility() {
        return this.__agility;
    }

    /**
     * @return {number}
     */
    getStrength() {
        return this.__strength;
    }

    /**
     * @return {number}
     */
    getWit() {
        return this.__wit;
    }

    /**
     * @param {string} content
     */
    attack(content) {
        console.log(`${this.__name}: Rrrrrrrrr....`);
    }

}

module.exports = Character;
