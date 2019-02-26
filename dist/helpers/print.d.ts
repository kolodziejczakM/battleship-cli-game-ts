declare type MessageType = 'selection' | 'prompt' | 'data' | 'help' | 'warn' | 'error';
declare const print: (messageType: MessageType, message: string, ...args: unknown[]) => void;
export default print;
