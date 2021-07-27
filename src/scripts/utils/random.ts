export class Random {
    /**
     * @param a
     * @param b
     * @returns random number between a and b, inclusive
     */
    static inRange(a: number, b: number): number {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    static oneItemFromArray(arr: any[]): any{
        return arr[this.inRange(0, arr.length - 1)];
    }
}