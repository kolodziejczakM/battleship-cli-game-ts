"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const MainMenu_1 = require("./MainMenu");
const HeadingText = blessed_1.text({
    parent: MainMenu_1.MainMenu,
    top: '15%',
    left: 'center',
    width: '80%',
    content: 'Please choose the size of the battlefield:',
    style: {
        fg: '#ffffff',
        bg: '#000000'
    }
});
exports.default = HeadingText;
//# sourceMappingURL=HeadingText.js.map