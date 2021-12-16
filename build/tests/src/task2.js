"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const tasks_1 = require("@flx-learn-ts/tasks");
(0, mocha_1.describe)('task2', () => {
    it('minDivisor()', () => {
        chai_1.assert.strictEqual(2, (0, tasks_1.minDivisor)(2));
        chai_1.assert.strictEqual(3, (0, tasks_1.minDivisor)(75));
        chai_1.assert.strictEqual(5, (0, tasks_1.minDivisor)(75 / 3));
        chai_1.assert.strictEqual(97, (0, tasks_1.minDivisor)(97));
        chai_1.assert.strictEqual(7, (0, tasks_1.minDivisor)(49));
        chai_1.assert.strictEqual(17, (0, tasks_1.minDivisor)(8653));
        chai_1.assert.strictEqual(2124679, (0, tasks_1.minDivisor)(2124679));
        chai_1.assert.strictEqual(1073676287, (0, tasks_1.minDivisor)(1073676287));
        chai_1.assert.strictEqual(Number.MAX_VALUE, (0, tasks_1.minDivisor)(Number.MAX_VALUE));
    });
    it("fib()", () => {
        chai_1.assert.strictEqual(1, (0, tasks_1.fib)(1));
        chai_1.assert.strictEqual(1, (0, tasks_1.fib)(2));
        chai_1.assert.strictEqual(2, (0, tasks_1.fib)(3));
        chai_1.assert.strictEqual(5, (0, tasks_1.fib)(5));
        chai_1.assert.strictEqual(21, (0, tasks_1.fib)(8));
        chai_1.assert.strictEqual(102334155, (0, tasks_1.fib)(40));
        chai_1.assert.strictEqual(1134903170, (0, tasks_1.fib)(45));
        chai_1.assert.strictEqual(1836311903, (0, tasks_1.fib)(46));
    });
    it("whichRookThreatens()", () => {
        chai_1.assert.strictEqual(0, (0, tasks_1.whichRookThreatens)(1, 2, 3, 4, 5, 6));
        chai_1.assert.strictEqual(1, (0, tasks_1.whichRookThreatens)(5, 3, 7, 3, 4, 8));
        chai_1.assert.strictEqual(2, (0, tasks_1.whichRookThreatens)(6, 8, 8, 6, 6, 3));
        chai_1.assert.strictEqual(3, (0, tasks_1.whichRookThreatens)(3, 7, 8, 7, 3, 5));
    });
});
//# sourceMappingURL=task2.js.map