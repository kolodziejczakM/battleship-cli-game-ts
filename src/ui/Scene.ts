import { Widgets as IWidgets } from 'blessed';

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
        private node: IWidgets.BoxElement,
        private childComponents: Array<IWidgets.BoxElement | IWidgets.TextElement>,
        private onInitCallback: () => void,
        private windowBox: IWidgets.BoxElement
    ) {}

    private onInit(): void {
        this.childComponents.forEach((childComponent: IWidgets.BoxElement): void => {
            this.node.append(childComponent);
        });

        this.onInitCallback();
        // TODO: add decorator @rerenderAfter??
    }

    public start(): void {
        this.windowBox.append(this.node);
        this.onInit();
         // TODO: add decorator @rerenderAfter??
    }

    public end(): void {
        this.windowBox.remove(this.node);
        // TODO: add decorator @rerenderAfter??
    }
}
