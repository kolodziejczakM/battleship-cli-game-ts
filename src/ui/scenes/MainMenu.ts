/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import HeadingText from '../components/MainMenu/HeadingText';
import SelectBattlefieldList from '../components/MainMenu/SelectBattlefieldList';

export const MainMenu = box({
    parent: screen.windowBox,
    top: '10%',
    left: 'center',
    width: '99%',
    style: {
        fg: '#ffffff',
        bg: 'blue'
    }
});

// TODO: Think about it, that should be a part of app state (which scene is rendered??)
const onInit = (): void => {
    SelectBattlefieldList.focus();
    screen.screenBox.render();
};

export default new Scene(
    MainMenu,
    [HeadingText, SelectBattlefieldList],
    onInit,
    screen.windowBox
);
