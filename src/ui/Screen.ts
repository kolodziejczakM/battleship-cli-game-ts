/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import blessed, { Widgets as IWidgets } from 'blessed';
import window from './Window';

const screenBox = blessed.screen({
    title: 'Battleship by Marcin Kołodziejczak',
    smartCSR: true
});

const windowBox = window.render();

interface IScreen {
    /**
     * Appending window node on screen instance
     *
     * @memberof Screen
     */
    renderWindow(): void;
}

/**
 * Singleton class represeting whole terminal tab (viewport).
 *
 * @class Screen
 * @implements {IScreen}
 */
class Screen implements IScreen {
    constructor(
        public readonly screenBox: IWidgets.Screen,
        public readonly windowBox: IWidgets.BoxElement
    ) {}

    public renderWindow(): void {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}

export default new Screen(screenBox, windowBox);
