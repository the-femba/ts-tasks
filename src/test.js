"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const task1_1 = require("./task1");
const task2_1 = require("./task2");
(0, mocha_1.describe)("#task1", () => {
    (0, mocha_1.describe)("#trackLengthTests()", () => {
        assert_1.default.strictEqual(5.0, (0, task1_1.trackLength)(3.0, 0.0, 0.0, 4.0));
        assert_1.default.strictEqual(1.0, (0, task1_1.trackLength)(0.0, 1.0, -1.0, 1.0));
        assert_1.default.strictEqual(1.41, (0, task1_1.trackLength)(1.0, 1.0, 2.0, 2.0));
    });
    (0, mocha_1.describe)("#getThirdDigit()", () => {
        assert_1.default.strictEqual(8, (0, task1_1.getThirdDigit)(3801));
        assert_1.default.strictEqual(1, (0, task1_1.getThirdDigit)(100));
        assert_1.default.strictEqual(0, (0, task1_1.getThirdDigit)(1000));
    });
    (0, mocha_1.describe)("#amountAfterThreeYears()", () => {
        assert_1.default.strictEqual(133.1, (0, task1_1.amountAfterThreeYears)(100, 10));
        assert_1.default.strictEqual(1.0, (0, task1_1.amountAfterThreeYears)(1, 0));
        assert_1.default.strictEqual(104.0, (0, task1_1.amountAfterThreeYears)(13, 100));
    });
});
(0, mocha_1.describe)("#task2", () => {
    (0, mocha_1.describe)("#minDivisor()", () => {
        assert_1.default.strictEqual(2, (0, task2_1.minDivisor)(2));
        assert_1.default.strictEqual(3, (0, task2_1.minDivisor)(75));
        assert_1.default.strictEqual(5, (0, task2_1.minDivisor)(75 / 3));
        assert_1.default.strictEqual(97, (0, task2_1.minDivisor)(97));
        assert_1.default.strictEqual(7, (0, task2_1.minDivisor)(49));
        assert_1.default.strictEqual(17, (0, task2_1.minDivisor)(8653));
        assert_1.default.strictEqual(2124679, (0, task2_1.minDivisor)(2124679));
        assert_1.default.strictEqual(1073676287, (0, task2_1.minDivisor)(1073676287));
        assert_1.default.strictEqual(Number.MAX_VALUE, (0, task2_1.minDivisor)(Number.MAX_VALUE));
    });
});
//# sourceMappingURL=test.js.map