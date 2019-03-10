/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { list, Widgets as IWidgets } from 'blessed';
import { BattlefieldSizeMenu } from '../../scenes/BattlefieldSizeMenu';
import Store, { battlefieldSizes, BattlefieldSize } from '../../Store';
import { setBattlefieldSize, setCurrentScene } from '../../actions/Creators';

const dimensionSeparator = 'x';

const getBattlefieldSizeLabels = (): string[] => {
    return Object.keys(battlefieldSizes).map(
        (sizeName: string): string => {
            const dimension = battlefieldSizes[sizeName];

            return `${dimension}${dimensionSeparator}${dimension}`;
        }
    );
};

const SelectBattlefieldList = list({
    mouse: false,
    keys: true,
    top: '20%',
    parent: BattlefieldSizeMenu,
    left: 'center',
    width: '80%',
    height: '30%',
    items: getBattlefieldSizeLabels(),
    border: {
        type: 'line'
    },
    style: {
        selected: {
            fg: 'red',
            bg: 'white'
        },
        // @ts-ignore
        bg: '#000000',
        border: {
            bg: '#000000'
        }
    }
});

SelectBattlefieldList.on(
    'select',
    (a: IWidgets.BoxElement): void => {
        const [userChoice]: string[] = a.content.split(dimensionSeparator);

        Store.dispatch(setBattlefieldSize(Number(userChoice) as BattlefieldSize));
        Store.dispatch(setCurrentScene('BattleshipsSetup'));
    }
);

export default SelectBattlefieldList;
