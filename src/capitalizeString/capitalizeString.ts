/**
 * Function to capitalize the first char of word or each word in a sentence.
 * @param {string} text - a single word or a sentence.
 * @returns {string} capitalize sentence or a word.
 */
export const capitalizeString = (text: string): string => {
    return text.replace(/\w\S*/g, (str: string) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
};
