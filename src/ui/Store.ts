/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { createStore, Reducer as IReducer } from 'redux';
import { IAction } from './actions/Creators';
import { SceneName } from './scenes';
import { SET_CURRENT_SCENE, SET_BATTLEFIELD_SIZE } from './actions/Types';
import Battlefield, { BattlefieldSize } from './Battlefield';

type Ship = 'battleship' | 'destroyer';

interface IShipState {
    setupDone: boolean;
    partsOnBattlefield: number;
}

interface IShipsContainer {
    length: number;
    ships: IShipState[];
}

export interface IState {
    battlefieldSize: BattlefieldSize;
    currentScene: SceneName;
    previousScene: SceneName;
    currentShipToSetup: Ship;
    battleships: IShipsContainer;
    destroyers: IShipsContainer;
}

const initialShipState: IShipState = {
    setupDone: false,
    partsOnBattlefield: 0
};

const initialState: IState = {
    battlefieldSize: Battlefield.sizes.tiny,
    currentScene: 'BattlefieldSizeMenu',
    previousScene: 'BattlefieldSizeMenu',
    currentShipToSetup: 'battleship',
    battleships: {
        length: 5,
        ships: [initialShipState]
    },
    destroyers: {
        length: 4,
        ships: [initialShipState, initialShipState]
    }
};

const rootReducer: IReducer = (
    state: IState = initialState,
    action: IAction<any>
): IState => {
    switch (action.type) {
        case SET_CURRENT_SCENE:
            return {
                ...state,
                currentScene: action.payload,
                previousScene: state.currentScene
            };
        case SET_BATTLEFIELD_SIZE:
            return {
                ...state,
                battlefieldSize: action.payload
            };
        default:
            return state;
    }
};

export default createStore(rootReducer);
