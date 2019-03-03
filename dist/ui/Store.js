"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const Types_1 = require("./actions/Types");
const initialState = {
    battlefieldSize: '',
    currentScene: 'MainMenu',
    previousScene: 'MainMenu'
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types_1.SET_CURRENT_SCENE:
            return Object.assign({}, state, { currentScene: action.payload, previousScene: state.currentScene });
        case Types_1.SET_BATTLEFIELD_SIZE:
            return Object.assign({}, state, { battlefieldSize: action.payload });
        default:
            return state;
    }
};
exports.default = redux_1.createStore(rootReducer);
//# sourceMappingURL=Store.js.map