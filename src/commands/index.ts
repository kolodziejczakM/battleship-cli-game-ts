import program from 'commander'
import start from './start';

export interface CommandAction {
    (): void;
}

export default function () {
    program
        .command('start')
        .alias('st')
        .description('Start new game')
        .action(start);
}
