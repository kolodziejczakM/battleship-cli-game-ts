/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import Screen from '../Screen';
import Window from '../Window';
import Scene from '../Scene';
import HeadingText from '../components/MainMenu/HeadingText';
import SelectBattlefieldList from '../components/MainMenu/SelectBattlefieldList';

export const MainMenu = box({
    parent: Window(),
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
    MainMenu.append(HeadingText);
    MainMenu.append(SelectBattlefieldList);
    SelectBattlefieldList.focus();
    Screen.screenBox.render();

    console.log('MainMenu onInit: ', Screen.date);
};

export default new Scene(
    MainMenu,
    // [Child, Components, will be, instantiated first on onInit, removed onRemove] render should be called after that.
    onInit
);
