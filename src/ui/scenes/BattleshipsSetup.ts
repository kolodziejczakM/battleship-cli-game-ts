/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { box } from 'blessed';
import screen from '../Screen';
import Scene from '../Scene';
import SeaField from '../components/BattleshipsSetup/SeaField';
import LegendField from '../components/BattleshipsSetup/LegendField';
import LegendLabel from '../LegendLabel';
import Store, { BattlefieldSize } from '../Store';

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

interface IFieldPosition {
    top: string;
    left: string;
}

const getSeaFieldUIPosition = (
    rowIndex: number,
    columnIndex: number,
    seaFieldDimension: number
): IFieldPosition => {
    const topPositionInitial = 0;

    const left = columnIndex ? seaFieldDimension * columnIndex : columnIndex;
    const top = rowIndex ? seaFieldDimension * rowIndex : topPositionInitial;

    return {
        top: `${top}%`,
        left: `${left}%`
    };
};

const getPreparedBattlefield = (
    battlefieldSize: BattlefieldSize,
    seaFieldDimension: number
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
                return getSeaFieldUIPosition(rowIndex, columnIndex, seaFieldDimension);
            });

            return [...area, rowMapped];
        },
        []
    );
};

const onInit = (): void => {
    const legendRowQuantity = 1;
    const battlefieldSize = Store.getState().battlefieldSize + legendRowQuantity;
    const totalWidth = 100;
    const seaFieldDimension: number = Math.round(totalWidth / battlefieldSize);

    const battlefieldData: IFieldPosition[][] = getPreparedBattlefield(
        battlefieldSize,
        seaFieldDimension
    );

    battlefieldData.forEach((battlefieldRow: IFieldPosition[], rowIndex: number) => {
        battlefieldRow.forEach((fieldPosition: IFieldPosition, columnIndex) => {
            const legendIndex = 0;
            const legendLabel = new LegendLabel();
            let battlefieldUnit;

            if (rowIndex === legendIndex) {
                battlefieldUnit = LegendField(
                    `${seaFieldDimension}%`,
                    fieldPosition.top,
                    fieldPosition.left,
                    legendLabel.getValue(columnIndex, 'column')
                );
            } else {
                if (columnIndex === legendIndex) {
                    battlefieldUnit = LegendField(
                        `${seaFieldDimension}%`,
                        fieldPosition.top,
                        fieldPosition.left,
                        legendLabel.getValue(rowIndex, 'row')
                    );
                } else {
                    battlefieldUnit = SeaField(
                        `${seaFieldDimension}%`,
                        fieldPosition.top,
                        fieldPosition.left,
                        columnIndex
                    );
                }
            }

            BattleshipsSetup.append(battlefieldUnit);
        });
    });
};

export default new Scene(BattleshipsSetup, [], onInit, screen.windowBox);
