"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
var printColors;
(function (printColors) {
    printColors["selection"] = "grey";
    printColors["prompt"] = "blue";
    printColors["data"] = "grey";
    printColors["help"] = "cyan";
    printColors["warn"] = "yellow";
    printColors["error"] = "red";
})(printColors || (printColors = {}));
const print = (messageType, message, ...args) => {
    console.log(colors_1.default[printColors[messageType]](message), ...args);
};
exports.default = print;
//# sourceMappingURL=print.js.map