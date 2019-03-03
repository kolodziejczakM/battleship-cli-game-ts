import { Widgets as IWidgets } from 'blessed';
interface IScreen {
    renderWindow(): void;
}
declare class Screen implements IScreen {
    readonly screenBox: IWidgets.Screen;
    readonly windowBox: IWidgets.BoxElement;
    constructor(screenBox: IWidgets.Screen, windowBox: IWidgets.BoxElement);
    renderWindow(): void;
}
declare const _default: Screen;
export default _default;
