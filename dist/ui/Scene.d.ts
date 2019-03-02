import { Widgets } from 'blessed';
export interface IScene {
    start: () => void;
    end: () => void;
}
export default class Scene implements IScene {
    private node;
    private childComponents;
    private onInitCallback;
    private windowBox;
    constructor(node: Widgets.BoxElement, childComponents: Array<Widgets.BoxElement | Widgets.TextElement>, onInitCallback: () => void, windowBox: Widgets.BoxElement);
    private onInit;
    start(): void;
    end(): void;
}
