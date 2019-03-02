"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const Screen_1 = __importDefault(require("../Screen"));
const Scene_1 = __importDefault(require("../Scene"));
const HeadingText_1 = __importDefault(require("../components/MainMenu/HeadingText"));
const SelectBattlefieldList_1 = __importDefault(require("../components/MainMenu/SelectBattlefieldList"));
exports.MainMenu = blessed_1.box({
    parent: Screen_1.default.windowBox,
    top: '10%',
    left: 'center',
    width: '99%',
    style: {
        fg: '#ffffff',
        bg: 'blue'
    }
});
const onInit = () => {
    SelectBattlefieldList_1.default.focus();
    Screen_1.default.screenBox.render();
};
exports.default = new Scene_1.default(exports.MainMenu, [HeadingText_1.default, SelectBattlefieldList_1.default], onInit, Screen_1.default.windowBox);
//# sourceMappingURL=MainMenu.js.map