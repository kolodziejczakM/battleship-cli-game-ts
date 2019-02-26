"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const start_1 = __importDefault(require("./start"));
function default_1() {
    commander_1.default
        .command('start')
        .alias('st')
        .description('Start new game')
        .action(start_1.default);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map