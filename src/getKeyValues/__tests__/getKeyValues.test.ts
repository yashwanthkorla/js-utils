import { getKeyValues } from '../getKeyValues';

describe('check the functionality of getKeyValues', () => {
    const a = {
        a: {
            c: 'd',
            e: 'f',
        },
        b: {
            d: 'a',
        },
    };
    test('should check whether the function returning a single value when a array is passed', () => {
        const singleValue = getKeyValues(a, [['a', 'c']]);
        expect(singleValue).toStrictEqual(['d']);
    });
});
