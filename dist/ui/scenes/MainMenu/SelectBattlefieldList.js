"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed_1 = require("blessed");
const MainMenu_1 = require("./MainMenu");
const SelectBattlefieldList = blessed_1.list({
    mouse: false,
    keys: true,
    top: '20%',
    parent: MainMenu_1.MainMenu,
    left: 'center',
    width: '80%',
    height: '20%',
    items: ['10x10', '12x12', '14x14', '16x16'],
    border: {
        type: 'line'
    },
    style: {
        selected: {
            fg: 'red',
            bg: 'white'
        },
        bg: '#000000',
        border: {
            bg: '#000000'
        }
    }
});
SelectBattlefieldList.on('select', (a) => {
    console.log('chosen: ', a.content);
});
exports.default = SelectBattlefieldList;
//# sourceMappingURL=SelectBattlefieldList.js.map