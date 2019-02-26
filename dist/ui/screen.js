"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = __importDefault(require("blessed"));
const Window_1 = __importDefault(require("./Window"));
const screenBox = blessed_1.default.screen({
    title: 'Battleship by Marcin Kołodziejczak',
    smartCSR: true
});
exports.rerenderAfter = (targetFn) => ((...args) => {
    targetFn(...args);
    screenBox.render();
});
class Screen {
    constructor(screenBox, window) {
        this.screenBox = screenBox;
        this.date = Date.now();
        this.windowBox = window();
    }
    startScene(scene) {
        this.windowBox.append(scene.node);
        scene.onInit();
    }
    removeScene(scene) {
        this.windowBox.remove(scene.node);
    }
    renderWindow() {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}
exports.default = new Screen(screenBox, Window_1.default);
//# sourceMappingURL=screen.js.map