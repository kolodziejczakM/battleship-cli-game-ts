/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';

// TODO: Make it a singleton, now it's factory
const Window = () => box({
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

export default Window;
