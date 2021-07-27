export class Compare {
    /**
     * is the number within the bounds
     * @param x
     * @param min
     * @param max
     */
    static isInRange(x: number, min: number, max: number) {
        return min <= x && x <= max;
    }

    /**
     * Checks for dictionary comparisons.
     *
     * In JavaScript and TypeScript, If two elements are elements that implement some kind of interface, then comparing
     * them using comparison operators is false. Even if these objects are equal in value.
     *
     * This function solves the problem and matches the elements by the value of each field.
     *
     * @param a
     * @param b
     */
    static shallowEqual(a: any, b: any): boolean {
        const keys1 = Object.keys(a);
        const keys2 = Object.keys(b);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (a[key] !== b[key]) {
                return false;
            }
        }

        return true;

    }
}