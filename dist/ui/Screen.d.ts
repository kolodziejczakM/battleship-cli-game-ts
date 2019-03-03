import { Widgets as IWidgets } from 'blessed';
import { Store as IStore } from 'redux';
interface IScreen {
    renderWindow(): void;
}
declare class Screen implements IScreen {
    readonly store: IStore;
    readonly screenBox: IWidgets.Screen;
    readonly windowBox: IWidgets.BoxElement;
    constructor(store: IStore, screenBox: IWidgets.Screen, windowBox: IWidgets.BoxElement);
    renderWindow(): void;
}
declare const _default: Screen;
export default _default;
