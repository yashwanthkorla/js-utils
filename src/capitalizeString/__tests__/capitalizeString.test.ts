import { capitalizeString } from '../capitalizeString';

describe('should check the functionality of capitalizeString util function', () => {
    test('should capitalize the first char of the words in a sentence', () => {
        const normalText = 'capitalize string';
        const capitalizeText = 'Capitalize String';
        expect(capitalizeString(normalText)).toStrictEqual(capitalizeText);
    });
});
