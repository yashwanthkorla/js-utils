import isArrayNotEmpty from '../isArrayNotEmpty';
import { JoinClassNamePropsType } from './joinClassNames.type';

/**
 * Function to join two class names together.
 * Example:
 * joinClassNames('a', 'b')  -> 'a b'
 * joinClassName('a', ['c', false, null, undefined]) -> 'a c'
 * joinClassName({a : true, b: false, c: true}) -> 'a c'
 * @param {} allParams - array of params.
 * @returns {string} combined class names.
 */
export function joinClassNames(...allParams: JoinClassNamePropsType[]): string {
    /**
     * Function to loop through arguments and combine the valid data type value.
     * @method
     * @param {Array} args
     * @returns {string} the combined class names.
     */
    const concatClassNames = (args: any[]): string => {
        return args
            .reduce((acc, curr) => {
                const currentValueType = typeof curr;

                // Return the current accumulated array when the key is of type false, null, undefined.
                if (!curr) return acc;

                // Runs when key is of type string and number.
                if (currentValueType === 'string' || currentValueType === 'number') {
                    acc.push(curr);
                } else if (isArrayNotEmpty(curr)) {
                    // Runs when key type is array and has keys.
                    const values = concatClassNames(curr);
                    if (values) {
                        acc.push(values);
                    }
                } else if (currentValueType === 'object') {
                    // RUns when key is an object. if the object is not of the object instance skip the adding part.
                    if (curr.toString !== Object.prototype.toString) {
                        acc.push(curr.toString());
                    } else {
                        Object.entries(curr).forEach((entry) => {
                            const [key, value] = entry;
                            if (value) {
                                acc.push(key);
                            }
                        });
                    }
                }
                return acc;
            }, [])
            .join(' ');
    };

    // If the rest param is not supported in the browser, fall back to the use builtin arguments variable.
    return isArrayNotEmpty(allParams) ? concatClassNames(allParams) : concatClassNames(Array.from(arguments));
}
