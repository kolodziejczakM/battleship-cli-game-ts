import { Widgets } from 'blessed';
interface IScreen {
    renderWindow(): void;
}
export declare class Screen implements IScreen {
    readonly screenBox: Widgets.Screen;
    private window;
    readonly windowBox: Widgets.BoxElement;
    constructor(screenBox: Widgets.Screen, window: {
        render: Function;
    });
    renderWindow(): void;
}
declare const _default: Screen;
export default _default;
