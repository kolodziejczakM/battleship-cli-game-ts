/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import SeaField from '../components/BattleshipsSetup/SeaField';
import LegendField from '../components/BattleshipsSetup/LegendField';
import LegendLabel from '../LegendLabel';
import Store from '../Store';
import Battlefield from '../Battlefield';

export const BattleshipsSetup = box({
    parent: screen.windowBox,
    top: `10%`,
    left: '0%',
    width: `99%`,
    style: {
        fg: '#ffffff',
        bg: 'green'
    }
});

const onInit = (): void => {
    const legendRowQuantity = 1;
    const battlefieldSize = Store.getState().battlefieldSize + legendRowQuantity;
    const totalWidth = 100;
    const seaFieldDimension: number = Math.round(totalWidth / battlefieldSize);

    const battlefield = new Battlefield(
        battlefieldSize,
        seaFieldDimension,
        new LegendLabel()
    );

    battlefield.build(
        LegendField,
        SeaField,
        BattleshipsSetup
    );
};

// TODO: there are no childComponents in the components array here even this one have child components.
// This thing should be explained, maybe param should have been called differently.
export default new Scene(BattleshipsSetup, [], onInit, screen.windowBox);
