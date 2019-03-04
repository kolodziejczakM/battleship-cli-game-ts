/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';

interface IWindow {
    /**
     * It returns windowBox element which
     * is a frame for all game-connected components
     *
     * @returns {IWidgets.BoxElement}
     * @memberof IWindow
     */
    render(): IWidgets.BoxElement;
}

class Window implements IWindow {
    public render(): IWidgets.BoxElement {
        return box({
            left: 'center',
            width: '90%',
            content: '{center}{bold}Battleship!{/bold}{/center}',
            tags: true,
            border: {
                type: 'line'
            },
            style: {
                fg: '#ffffff',
                bg: '#000000',
                border: {
                    fg: '#f0f0f0',
                    bg: '#000'
                }
            }
        });
    }
}

export default new Window();
