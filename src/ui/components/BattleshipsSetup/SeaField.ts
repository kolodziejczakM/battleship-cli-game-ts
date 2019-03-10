/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';
import { BattleshipsSetup } from '../../scenes/BattleshipsSetup';

const SeaField = (dimension: string, top: string, left: string): IWidgets.BoxElement =>
    box({
        parent: BattleshipsSetup,
        top,
        left,
        width: dimension,
        height: dimension,
        border: {
            type: 'line'
        },
        style: {
            fg: '#fff',
            bg: '#0f0',
            border: {
                fg: '#fff'
            }
        }
    });

export default SeaField;
