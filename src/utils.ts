export class Utils {

    /**
     * @param a 
     * @param b 
     * @returns random number between a and b, inclusive
     */
    static random(a: number, b: number): number {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    static randomItemFromArray(arr: any[]): any{
        return arr[this.random(0, arr.length - 1)];
    }
}