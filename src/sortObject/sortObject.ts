import { SortObjectConstants, SortObjectReturnType } from './sortObject.type';

/**
 * Function to sort the object by key and value.
 * use only when the object value is of number.
 * @param {Record<string, number>} obj - object on which you want to perform operations.
 * @function
 * @author Yashwanth Korla <yashwanthkorla@gmail.com>
 */
export const sortObject = (obj: Record<string, number>) => {
    /**
     * Function to create array of entries out of object.
     * @method
     * @private
     * @returns {[string, number | string][]} list of object entires in the form of array.
     */
    const _getArrayOutOfObject = (): [string, number | string][] => Object.entries(obj);

    /**
     * Function to filter the obj by keys using char code at.
     *
     * @param {[string, string | number]} first - first entry
     * @param {[string, string | number]} second - second entry
     * @param {number} index
     * @private
     * @method
     * @returns {number}
     */
    const _filterStringUsingCharCodeAt = (
        first: [string, string | number],
        second: [string, string | number],
        index: number,
    ): number => {
        if (first[0].charCodeAt(index) === second[0].charCodeAt(index)) {
            _filterStringUsingCharCodeAt(first, second, index + 1);
        }
        return Number(first[0].charCodeAt(index)) - Number(second[0].charCodeAt(index));
    };

    /**
     * Function to frame object from array of key value entries.
     * @private
     * @method
     * @param {[string, string | number][]} sortedArrayObject
     * @returns {SortObjectReturnType} the sorted object
     */
    const _frameObject = (sortedArrayObject: [string, string | number][]): SortObjectReturnType => {
        // can also achieve using reducer.
        return sortedArrayObject.reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

        /**
         * For now the node js below 12 version is not supporting the from entries so using reduce method instead of it.
         * Once available can enable the below code.
         * Below using es2019 feature i.e. Object.fromEntries.
         * This might be causing issue when you write a test file using jest.
         * To make it recognize add from entires to the object constructor. have a look at the test file of sortObject.
         */
        // return Object.fromEntries(sortedArrayObject);
    };

    /**
     * Function to sort the obj by key.
     * @param {string} sortType - 'ASC' - ascending  or "DES" - descending
     * @public
     * @returns {SortObjectReturnType} the sorted object by key.
     */
    const sortObjectByKey = (sortType: 'ASC' | 'DES'): SortObjectReturnType => {
        const sortedArrayByKey = _getArrayOutOfObject().sort((first, second) =>
            _filterStringUsingCharCodeAt(first, second, 0),
        );
        return _frameObject(sortType === SortObjectConstants.ASC ? sortedArrayByKey : sortedArrayByKey.reverse());
    };

    /**
     * Function to sort the object by value.
     * @method
     * @public
     * @param {string} sortType - 'ASC' - ascending  or "DES" - descending
     * @returns {SortObjectReturnType} the sorted object by value
     */
    const sortObjectByValue = (sortType: 'ASC' | 'DES'): SortObjectReturnType => {
        const sortedArray = _getArrayOutOfObject().sort((firstItem, secondItem) => {
            return Number(secondItem[SortObjectConstants.value]) - Number(firstItem[SortObjectConstants.value]);
        });
        return _frameObject(sortType === SortObjectConstants.ASC ? sortedArray : sortedArray.reverse());
    };

    return {
        byKey: sortObjectByKey,
        byValue: sortObjectByValue,
    };
};
