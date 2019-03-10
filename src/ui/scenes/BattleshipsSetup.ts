/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import SeaField from '../components/BattleshipsSetup/SeaField';
import Store, { BattlefieldSize } from '../Store';

const battleshipSetupWidth = 99;
const battleshipSetupTop = 10;

export const BattleshipsSetup = box({
    parent: screen.windowBox,
    top: `${battleshipSetupTop}%`,
    left: '0%',
    width: `${battleshipSetupWidth}%`,
    style: {
        fg: '#ffffff',
        bg: 'green'
    }
});

interface IFieldPosition {
    top: string;
    left: string;
}

const getSeaFieldUIPosition = (
    rowIndex: number,
    columnIndex: number,
    seaFieldDimension: number,
    setupTop: number
): IFieldPosition => {
    const left = columnIndex ? seaFieldDimension * columnIndex : columnIndex;
    const top = rowIndex ? seaFieldDimension * columnIndex : setupTop;

    return {
        top: `${top}%`,
        left: `${left}%`
    };
};

const getPreparedBattlefield = (
    battlefieldSize: BattlefieldSize,
    seaFieldDimension: number,
    setupTop: number
): IFieldPosition[][] => {
    const row: void[] = [...Array(battlefieldSize)];

    const area: void[][] = row.reduce(
        (outcome: void[][], rowElement: void, index: number): void[][] => {
            outcome[index] = row;
            return outcome;
        },
        []
    );

    return area.reduce(
        (
            area: IFieldPosition[][],
            areaRow: void[],
            rowIndex: number
        ): IFieldPosition[][] => {
            const rowMapped = areaRow.map((field: void, columnIndex: number) => {
                return getSeaFieldUIPosition(
                    rowIndex,
                    columnIndex,
                    seaFieldDimension,
                    setupTop
                );
            });

            return [...area, rowMapped];
        },
        []
    );
};

const onInit = (): void => {
    const seaFieldDimension: number =
        battleshipSetupWidth / Store.getState().battlefieldSize;

    const battlefield = getPreparedBattlefield(
        Store.getState().battlefieldSize,
        seaFieldDimension,
        battleshipSetupTop
    );

    // TODO: continue here console.log('battlefield: ', battlefield);

    battlefield.forEach((battlefieldRow: IFieldPosition[]) => {
        battlefieldRow.forEach((fieldPosition: IFieldPosition) => {
            BattleshipsSetup.append(
                SeaField(`${seaFieldDimension}%`, fieldPosition.top, fieldPosition.left)
            );
        });
    });
};

export default new Scene(BattleshipsSetup, [], onInit, screen.windowBox);
