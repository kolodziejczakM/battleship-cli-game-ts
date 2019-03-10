/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { createStore, Reducer as IReducer } from 'redux';
import { IAction } from './actions/Creators';
import { SceneName } from './scenes';
import { SET_CURRENT_SCENE, SET_BATTLEFIELD_SIZE } from './actions/Types';

export type BattlefieldSize = 10 | 12 | 14 | 16;
interface IBattlefieldSizes {
    [key: string]: BattlefieldSize
    tiny: 10,
    small: 12,
    medium: 14,
    large: 16
}

export const battlefieldSizes: IBattlefieldSizes = {
    tiny: 10,
    small: 12,
    medium: 14,
    large: 16
};

export interface IState {
    battlefieldSize: BattlefieldSize;
    currentScene: SceneName;
    previousScene: SceneName;
}

const initialState: IState = {
    battlefieldSize: battlefieldSizes.tiny,
    currentScene: 'BattlefieldSizeMenu',
    previousScene: 'BattlefieldSizeMenu'
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
