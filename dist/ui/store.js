"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const initialState = {
    currentScene: 'MainMenu'
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
exports.default = redux_1.createStore(rootReducer);
//# sourceMappingURL=store.js.map