"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const tasks_1 = require("@flx-learn-ts/tasks");
(0, mocha_1.describe)('task4', () => {
    (0, mocha_1.it)('timeSecondsToStr()', () => {
        chai_1.assert.strictEqual("10:00:00", (0, tasks_1.timeSecondsToStr)(36000));
        chai_1.assert.strictEqual("11:34:45", (0, tasks_1.timeSecondsToStr)(41685));
        chai_1.assert.strictEqual("23:59:59", (0, tasks_1.timeSecondsToStr)(86399));
    });
    (0, mocha_1.it)("checkDate()", () => {
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)(""));
        chai_1.assert.strictEqual(true, (0, tasks_1.checkDate)("12.11.2021"));
        chai_1.assert.strictEqual(true, (0, tasks_1.checkDate)("23.11.2001"));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("23.11. 2001"));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("23.11,2001"));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("  23.11.2001"));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("23.11.2001   "));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("233.11.2001"));
        chai_1.assert.strictEqual(false, (0, tasks_1.checkDate)("23.11.21"));
    });
    (0, mocha_1.it)("dateDigitToStr()", () => {
        chai_1.assert.strictEqual("15 июля 2016", (0, tasks_1.dateDigitToStr)("15.07.2016"));
        chai_1.assert.strictEqual("", (0, tasks_1.dateDigitToStr)("01.02.20.19"));
        chai_1.assert.strictEqual("", (0, tasks_1.dateDigitToStr)("28.00.2000"));
        chai_1.assert.strictEqual("3 апреля 2011", (0, tasks_1.dateDigitToStr)("03.04.2011"));
        chai_1.assert.strictEqual("", (0, tasks_1.dateDigitToStr)("ab.cd.ef"));
        chai_1.assert.strictEqual("", (0, tasks_1.dateDigitToStr)("32.09.2011"));
        chai_1.assert.strictEqual("", (0, tasks_1.dateDigitToStr)("29.02.1993"));
    });
});
//# sourceMappingURL=task4.js.map