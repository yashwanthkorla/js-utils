/**
 * Function to check whether the object is valid and has properties in it.
 * @function
 * @param {unknown} obj
 * @returns {boolean}
 */
export const isObjectNotEmpty = (obj: unknown): boolean =>
    !!(obj && Object.keys(obj as Record<string, unknown>).length);
