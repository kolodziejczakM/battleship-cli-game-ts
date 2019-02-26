import program from 'commander';
import inquirer from 'inquirer';
import colors from 'colors';
import { CommandAction } from './index';
import print from '../helpers/print';

interface UserStartAnswer {
    battlefieldSize: string;
}

// Decorator for dispatching store action
const commandAction: CommandAction = async () => {
    const answer: UserStartAnswer = await inquirer.prompt({
        type: 'list',
        name: 'battlefieldSize',
        message: 'Please choose the size of battlefield:',
        choices: ['10x10', '12x12', '14x14', '16x16']
    });

    // TODO: save answer in store - it's app state.
    print('prompt', 'Your answer is: ', answer.battlefieldSize);
   // console.log(colors.green('Your answer is: '), answer.battlefieldSize);
};

export default commandAction;
