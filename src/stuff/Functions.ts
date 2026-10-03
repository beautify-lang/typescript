export type NoArgsReturnVoidFunction = () => void;
export type NoArgsReturnNeverFunction = () => never;
export type NoArgsAsyncFunction<T = void> = () => Promise<T>;
export type TransformerFunction<A, B> = (arg: A) => B;
