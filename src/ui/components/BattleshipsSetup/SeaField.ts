/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';
import { BattleshipsSetup } from '../../scenes/BattleshipsSetup';

const SeaField = (width: string, top: string, left: string): IWidgets.BoxElement =>
    box({
        parent: BattleshipsSetup,
        top,
        left,
        width,
        height: width,
        border: {
            type: 'line'
        },
        style: {
            fg: '#fff',
            bg: '#000',
            border: {
                fg: '#fff'
            }
        }
    });

export default SeaField;
