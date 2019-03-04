/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import SeaField from '../components/BattleshipsSetup/SeaField';

export const BattleshipsSetup = box({
    parent: screen.windowBox,
    content: 'Welcome in battleships setup page',
    top: '10%',
    left: 'center',
    width: '99%',
    style: {
        fg: '#ffffff',
        bg: 'green'
    }
});

export default new Scene(
    BattleshipsSetup,
    [SeaField('10%', '10%', '10%')],
    () => {},
    screen.windowBox
);
