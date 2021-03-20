/**
 * Function to extract values of the keys from the given obj
 *
 * Ex:
 *
 * const a = {
 *    a : {
 *      c: 'd',
 *      e: 'f',
 *    },
 *    b : {
 *      a: 'b'
 *    }
 * }
 *
 * usage:
 *
 * * getKeyValues(a, [ [ 'a', 'c' ] ] ) - will return d - single value
 * * getKeyValues(a, [ { 'a' : [ 'c', 'e' ] } ]) - will return [['d', 'f']]
 *
 * Usage in code:
 * const [[firstValue, secondValue]] = getKeyValues(a, [{'a': ['c', 'e']}])
 *
 * @author - "Yashwanth korla"
 * @param mainObj - Object on which you want to extract the values based on keys.
 * @param objKeys - array of keys or object of keys.
 * @return array of values which are requested.
 */
export const getKeyValues = (
    mainObj: Record<string, unknown>,
    objKeys: (string[] | Record<string, string[]>)[],
): unknown[] => {
    /**
     * Function to extract multiple keys when data is sent as an array of objects.
     * @param obj
     * @param mainKey
     * @param currentValue
     * @return array of values
     */
    const _extractMultipleValues = (
        obj: Record<string, unknown>,
        mainKey: string,
        currentValue: Record<string, string[]>,
    ): unknown[] => {
        return (
            currentValue?.[mainKey]?.map((key: string) => {
                const mainKeyObject = obj?.[mainKey] as Record<string, unknown>;
                return mainKeyObject?.[key] || '';
            }) || []
        );
    };

    /**
     * Function to extract multiple keys when data is sent as an array of array's
     * @param obj
     * @param array
     * @return array of values
     */
    const _extractSingleValue = (obj: Record<string, unknown>, array: string[]): string => {
        if (array.length === 1) {
            const [finalValue] = array;
            return (obj[finalValue] as string) || '';
        }

        const value = obj?.[array.shift() as string];
        return _extractSingleValue((value as unknown) as Record<string, unknown>, array);
    };
    return objKeys.reduce((acc: unknown[], curr) => {
        const value = !Array.isArray(curr)
            ? _extractMultipleValues(mainObj, Object.keys(curr)[0], curr)
            : _extractSingleValue(mainObj, [...curr]);
        acc.push(value);
        return acc;
    }, []);
};
