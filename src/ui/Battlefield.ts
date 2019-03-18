import { Widgets as IWidgets } from 'blessed';
import { ILegendLabel } from './LegendLabel';

interface ISquarePosition {
    top: string;
    left: string;
}

export type BattlefieldSize = 6 | 8 | 10;

interface IBattlefieldSizes {
    [key: string]: BattlefieldSize;
    small: 6;
    medium: 8;
    large: 10;
}

interface BattlefieldComponent {
    (
        squareDimension: string,
        topPosition: string,
        leftPosition: string,
        label: string
    ): IWidgets.BoxElement;
}

interface IBattlefield {
    /**
     * It renders whole battlefield in parentComponent
     * using legendSquareComponent and seaSquareComponent
     *
     * @param {BattlefieldComponent} legendSquareComponent
     * @param {BattlefieldComponent} seaSquareComponent
     * @param {IWidgets.BoxElement} parentComponent
     * @memberof IBattlefield
     */
    render(
        legendSquareComponent: BattlefieldComponent,
        seaSquareComponent: BattlefieldComponent,
        parentComponent: IWidgets.BoxElement
    ): void;
}

export default class Battlefield implements IBattlefield {
    private static readonly legendIndex = 0;
    public static readonly sizes: IBattlefieldSizes = {
        small: 6,
        medium: 8,
        large: 10
    };

    constructor(
        private battlefieldSize: BattlefieldSize,
        private squareDimension: number,
        private legendLabel: ILegendLabel
    ) {}

    public render(
        legendSquareComponent: BattlefieldComponent,
        seaSquareComponent: BattlefieldComponent,
        parentComponent: IWidgets.BoxElement
    ): void {
        this.getSquaresPositions().forEach(
            (battlefieldRow: ISquarePosition[], rowIndex: number) => {
                battlefieldRow.forEach((fieldPosition: ISquarePosition, columnIndex) => {
                    let battlefieldSquare;
                    const { top, left } = fieldPosition;
                    const dimension = `${this.squareDimension}%`;
                    const commonProps = [dimension, top, left];

                    if (rowIndex === Battlefield.legendIndex) {
                        battlefieldSquare = (legendSquareComponent as Function)(
                            ...commonProps,
                            this.legendLabel.getValue(columnIndex, 'column')
                        );
                    } else {
                        if (columnIndex === Battlefield.legendIndex) {
                            battlefieldSquare = (legendSquareComponent as Function)(
                                ...commonProps,
                                this.legendLabel.getValue(rowIndex, 'row')
                            );
                        } else {
                            battlefieldSquare = (seaSquareComponent as Function)(
                                ...commonProps,
                                String(columnIndex)
                            );
                        }
                    }

                    parentComponent.append(battlefieldSquare);
                });
            }
        );
    }

    /**
     * Returns position of each square (battlefield building block) in battlefield
     *
     * @private
     * @returns {ISquarePosition[][]}
     * @memberof Battlefield
     */
    private getSquaresPositions(): ISquarePosition[][] {
        const row: void[] = [...Array(this.battlefieldSize)];

        const area: void[][] = row.reduce(
            (outcome: void[][], rowElement: void, index: number): void[][] => {
                outcome[index] = row;
                return outcome;
            },
            []
        );

        return area.reduce(
            (
                area: ISquarePosition[][],
                areaRow: void[],
                rowIndex: number
            ): ISquarePosition[][] => {
                const rowMapped = areaRow.map((field: void, columnIndex: number) => {
                    return this.getSquarePosition(rowIndex, columnIndex);
                });

                return [...area, rowMapped];
            },
            []
        );
    }

    /**
     * Returns calculated (absolute) position of one, particular square (battlefield building block)
     *  described by given arguments
     *
     * @private
     * @param {number} rowIndex
     * @param {number} columnIndex
     * @returns {ISquarePosition}
     * @memberof Battlefield
     */
    private getSquarePosition(rowIndex: number, columnIndex: number): ISquarePosition {
        const left = columnIndex ? this.squareDimension * columnIndex : columnIndex;
        const top = rowIndex ? this.squareDimension * rowIndex : rowIndex;

        return {
            top: `${top}%`,
            left: `${left}%`
        };
    }
}
