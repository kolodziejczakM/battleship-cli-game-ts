/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { list, Widgets as IWidgets } from 'blessed';
import { BattlefieldSizeMenu } from '../../scenes/BattlefieldSizeMenu';
import Store, { battlefieldSizes } from '../../Store';
import { setBattlefieldSize, setCurrentScene } from '../../actions/Creators';
import { SceneName } from '../../scenes';

const getBattlefieldSizeLabels = (): string[] => {
    return Object.keys(battlefieldSizes).map(
        (sizeName: string): string => {
            const dimension = battlefieldSizes[sizeName];

            return `${dimension}x${dimension}`;
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
        Store.dispatch(setBattlefieldSize(a.content as SceneName));
        Store.dispatch(setCurrentScene('BattleshipsSetup'));
    }
);

export default SelectBattlefieldList;
