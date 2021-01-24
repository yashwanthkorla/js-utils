import { joinClassNames } from '../joinClassNames';

describe('should check the function of join classnames util function', () => {
    test('should join two strings together and match the result', () => {
        expect(joinClassNames('a', 'b')).toStrictEqual('a b');
        expect(joinClassNames('a', 'b', 'c')).not.toStrictEqual('a');
    });

    test('should join an array of string and array', () => {
        expect(joinClassNames('string', ['array string'])).toStrictEqual('string array string');
    });

    test('should return empty string when other data types are passed such as false, null, undefined ', () => {
        expect(joinClassNames(false, null, undefined)).toStrictEqual('');
    });

    test('should return object keys whose value are true', () => {
        expect(joinClassNames({ key: true, key2: false })).toStrictEqual('key');
        expect(joinClassNames({ key: false, key2: true })).toStrictEqual('key2');
    });

    test('should return string and number together', () => {
        expect(joinClassNames('one', 1)).toStrictEqual('one 1');
    });
});
