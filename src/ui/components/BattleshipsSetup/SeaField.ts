/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';
import { BattleshipsSetup } from '../../scenes/BattleshipsSetup';

const SeaField = (dimension: string, top: string, left: string, index: number): IWidgets.BoxElement =>
    box({
        content: `index: ${index}`,
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
            bg: 'orange',
            border: {
                fg: '#f33',
                bg: '#000'
            }
        }
    });

export default SeaField;
