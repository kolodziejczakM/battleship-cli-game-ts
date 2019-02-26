/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import blessed, { Widgets } from 'blessed';
import Window from './Window';
import { IScene } from './Scene';

const screenBox = blessed.screen({
    title: 'Battleship by Marcin Kołodziejczak',
    smartCSR: true
});

interface IScreen {
    /**
     * Introduces scene by adding scene node to window node instance 
     * and calling scene's onInit hook
     *
     * @param {IScene} scene
     * @memberof Screen
     */
    startScene(scene: IScene): void;
    /**
     * Deleting window node from screen instance
     *
     * @param {Scene} scene
     * @memberof Screen
     */
    removeScene(scene: IScene): void;
    /**
     * Appending window node on screen instance
     *
     * @memberof Screen
     */
    renderWindow(): void;
}

// abstract class AbstractScreen implements IScreen {
//     public abstract startScene(scene: IScene): void;
//     protected abstract removeScene(scene: IScene): void;
//     public abstract renderWindow(): void;
// }

/**
 * Singleton class represeting whole terminal viewport.
 *
 * @class Screen
 * @implements {IScreen}
 */
export class Screen implements IScreen {
    private readonly windowBox: Widgets.BoxElement;
    public date = Date.now();

    constructor(
        public screenBox: Widgets.Screen,
        window: Function
    ) {
        // TODO: Window has to be a class and instance has to be passed. Shouldn't be called here.
        this.windowBox = window();
    }
    
    // TODO: not Screen responsibility
    public startScene(scene: IScene): void {
        this.windowBox.append(scene.node);
        scene.onInit();
    }

    // TODO: not Screen responsibility
    public removeScene(scene: IScene): void {
        this.windowBox.remove(scene.node);
    }

    public renderWindow(): void {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}

export default new Screen(screenBox, Window);
