/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { SET_CURRENT_SCENE, SET_BATTLEFIELD_SIZE } from './Types';
import { SceneName } from '../scenes';

export interface IAction<T> {
    type: string;
    payload: T;
}

interface IActionCreator<U> {
    (payload: U): IAction<U>;
}

export const setCurrentScene: IActionCreator<SceneName> = (payload) => {
    return {
        type: SET_CURRENT_SCENE,
        payload
    };
};

export const setBattlefieldSize: IActionCreator<SceneName> = (payload) => {
    return {
        type: SET_BATTLEFIELD_SIZE,
        payload
    };
};
