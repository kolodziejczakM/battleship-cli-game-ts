/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets } from 'blessed';

class Window {
    public render(): Widgets.BoxElement {
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
        })
    }
}

export default new Window();
