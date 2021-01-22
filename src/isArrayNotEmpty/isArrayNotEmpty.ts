/**
 * Function to check whether a variable is array and has some length.
 * 1. If empty array it will return false.
 * @function
 * @param {Array} arr - array
 * @returns {boolean}
 */
export const isArrayNotEmpty = (arr: unknown[]): boolean => Array.isArray(arr) && !!arr.length;
