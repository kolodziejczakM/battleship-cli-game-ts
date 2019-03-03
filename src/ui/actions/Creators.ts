/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { SET_CURRENT_SCENE, SET_BATTLEFIELD_SIZE } from './Types';

export interface IAction<T> {
    type: string;
    payload: T;
}

interface IActionCreator<U> {
    (payload: U): IAction<U>;
}

export const setCurrentScene: IActionCreator<string> = (payload) => {
    return {
        type: SET_CURRENT_SCENE,
        payload
    };
};

export const setBattlefieldSize: IActionCreator<string> = (payload) => {
    return {
        type: SET_BATTLEFIELD_SIZE,
        payload
    };
};
