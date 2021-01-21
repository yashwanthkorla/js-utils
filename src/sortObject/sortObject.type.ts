export enum SortObjectConstants {
    key = 0,
    value = 0,
    ASC = 'ASC',
    DES = 'DES',
}

export interface SortObjectReturnType {
    [k: string]: string | number;
}
