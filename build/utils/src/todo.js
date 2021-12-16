"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.NotImplementError = void 0;
class NotImplementError extends Error {
    constructor() {
        super("Not implement.");
        Object.setPrototypeOf(this.message, NotImplementError.prototype);
    }
}
exports.NotImplementError = NotImplementError;
exports.TODO = "Not implement.";
//# sourceMappingURL=todo.js.map