import { joinClassNames } from '../joinClassNames';

describe('should check the function of join classnames util function', () => {
    test('should join two strings together', () => {
        expect(joinClassNames('a', 'b')).toStrictEqual('a b');
    });
});
