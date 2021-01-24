export type JoinClassNamePropsType =
    | string
    | number
    | Record<string, boolean | undefined | null>
    | undefined
    | null
    | boolean
    | JoinClassNamePropsType[];
