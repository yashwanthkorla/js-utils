/**
 * Function to check whether a variable is array and has some length.
 * If empty array it will return false.
 * @function
 * @param {unknown} arr - array
 * @returns {boolean} tells whether array has elements in it or not.
 */
export const isArrayNotEmpty = (arr: unknown): boolean => Array.isArray(arr) && !!arr.length;
