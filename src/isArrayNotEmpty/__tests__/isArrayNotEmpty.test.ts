import { isArrayNotEmpty } from '../isArrayNotEmpty';

describe('should check the functionality of isArrayNotEmpty util', () => {
    test('should return false for an empty array', () => {
        expect(isArrayNotEmpty([])).toStrictEqual(false);
    });

    test('should return true for non empty array', () => {
        expect(isArrayNotEmpty([1])).toStrictEqual(true);
    });
});
