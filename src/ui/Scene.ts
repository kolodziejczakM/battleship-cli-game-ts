/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { Widgets as IWidgets } from 'blessed';
import { refreshScreen } from './Screen';

export interface IScene {
    /**
     * It appends scene to windowBox and
     * calls onInit hook
     *
     * @memberof IScene
     */
    start: () => void;
    /**
     * It removes scene from windowBox
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

    /**
     * It appends child components to scene
     * and calls onInit callback afterwards
     *
     * @private
     * @memberof Scene
     */
    @refreshScreen
    private onInit(): void {
        this.childComponents.forEach(
            (childComponent: IWidgets.BoxElement): void => {
                this.node.append(childComponent);
            }
        );

        this.onInitCallback();
    }

    @refreshScreen
    public start(): void {
        this.onInit();
        this.windowBox.append(this.node);
    }

    @refreshScreen
    public end(): void {
        this.windowBox.remove(this.node);
    }
}
