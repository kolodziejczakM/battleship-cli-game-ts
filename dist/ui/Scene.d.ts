import { Widgets } from 'blessed';
export interface IScene {
    node: Widgets.BoxElement;
    onInit: () => void;
}
export default class Scene implements IScene {
    node: Widgets.BoxElement;
    onInit: () => void;
    constructor(node: Widgets.BoxElement, onInit: () => void);
}
