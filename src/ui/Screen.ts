/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import blessed, { Widgets as IWidgets } from 'blessed';
import { Store as IStore } from 'redux';
import Store from './Store';
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
        public readonly store: IStore,
        public readonly screenBox: IWidgets.Screen,
        public readonly windowBox: IWidgets.BoxElement
    ) {}

    public renderWindow(): void {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}

export default new Screen(Store, screenBox, windowBox);
