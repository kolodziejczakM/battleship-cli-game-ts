import { SceneName } from './scenes';
export interface IState {
    battlefieldSize: string;
    currentScene: SceneName;
    previousScene: SceneName;
}
declare const _default: import("redux").Store<any, import("redux").AnyAction>;
export default _default;
