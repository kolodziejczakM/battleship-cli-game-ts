"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Types_1 = require("./Types");
exports.setCurrentScene = (payload) => {
    return {
        type: Types_1.SET_CURRENT_SCENE,
        payload
    };
};
exports.setBattlefieldSize = (payload) => {
    return {
        type: Types_1.SET_BATTLEFIELD_SIZE,
        payload
    };
};
//# sourceMappingURL=Creators.js.map