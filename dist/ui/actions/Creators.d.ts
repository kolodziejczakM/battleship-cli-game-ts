export interface IAction<T> {
    type: string;
    payload: T;
}
interface IActionCreator<U> {
    (payload: U): IAction<U>;
}
export declare const setCurrentScene: IActionCreator<string>;
export declare const setBattlefieldSize: IActionCreator<string>;
export {};
