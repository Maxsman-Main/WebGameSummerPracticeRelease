class Util {

    static random(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    static randomItemFromArray(arr, a, b) {
        return arr[Util.random(0, arr.length - 1)];
    }

    static isInRange(x, range) {
        return range[0] <= x && x <= range[1];
    }

}