#!/usr/bin/env node

/**
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 *
 * @file Is an entry point of this CLI game
 */

import program from 'commander';
import registerCommands from './commands';
import Screen from './ui/Screen';
import Store from './ui/Store';
import Scenes, { SceneName } from './ui/scenes';

Screen.renderWindow();
Scenes['MainMenu'].start();

Store.subscribe(
    (): void => {
        const {
            currentScene,
            previousScene
        } = Store.getState();

        if (currentScene !== previousScene) {
            Scenes[previousScene as SceneName].end();
            Scenes[currentScene as SceneName].start();
        }

        console.log('Main.ts subscription: ', Store.getState());
    }
);

Screen.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));

registerCommands();
program.version('1.0.0').parse(process.argv);
