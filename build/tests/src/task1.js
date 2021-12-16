"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const utils_1 = require("@flx-learn-ts/utils");
const tasks_1 = require("@flx-learn-ts/tasks");
(0, mocha_1.describe)('task1', () => {
    (0, mocha_1.it)('trackLength()', () => {
        chai_1.assert.strictEqual(5.00, (0, tasks_1.trackLength)(3.0, 0.0, 0.0, 4.0));
        chai_1.assert.strictEqual(1.00, (0, tasks_1.trackLength)(0.0, 1.0, -1.0, 1.0));
        chai_1.assert.strictEqual(1.41, (0, utils_1.roundFixed)((0, tasks_1.trackLength)(1.0, 1.0, 2.0, 2.0), 2));
    });
    (0, mocha_1.it)("getThirdDigit()", () => {
        chai_1.assert.strictEqual(8, (0, tasks_1.getThirdDigit)(3801));
        chai_1.assert.strictEqual(1, (0, tasks_1.getThirdDigit)(100));
        chai_1.assert.strictEqual(0, (0, tasks_1.getThirdDigit)(1000));
    });
    (0, mocha_1.it)("amountAfterThreeYears()", () => {
        chai_1.assert.strictEqual(133.1, (0, utils_1.roundFixed)((0, tasks_1.amountAfterThreeYears)(100, 10), 1));
        chai_1.assert.strictEqual(1.0, (0, tasks_1.amountAfterThreeYears)(1, 0));
        chai_1.assert.strictEqual(104.0, (0, tasks_1.amountAfterThreeYears)(13, 100));
    });
});
//# sourceMappingURL=task1.js.map