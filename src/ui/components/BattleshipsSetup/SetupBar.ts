/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box, Widgets as IWidgets } from 'blessed';
import { BattleshipsSetup } from '../../scenes/BattleshipsSetup';

const SetupBar = (
    battleshipName: string,
    currentPart: number,
    battleshipLength: number
): IWidgets.BoxElement =>
    box({
        tags: true,
        content: `You're placing ${battleshipName}. Current part: ${currentPart} out of ${battleshipLength}`,
        parent: BattleshipsSetup,
        top: '5%',
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

export default SetupBar;
