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

/**
 * It refreshes screen (re-render) which is needed to display new things on it
 * 
 * @param target - Class which contains decorated method
 * @param propertyKey - Method name on which it's used
 * @param descriptor - descriptor object which contains method to decorate
 */
export const refreshScreen = (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const outcome = originalMethod.apply(this, args);
        screenBox.render();

        return outcome;
    };
};

interface IScreen {
    /**
     * Appending window node on screen instance
     *
     * @memberof Screen
     */
    renderWindow(): void;
    screenBox: IWidgets.Screen;
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
