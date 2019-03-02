/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import blessed, { Widgets } from 'blessed';
import window from './Window';

const screenBox = blessed.screen({
    title: 'Battleship by Marcin Kołodziejczak',
    smartCSR: true
});

interface IScreen {
    /**
     * Appending window node on screen instance
     *
     * @memberof Screen
     */
    renderWindow(): void;
}

/**
 * Singleton class represeting whole terminal viewport.
 *
 * @class Screen
 * @implements {IScreen}
 */
export class Screen implements IScreen {
    public readonly windowBox: Widgets.BoxElement;

    constructor(
        public readonly screenBox: Widgets.Screen,
        private window: { render: Function }
    ) {
        this.windowBox = this.window.render();
    }

    public renderWindow(): void {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}

export default new Screen(screenBox, window);
