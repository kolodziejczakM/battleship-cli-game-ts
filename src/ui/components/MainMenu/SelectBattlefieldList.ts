/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { list, Widgets } from 'blessed';
import { MainMenu } from '../../scenes/MainMenu';

const SelectBattlefieldList = list({
    mouse: false,
    keys: true,
    top: '20%',
    parent: MainMenu,
    left: 'center',
    width: '80%',
    height: '20%',
    items: ['10x10', '12x12', '14x14', '16x16'],
    border: {
        type: 'line'
    },
    style: {
        selected: {
            fg: 'red',
            bg: 'white'
        },
        // @ts-ignore
        bg: '#000000',
        border: {
            bg: '#000000'
        }
    }
});

SelectBattlefieldList.on(
    'select',
    (a: Widgets.BoxElement) => {
        console.log('chosen: ', a.content);
        // TODO: store answer
    }
);

export default SelectBattlefieldList;
