"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const Window = () => blessed_1.box({
    left: 'center',
    width: '90%',
    content: '{center}{bold}Battleship!{/bold}{/center}',
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        fg: '#ffffff',
        bg: '#000000',
        border: {
            fg: '#f0f0f0',
            bg: '#000'
        }
    }
});
exports.default = Window;
//# sourceMappingURL=Window.js.map