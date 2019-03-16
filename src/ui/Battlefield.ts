interface ISquarePosition {
    top: string;
    left: string;
}

export type BattlefieldSize = 10 | 12 | 14 | 16;

interface IBattlefieldSizes {
    [key: string]: BattlefieldSize;
    tiny: 10;
    small: 12;
    medium: 14;
    large: 16;
}

// TODO: continue work here & think about DI mechanism
// interface IBattlefield {
//     /**
//      * It returns (absolute) position of every square which is building block of Battlefield
//      *
//      * @param {number} squareDimension
//      * @returns {ISquarePosition[][]}
//      * @memberof IBattlefield
//      */
//     getSquaresPositions(squareDimension: number): ISquarePosition[][];
// }

export default class Battlefield {
    public static readonly sizes: IBattlefieldSizes = {
        tiny: 10,
        small: 12,
        medium: 14,
        large: 16
    };

    constructor(
        private battlefieldSize: BattlefieldSize,
        private squareDimension: number,
        private legendLabel: ILegendLabel
    ) {}

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

    public build(legendSquareComponent, seaSquareComponent, parentComponent) {
        this.getSquaresPositions().forEach(
            (battlefieldRow: ISquarePosition[], rowIndex: number) => {
                battlefieldRow.forEach((fieldPosition: ISquarePosition, columnIndex) => {
                    const legendIndex = 0;
                    // const legendLabel = new LegendLabel();
                    let battlefieldUnit;

                    if (rowIndex === legendIndex) {
                        battlefieldUnit = LegendField(
                            `${this.squareDimension}%`,
                            fieldPosition.top,
                            fieldPosition.left,
                            this.legendLabel.getValue(columnIndex, 'column')
                        );
                    } else {
                        if (columnIndex === legendIndex) {
                            battlefieldUnit = LegendField(
                                `${this.squareDimension}%`,
                                fieldPosition.top,
                                fieldPosition.left,
                                this.legendLabel.getValue(rowIndex, 'row')
                            );
                        } else {
                            battlefieldUnit = SeaField(
                                `${this.squareDimension}%`,
                                fieldPosition.top,
                                fieldPosition.left,
                                columnIndex
                            );
                        }
                    }

                    BattleshipsSetup.append(battlefieldUnit);
                });
            }
        );
    }
}
