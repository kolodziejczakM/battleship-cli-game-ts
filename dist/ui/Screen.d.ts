import { Widgets } from 'blessed';
import { IScene } from './Scene';
interface IScreen {
    startScene(scene: IScene): void;
    removeScene(scene: IScene): void;
    renderWindow(): void;
}
export declare class Screen implements IScreen {
    screenBox: Widgets.Screen;
    private readonly windowBox;
    date: number;
    constructor(screenBox: Widgets.Screen, window: Function);
    startScene(scene: IScene): void;
    removeScene(scene: IScene): void;
    renderWindow(): void;
}
declare const _default: Screen;
export default _default;
