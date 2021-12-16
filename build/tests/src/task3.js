"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const tasks_1 = require("@flx-learn-ts/tasks");
(0, mocha_1.describe)('task3', () => {
    (0, mocha_1.it)('mean()', () => {
        chai_1.assert.strictEqual(0.0, (0, tasks_1.mean)([]));
        chai_1.assert.strictEqual(1.0, (0, tasks_1.mean)([1.0]));
        chai_1.assert.strictEqual(2.0, (0, tasks_1.mean)([3.0, 1.0, 2.0]));
        chai_1.assert.strictEqual(3.0, (0, tasks_1.mean)([0.0, 2.0, 7.0, 8.0, -2.0]));
    });
    (0, mocha_1.it)("extractRepeats()", () => {
        chai_1.assert.strictEqual(new Map(), (0, tasks_1.extractRepeats)([]));
        chai_1.assert.strictEqual(new Map([["a", 2]]), (0, tasks_1.extractRepeats)(["a", "b", "a"]));
        chai_1.assert.strictEqual(new Map(), (0, tasks_1.extractRepeats)(["a", "b", "c"]));
    });
    (0, mocha_1.it)("findSumOfTwo()", () => {
        chai_1.assert.strictEqual([1, 2], (0, tasks_1.findSumOfTwo)([1, 0, 0, 0], 0));
        chai_1.assert.strictEqual([-1, -1], (0, tasks_1.findSumOfTwo)([], 1));
        chai_1.assert.strictEqual([0, 2], (0, tasks_1.findSumOfTwo)([1, 2, 3], 4));
        chai_1.assert.strictEqual([0, 2], (0, tasks_1.findSumOfTwo)([3, 2, 1], 4));
    });
});
//# sourceMappingURL=task3.js.map