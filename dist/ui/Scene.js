"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scene {
    constructor(node, childComponents, onInitCallback, windowBox) {
        this.node = node;
        this.childComponents = childComponents;
        this.onInitCallback = onInitCallback;
        this.windowBox = windowBox;
    }
    onInit() {
        this.childComponents.forEach((childComponent) => {
            this.node.append(childComponent);
        });
        this.onInitCallback();
    }
    start() {
        this.windowBox.append(this.node);
        this.onInit();
    }
    end() {
        this.windowBox.remove(this.node);
    }
}
exports.default = Scene;
//# sourceMappingURL=Scene.js.map