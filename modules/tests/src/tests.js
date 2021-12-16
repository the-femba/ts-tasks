"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const tasks = __importStar(require("@ts-tasks/tasks"));
(0, mocha_1.describe)("#task1", () => {
    (0, mocha_1.describe)("#trackLengthTests()", () => {
        chai_1.assert.strictEqual(5.0, tasks.trackLength(3.0, 0.0, 0.0, 4.0));
        chai_1.assert.strictEqual(1.0, tasks.trackLength(0.0, 1.0, -1.0, 1.0));
        chai_1.assert.strictEqual("1.41", tasks.trackLength(1.0, 1.0, 2.0, 2.0).toFixed(2));
    });
    (0, mocha_1.describe)("#getThirdDigit()", () => {
        chai_1.assert.strictEqual(8, tasks.getThirdDigit(3801));
        chai_1.assert.strictEqual(1, tasks.getThirdDigit(100));
        chai_1.assert.strictEqual(0, tasks.getThirdDigit(1000));
    });
    (0, mocha_1.describe)("#amountAfterThreeYears()", () => {
        chai_1.assert.strictEqual(133.1, tasks.amountAfterThreeYears(100, 10));
        chai_1.assert.strictEqual(1.0, tasks.amountAfterThreeYears(1, 0));
        chai_1.assert.strictEqual(104.0, tasks.amountAfterThreeYears(13, 100));
    });
});
(0, mocha_1.describe)("#task2", () => {
    (0, mocha_1.describe)("#minDivisor()", () => {
        chai_1.assert.strictEqual(2, tasks.minDivisor(2));
        chai_1.assert.strictEqual(3, tasks.minDivisor(75));
        chai_1.assert.strictEqual(5, tasks.minDivisor(75 / 3));
        chai_1.assert.strictEqual(97, tasks.minDivisor(97));
        chai_1.assert.strictEqual(7, tasks.minDivisor(49));
        chai_1.assert.strictEqual(17, tasks.minDivisor(8653));
        chai_1.assert.strictEqual(2124679, tasks.minDivisor(2124679));
        chai_1.assert.strictEqual(1073676287, tasks.minDivisor(1073676287));
        chai_1.assert.strictEqual(Number.MAX_VALUE, tasks.minDivisor(Number.MAX_VALUE));
    });
    (0, mocha_1.describe)("#fib()", () => {
        chai_1.assert.strictEqual(1, tasks.fib(1));
        chai_1.assert.strictEqual(1, tasks.fib(2));
        chai_1.assert.strictEqual(2, tasks.fib(3));
        chai_1.assert.strictEqual(5, tasks.fib(5));
        chai_1.assert.strictEqual(21, tasks.fib(8));
        chai_1.assert.strictEqual(102334155, tasks.fib(40));
        chai_1.assert.strictEqual(1134903170, tasks.fib(45));
        chai_1.assert.strictEqual(1836311903, tasks.fib(46));
        tasks.fib(50);
    });
    (0, mocha_1.describe)("#whichRookThreatens()", () => {
        chai_1.assert.strictEqual(0, tasks.whichRookThreatens(1, 2, 3, 4, 5, 6));
        chai_1.assert.strictEqual(1, tasks.whichRookThreatens(5, 3, 7, 3, 4, 8));
        chai_1.assert.strictEqual(2, tasks.whichRookThreatens(6, 8, 8, 6, 6, 3));
        chai_1.assert.strictEqual(3, tasks.whichRookThreatens(3, 7, 8, 7, 3, 5));
    });
});
(0, mocha_1.describe)("#task3", () => {
    (0, mocha_1.describe)("#mean()", () => {
        chai_1.assert.strictEqual(0.0, tasks.mean([]));
        chai_1.assert.strictEqual(1.0, tasks.mean([1.0]));
        chai_1.assert.strictEqual(2.0, tasks.mean([3.0, 1.0, 2.0]));
        chai_1.assert.strictEqual(3.0, tasks.mean([0.0, 2.0, 7.0, 8.0, -2.0]));
    });
    (0, mocha_1.describe)("#extractRepeats()", () => {
        chai_1.assert.strictEqual({}, tasks.extractRepeats([]));
        chai_1.assert.strictEqual({ "a": 2 }, tasks.extractRepeats(["a", "b", "a"]));
        chai_1.assert.strictEqual({}, tasks.extractRepeats(["a", "b", "c"]));
    });
    (0, mocha_1.describe)("#findSumOfTwo()", () => {
        chai_1.assert.strictEqual([1, 2], tasks.findSumOfTwo([1, 0, 0, 0], 0));
        chai_1.assert.strictEqual([-1, -1], tasks.findSumOfTwo([], 1));
        chai_1.assert.strictEqual([0, 2], tasks.findSumOfTwo([1, 2, 3], 4));
        chai_1.assert.strictEqual([0, 2], tasks.findSumOfTwo([3, 2, 1], 4));
    });
});
(0, mocha_1.describe)("#task4", () => {
    (0, mocha_1.describe)("#timeSecondsToStr()", () => {
        chai_1.assert.strictEqual("10:00:00", tasks.timeSecondsToStr(36000));
        chai_1.assert.strictEqual("11:34:45", tasks.timeSecondsToStr(41685));
        chai_1.assert.strictEqual("23:59:59", tasks.timeSecondsToStr(86399));
    });
    (0, mocha_1.describe)("#checkDate()", () => {
        chai_1.assert.strictEqual(false, tasks.checkDate(""));
        chai_1.assert.strictEqual(true, tasks.checkDate("23.43.2001"));
        chai_1.assert.strictEqual(false, tasks.checkDate("23.43. 2001"));
        chai_1.assert.strictEqual(false, tasks.checkDate("23.43,2001"));
        chai_1.assert.strictEqual(false, tasks.checkDate("  23.43.2001"));
        chai_1.assert.strictEqual(false, tasks.checkDate("23.43.2001   "));
        chai_1.assert.strictEqual(false, tasks.checkDate("233.43.2001"));
        chai_1.assert.strictEqual(false, tasks.checkDate("23.43.201"));
    });
    (0, mocha_1.describe)("#dateDigitToStr()", () => {
        chai_1.assert.strictEqual("15 июля 2016", tasks.dateDigitToStr("15.07.2016"));
        chai_1.assert.strictEqual("", tasks.dateDigitToStr("01.02.20.19"));
        chai_1.assert.strictEqual("", tasks.dateDigitToStr("28.00.2000"));
        chai_1.assert.strictEqual("3 апреля 2011", tasks.dateDigitToStr("03.04.2011"));
        chai_1.assert.strictEqual("", tasks.dateDigitToStr("ab.cd.ef"));
        chai_1.assert.strictEqual("", tasks.dateDigitToStr("32.09.2011"));
        chai_1.assert.strictEqual("", tasks.dateDigitToStr("29.02.1993"));
    });
});
