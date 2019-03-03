/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import HeadingText from '../components/BattlefieldSizeMenu/HeadingText';
import SelectBattlefieldList from '../components/BattlefieldSizeMenu/SelectBattlefieldList';

export const BattlefieldSizeMenu = box({
    parent: screen.windowBox,
    top: '10%',
    left: 'center',
    width: '99%',
    style: {
        fg: '#ffffff',
        bg: 'blue'
    }
});

const onInit = (): void => {
    SelectBattlefieldList.focus();
    screen.screenBox.render();
};

export default new Scene(
    BattlefieldSizeMenu,
    [HeadingText, SelectBattlefieldList],
    onInit,
    screen.windowBox
);
