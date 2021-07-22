class Util {

    /**
     * Return a random number between a and b, inclusive
     * 
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    static random(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    /**
     * Return a random object from an array 
     * 
     * @param {[Object, ...]} arr 
     * @param {number} a 
     * @param {number} b 
     * @returns {Object}
     */
    static randomItemFromArray(arr, a, b) {
        return arr[Util.random(0, arr.length - 1)];
    }

    /**
     * Return whether the number x is in the range 
     * 
     * @param {number} x
     * @param {[number, number]} range 
     * @returns {boolean}
     */
    static isInRange(x, range) {
        return range[0] <= x && x <= range[1];
    }

}