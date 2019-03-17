/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';
import { BattleshipsSetup } from '../../scenes/BattleshipsSetup';

const SeaField = (dimension: string, top: string, left: string, label: string): IWidgets.BoxElement =>
    box({
        tags: true,
        content: `{center}index: ${label}{/center}`,
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
