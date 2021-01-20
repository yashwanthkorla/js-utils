/**
 * Function to return 0 when there user is trying to access a key with in an object or indexing with in an array.
 * @param obj - Object which you want to modified to return 0 instead of undefined.
 * @returns {Record<string, unknown>} An object with traps included, that is undefined being overwritten with 0.
 */
export const useProxy = (obj: Record<string, unknown>): Record<string, unknown> =>
  new Proxy(obj, {
    get(target, key) {
      if (key in target) return target[(key as unknown) as string];
      return 0;
    },
  });
