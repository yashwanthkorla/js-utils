import { isObjectNotEmpty } from '../isObjectNotEmpty';

describe('should check the functionality of the isObjectNotEmpty', () => {
    test('should return true if the object is valid and has keys', () => {
        expect(isObjectNotEmpty({ a: 1 })).toStrictEqual(true);
    });

    test('should return false when the object is empty', () => {
        expect(isObjectNotEmpty({})).toStrictEqual(false);
    });

    test('should return false when the value passed is undefined', () => {
        expect(isObjectNotEmpty(undefined)).toStrictEqual(false);
    });
});
