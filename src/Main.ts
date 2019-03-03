#!/usr/bin/env node

/**
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 *
 * @file Is an entry point of this CLI game
 */

import program from 'commander';
import registerCommands from './commands';
import screen from './ui/Screen';
import Store from './ui/Store';
import scenes, { SceneName } from './ui/scenes';

screen.renderWindow();
scenes['BattlefieldSizeMenu'].start();
screen.screenBox.render();

Store.subscribe(
    (): void => {
        const {
            currentScene,
            previousScene
        } = Store.getState();

        if (currentScene !== previousScene) {
            scenes[previousScene as SceneName].end();
            scenes[currentScene as SceneName].start();
            screen.screenBox.render();
            console.log('Scene has been changed! Current state: ', Store.getState());
        }
    }
);

screen.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));

registerCommands();
program.version('1.0.0').parse(process.argv);
