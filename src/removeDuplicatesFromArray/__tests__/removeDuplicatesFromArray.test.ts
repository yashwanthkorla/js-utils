import { removeDuplicatesFromArray } from '../removeDuplicatesFromArray';

describe('should check the functionality of the function.', () => {
    test('should remove duplicates from the array', () => {
        const duplicateArray = ['1', 1, 2, 1, '1'];
        const uniqueArray = ['1', 1, 2];
        expect(removeDuplicatesFromArray(duplicateArray)).toStrictEqual(uniqueArray);
    });
});
