"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const Screen_1 = __importDefault(require("../Screen"));
const Window_1 = __importDefault(require("../Window"));
const Scene_1 = __importDefault(require("../Scene"));
const HeadingText_1 = __importDefault(require("../components/MainMenu/HeadingText"));
const SelectBattlefieldList_1 = __importDefault(require("../components/MainMenu/SelectBattlefieldList"));
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
const onInit = () => {
    exports.MainMenu.append(HeadingText_1.default);
    exports.MainMenu.append(SelectBattlefieldList_1.default);
    SelectBattlefieldList_1.default.focus();
    Screen_1.default.screenBox.render();
    console.log('MainMenu onInit: ', Screen_1.default.date);
};
exports.default = new Scene_1.default(exports.MainMenu, onInit);
//# sourceMappingURL=MainMenu.js.map