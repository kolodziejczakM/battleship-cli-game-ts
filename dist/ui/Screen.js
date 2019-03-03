"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = __importDefault(require("blessed"));
const Store_1 = __importDefault(require("./Store"));
const Window_1 = __importDefault(require("./Window"));
const screenBox = blessed_1.default.screen({
    title: 'Battleship by Marcin Kołodziejczak',
    smartCSR: true
});
const windowBox = Window_1.default.render();
class Screen {
    constructor(store, screenBox, windowBox) {
        this.store = store;
        this.screenBox = screenBox;
        this.windowBox = windowBox;
    }
    renderWindow() {
        this.screenBox.append(this.windowBox);
        this.screenBox.render();
    }
}
exports.default = new Screen(Store_1.default, screenBox, windowBox);
//# sourceMappingURL=Screen.js.map