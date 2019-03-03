import { Widgets as IWidgets } from 'blessed';
export interface IScene {
    start: () => void;
    end: () => void;
}
export default class Scene implements IScene {
    private node;
    private childComponents;
    private onInitCallback;
    private windowBox;
    constructor(node: IWidgets.BoxElement, childComponents: Array<IWidgets.BoxElement | IWidgets.TextElement>, onInitCallback: () => void, windowBox: IWidgets.BoxElement);
    private onInit;
    start(): void;
    end(): void;
}
