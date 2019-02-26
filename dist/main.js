#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const Screen_1 = __importDefault(require("./ui/Screen"));
const commands_1 = __importDefault(require("./commands"));
const MainMenu_1 = __importDefault(require("./ui/scenes/MainMenu"));
Screen_1.default.renderWindow();
Screen_1.default.startScene(MainMenu_1.default);
Screen_1.default.screenBox.key(['escape', 'q', 'C-c'], () => process.exit(0));
console.log('Main file: ', Screen_1.default.date);
commands_1.default();
commander_1.default.version('1.0.0').parse(process.argv);
//# sourceMappingURL=main.js.map