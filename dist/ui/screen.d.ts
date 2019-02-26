import { Widgets } from 'blessed';
interface DecoratedListener {
    (...args: any[]): void;
}
interface Scene {
    node: Widgets.BoxElement;
    onInit: () => void;
}
export declare const rerenderAfter: (targetFn: Function) => DecoratedListener;
declare class Screen {
    screenBox: Widgets.Screen;
    private windowBox;
    date: number;
    constructor(screenBox: Widgets.Screen, window: Function);
    startScene(scene: Scene): void;
    removeScene(scene: Scene): void;
    renderWindow(): void;
}
declare const _default: Screen;
export default _default;
