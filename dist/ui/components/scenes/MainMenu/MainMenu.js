"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const Window_1 = __importDefault(require("../../Window"));
const HeadingText_1 = __importDefault(require("./HeadingText"));
const SelectBattlefieldList_1 = __importDefault(require("./SelectBattlefieldList"));
const screen_1 = __importDefault(require("../../../screen"));
exports.MainMenu = blessed_1.box({
    parent: Window_1.default(),
    top: '10%',
    left: 'center',
    width: '99%',
    style: {
        fg: '#ffffff',
        bg: 'blue'
    }
});
exports.default = {
    node: exports.MainMenu,
    onInit: () => {
        exports.MainMenu.append(HeadingText_1.default);
        exports.MainMenu.append(SelectBattlefieldList_1.default);
        SelectBattlefieldList_1.default.focus();
        screen_1.default.screenBox.render();
    }
};
//# sourceMappingURL=MainMenu.js.map