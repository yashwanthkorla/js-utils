/**
 * Function to remove duplicates from the array.
 * Array can be of only string or it can also be of combination of string, numbers and other data types.
 * @param {Array} array
 * @returns {Array} unique array with out duplicates
 */
export const removeDuplicatesFromArray = (array: any[]): any[] => Array.from(new Set(array));
