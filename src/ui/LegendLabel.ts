type Variant = 'row' | 'column';

interface ILegendLabel {
    /**
     * It returns label for given index and variant (row | column)
     *
     * @returns {string}
     * @memberof ILegendLabel
     */
    getValue(index: number, variant: Variant): string;
}

export default class LegendLabel implements ILegendLabel {
    private readonly defaultValue = '';
    private readonly indexShift = 1;
    private readonly column = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P'
    ];

    private readonly row = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16'
    ];

    public getValue(index: number, variant: Variant): string {
        if (index) {
            return this[variant][index - this.indexShift];
        }

        return this.defaultValue;
    }
}
