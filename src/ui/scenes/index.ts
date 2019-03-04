/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import BattlefieldSizeMenu from './BattlefieldSizeMenu';
import BattleshipsSetup from './BattleshipsSetup';

import { IScene } from '../Scene';

export type SceneName = 'BattlefieldSizeMenu' | 'BattleshipsSetup';
type Scenes = { [S in SceneName]: IScene };

const scenes: Scenes = {
    BattlefieldSizeMenu,
    BattleshipsSetup
};

export default scenes;

