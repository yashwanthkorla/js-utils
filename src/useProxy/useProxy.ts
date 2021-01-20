/**
 * Function to return 0 when there user is trying to access a key with in an object or indexing with in an array.
 * @param obj - Object which you want to modified to return 0 instead of undefined.
 * @param defaultReturnValue - use when you want the return type of object to be some value.
 * @returns {Record<string, unknown>} An object with traps included, that is undefined being overwritten with 0.
 */
export const useProxy = (obj: Record<string, unknown>, defaultReturnValue?: string | number | Function): Record<string, unknown> =>
  new Proxy(obj, {
    get(target, key) {
      if (key in target) return target[(key as unknown) as string];
      return defaultReturnValue || 0;
    },
  });
