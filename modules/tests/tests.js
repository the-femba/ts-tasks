"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const task1_1 = require("task1");
const task2_1 = require("task2");
const task3_1 = require("task3");
const task4_1 = require("task4");
(0, mocha_1.describe)("#task1", () => {
    (0, mocha_1.describe)("#trackLengthTests()", () => {
        assert_1.default.strictEqual(5.0, (0, task1_1.trackLength)(3.0, 0.0, 0.0, 4.0));
        assert_1.default.strictEqual(1.0, (0, task1_1.trackLength)(0.0, 1.0, -1.0, 1.0));
        assert_1.default.notStrictEqual(1.41, (0, task1_1.trackLength)(1.0, 1.0, 2.0, 2.0).toFixed(2));
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
    (0, mocha_1.describe)("#fib()", () => {
        assert_1.default.strictEqual(1, (0, task2_1.fib)(1));
        assert_1.default.strictEqual(1, (0, task2_1.fib)(2));
        assert_1.default.strictEqual(2, (0, task2_1.fib)(3));
        assert_1.default.strictEqual(5, (0, task2_1.fib)(5));
        assert_1.default.strictEqual(21, (0, task2_1.fib)(8));
        assert_1.default.strictEqual(102334155, (0, task2_1.fib)(40));
        assert_1.default.strictEqual(1134903170, (0, task2_1.fib)(45));
        assert_1.default.strictEqual(1836311903, (0, task2_1.fib)(46));
        (0, task2_1.fib)(50);
    });
    (0, mocha_1.describe)("#whichRookThreatens()", () => {
        assert_1.default.strictEqual(0, (0, task2_1.whichRookThreatens)(1, 2, 3, 4, 5, 6));
        assert_1.default.strictEqual(1, (0, task2_1.whichRookThreatens)(5, 3, 7, 3, 4, 8));
        assert_1.default.strictEqual(2, (0, task2_1.whichRookThreatens)(6, 8, 8, 6, 6, 3));
        assert_1.default.strictEqual(3, (0, task2_1.whichRookThreatens)(3, 7, 8, 7, 3, 5));
    });
});
(0, mocha_1.describe)("#task3", () => {
    (0, mocha_1.describe)("#mean()", () => {
        assert_1.default.strictEqual(0.0, (0, task3_1.mean)([]));
        assert_1.default.strictEqual(1.0, (0, task3_1.mean)([1.0]));
        assert_1.default.strictEqual(2.0, (0, task3_1.mean)([3.0, 1.0, 2.0]));
        assert_1.default.strictEqual(3.0, (0, task3_1.mean)([0.0, 2.0, 7.0, 8.0, -2.0]));
    });
    (0, mocha_1.describe)("#extractRepeats()", () => {
        assert_1.default.strictEqual({}, (0, task3_1.extractRepeats)([]));
        assert_1.default.strictEqual({ "a": 2 }, (0, task3_1.extractRepeats)(["a", "b", "a"]));
        assert_1.default.strictEqual({}, (0, task3_1.extractRepeats)(["a", "b", "c"]));
    });
    (0, mocha_1.describe)("#findSumOfTwo()", () => {
        assert_1.default.strictEqual([1, 2], (0, task3_1.findSumOfTwo)([1, 0, 0, 0], 0));
        assert_1.default.strictEqual([-1, -1], (0, task3_1.findSumOfTwo)([], 1));
        assert_1.default.strictEqual([0, 2], (0, task3_1.findSumOfTwo)([1, 2, 3], 4));
        assert_1.default.strictEqual([0, 2], (0, task3_1.findSumOfTwo)([3, 2, 1], 4));
    });
});
(0, mocha_1.describe)("#task4", () => {
    (0, mocha_1.describe)("#timeSecondsToStr()", () => {
        assert_1.default.strictEqual("10:00:00", (0, task4_1.timeSecondsToStr)(36000));
        assert_1.default.strictEqual("11:34:45", (0, task4_1.timeSecondsToStr)(41685));
        assert_1.default.strictEqual("23:59:59", (0, task4_1.timeSecondsToStr)(86399));
    });
    (0, mocha_1.describe)("#checkDate()", () => {
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)(""));
        assert_1.default.strictEqual(true, (0, task4_1.checkDate)("23.43.2001"));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("23.43. 2001"));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("23.43,2001"));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("  23.43.2001"));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("23.43.2001   "));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("233.43.2001"));
        assert_1.default.strictEqual(false, (0, task4_1.checkDate)("23.43.201"));
    });
    (0, mocha_1.describe)("#dateDigitToStr()", () => {
        assert_1.default.strictEqual("15 июля 2016", (0, task4_1.dateDigitToStr)("15.07.2016"));
        assert_1.default.strictEqual("", (0, task4_1.dateDigitToStr)("01.02.20.19"));
        assert_1.default.strictEqual("", (0, task4_1.dateDigitToStr)("28.00.2000"));
        assert_1.default.strictEqual("3 апреля 2011", (0, task4_1.dateDigitToStr)("03.04.2011"));
        assert_1.default.strictEqual("", (0, task4_1.dateDigitToStr)("ab.cd.ef"));
        assert_1.default.strictEqual("", (0, task4_1.dateDigitToStr)("32.09.2011"));
        assert_1.default.strictEqual("", (0, task4_1.dateDigitToStr)("29.02.1993"));
    });
});
