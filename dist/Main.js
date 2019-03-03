#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const commands_1 = __importDefault(require("./commands"));
const Screen_1 = __importDefault(require("./ui/Screen"));
const MainMenu_1 = __importDefault(require("./ui/scenes/MainMenu"));
Screen_1.default.store.subscribe(() => {
    console.log('Something has changed, getState(): ', Screen_1.default.store.getState());
});
Screen_1.default.renderWindow();
MainMenu_1.default.start();
Screen_1.default.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));
commands_1.default();
commander_1.default.version('1.0.0').parse(process.argv);
//# sourceMappingURL=Main.js.map