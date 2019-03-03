#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const commands_1 = __importDefault(require("./commands"));
const Screen_1 = __importDefault(require("./ui/Screen"));
const Store_1 = __importDefault(require("./ui/Store"));
const scenes_1 = __importDefault(require("./ui/scenes"));
Screen_1.default.renderWindow();
scenes_1.default['MainMenu'].start();
Store_1.default.subscribe(() => {
    const { currentScene, previousScene } = Store_1.default.getState();
    if (currentScene !== previousScene) {
        scenes_1.default[previousScene].end();
        scenes_1.default[currentScene].start();
    }
    console.log('Main.ts subscription: ', Store_1.default.getState());
});
Screen_1.default.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));
commands_1.default();
commander_1.default.version('1.0.0').parse(process.argv);
//# sourceMappingURL=Main.js.map