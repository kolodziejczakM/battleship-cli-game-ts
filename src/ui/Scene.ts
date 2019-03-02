import { Widgets } from 'blessed';

export interface IScene {
    /**
     * TODO: 
     *
     * @memberof IScene
     */
    start: () => void;
    /**
     * TODO:
     *
     * @memberof IScene
     */
    end: () => void;
}

export default class Scene implements IScene {
    constructor(
        private node: Widgets.BoxElement,
        private childComponents: Array<Widgets.BoxElement | Widgets.TextElement>,
        private onInitCallback: () => void,
        private windowBox: Widgets.BoxElement
    ) {}

    private onInit(): void {
        this.childComponents.forEach((childComponent: Widgets.BoxElement): void => {
            this.node.append(childComponent);
        });

        this.onInitCallback();
    }

    public start(): void {
        this.windowBox.append(this.node);
        this.onInit();
    }

    public end(): void {
        this.windowBox.remove(this.node);
    }
}
