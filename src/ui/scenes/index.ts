import MainMenu from './MainMenu';
import { IScene } from '../Scene';

export type SceneName = 'MainMenu';
type Scenes = { [S in SceneName]: IScene };

const scenes: Scenes = {
    MainMenu
};

export default scenes;

