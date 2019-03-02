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

Screen.renderWindow();
MainMenu.start();

// TODO: reduxStore.subscribe(currentScene => Scenes[currentScene].start(currentScene));

Screen.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));

registerCommands();
program.version('1.0.0').parse(process.argv);
