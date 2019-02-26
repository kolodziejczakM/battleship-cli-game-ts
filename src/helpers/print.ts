import colors from 'colors';

enum printColors {
    selection = 'grey',
    prompt = 'blue',
    data = 'grey',
    help = 'cyan',
    warn = 'yellow',
    error = 'red'
}

type MessageType = 
    'selection' |
    'prompt' |
    'data' |
    'help' |
    'warn' | 
    'error';

/**
 * @param messageType describes what type of message (in what colour) you want to display
 * @param message the message that has to be logged in certain colour
 * @param args rest of console.log arguments
 */
const print = (messageType: MessageType, message: string, ...args: unknown[]): void => {
    console.log(colors[printColors[messageType]](message), ...args);
};

export default print;
