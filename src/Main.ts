#!/usr/bin/env node

/**
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 *
 * @file Is an entry point of this CLI game
 */

import program from 'commander';
import registerCommands from './commands';
import Screen from './ui/Screen';

// TODO: import Scenes from './ui/Scenes';
import MainMenu from './ui/scenes/MainMenu';

Screen.store.subscribe(() => {
    console.log('Something has changed, getState(): ', Screen.store.getState());
});

Screen.renderWindow();
MainMenu.start();

Screen.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));

registerCommands();
program.version('1.0.0').parse(process.argv);
