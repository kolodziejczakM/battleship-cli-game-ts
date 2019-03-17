/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { list, Widgets as IWidgets } from 'blessed';
import { BattlefieldSizeMenu } from '../../scenes/BattlefieldSizeMenu';
import Store from '../../Store';
import Battlefield, { BattlefieldSize } from '../../Battlefield';
import { setBattlefieldSize, setCurrentScene } from '../../actions/Creators';

const dimensionSeparator = 'x';

const getBattlefieldSizeLabels = (): string[] =>
    Object.entries(Battlefield.sizes).map(
        ([_, value]: [string, BattlefieldSize]): string =>
            `${value}${dimensionSeparator}${value}`
    );

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
