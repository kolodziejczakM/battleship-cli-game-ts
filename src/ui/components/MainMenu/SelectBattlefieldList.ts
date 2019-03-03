/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { list, Widgets as IWidgets } from 'blessed';
import { MainMenu } from '../../scenes/MainMenu';
import Screen from '../../Screen';
import { setBattlefieldSize } from '../../actions/Creators';

const SelectBattlefieldList = list({
    mouse: false,
    keys: true,
    top: '20%',
    parent: MainMenu,
    left: 'center',
    width: '80%',
    height: '30%',
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
    (a: IWidgets.BoxElement) => {
        console.log('chosen battlefield size: ', a.content);
        Screen.store.dispatch(setBattlefieldSize(a.content));
        console.log('Screen.store.getState(): ', Screen.store.getState());
    }
);

export default SelectBattlefieldList;
