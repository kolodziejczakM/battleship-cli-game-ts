import { Widgets } from 'blessed';

export interface IScene {
    node: Widgets.BoxElement;
    onInit: () => void;
}

export default class Scene implements IScene {
    constructor(
        public node: Widgets.BoxElement,
        public onInit: () => void
    ) { }
}
