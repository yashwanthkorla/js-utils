import { sortObject } from '../sortObject';

describe('should check the functionality of sort object', () => {
    beforeEach(() => {
        Object.prototype.constructor.prototype.fromEntries = (enties: [string, string | number][]) => {
            return enties.reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
        };
    });

    test('should sort the object based on the values', () => {
        const tempObj = { a: 1, b: 4, c: 2, d: 3 };
        const ascObj = { a: 1, c: 2, d: 3, b: 4 };
        const decObj = { b: 4, d: 3, c: 2, a: 1 };

        expect(sortObject(tempObj).byValue('ASC')).toStrictEqual(ascObj);
        expect(sortObject(tempObj).byValue('DES')).toStrictEqual(decObj);
    });

    test('should sort the object based on the keys', () => {
        const tempObj = { cat: 1, dog: 2, abc: 3 };
        const ascObj = { abc: 3, cat: 1, dog: 2 };
        const decObj = { dog: 2, cat: 1, abc: 3 };

        expect(sortObject(tempObj).byKey('ASC')).toStrictEqual(ascObj);
        expect(sortObject(tempObj).byKey('DES')).toStrictEqual(decObj);
    });
});
