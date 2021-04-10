/**
 * Class WeaponException
 */
class WeaponException extends Error {

    /**
     * @param {string} message
     */
    constructor(message) {
        super(message);
    }

    /**
     * @return {string}
     */
    getMessage() {
        return this.message;
    }

}

module.exports = WeaponException;
