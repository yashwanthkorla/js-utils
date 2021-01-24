import isArrayNotEmpty from '../isArrayNotEmpty';

export function joinClassNames(...rest: any[]) {
    if (isArrayNotEmpty(rest)) {
        return rest.join(' ');
    } else {
        return Array.from(arguments).join(' ');
    }
}
