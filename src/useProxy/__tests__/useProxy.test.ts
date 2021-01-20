import { useProxy } from '../useProxy';

describe('should return a new object', () => {
  const obj = {
    test: 'Yes i am here',
  };
  test('Should check whether the object is returning 0 or undefined when accessing unknown key', () => {
    expect(useProxy(obj).test1).toStrictEqual(0);
    expect(useProxy(obj).test2).not.toStrictEqual(undefined);
  });

  test('should return the key value with in the obj', () => {
    expect(useProxy(obj).test).toStrictEqual('Yes i am here');
  });
});
