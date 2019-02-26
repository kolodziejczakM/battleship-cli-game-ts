#!/usr/bin/env node

/**
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 *
 * @file Is an entry point of this CLI game
 */

import program from 'commander';
import Screen from './ui/Screen';
import registerCommands from './commands';
import MainMenu from './ui/scenes/MainMenu';

Screen.renderWindow();
// TODO: reduxStore.subscribe(currentScene => Scene.start(currentScene));
Screen.startScene(MainMenu);
Screen.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));
console.log('Main file: ', Screen.date);

registerCommands();
program.version('1.0.0').parse(process.argv);
