import assert from "assert";
import { describe } from "mocha";
import { amountAfterThreeYears, getThirdDigit, trackLength } from "./task1";
import { fib, minDivisor, whichRookThreatens } from "./task2";
import { extractRepeats, findSumOfTwo, mean } from "./task3";
import { checkDate, dateDigitToStr, timeSecondsToStr } from "./task4";

describe("#task1", () => {
    describe("#trackLengthTests()", () => {
        assert.strictEqual(5.0, trackLength(3.0, 0.0, 0.0, 4.0))
        assert.strictEqual(1.0, trackLength(0.0, 1.0, -1.0, 1.0))
        assert.strictEqual(1.41, trackLength(1.0, 1.0, 2.0, 2.0))
    })
    
    describe("#getThirdDigit()", () => {
        assert.strictEqual(8, getThirdDigit(3801))
        assert.strictEqual(1, getThirdDigit(100))
        assert.strictEqual(0, getThirdDigit(1000))
    })
    
    describe("#amountAfterThreeYears()", () => {
        assert.strictEqual(133.1, amountAfterThreeYears(100, 10))
        assert.strictEqual(1.0, amountAfterThreeYears(1, 0))
        assert.strictEqual(104.0, amountAfterThreeYears(13, 100))
    })
})

describe("#task2", () => {
    describe("#minDivisor()", () => {
        assert.strictEqual(2, minDivisor(2))
        assert.strictEqual(3, minDivisor(75))
        assert.strictEqual(5, minDivisor(75 / 3))
        assert.strictEqual(97, minDivisor(97))
        assert.strictEqual(7, minDivisor(49))
        assert.strictEqual(17, minDivisor(8653))
        assert.strictEqual(2124679, minDivisor(2124679))
        assert.strictEqual(1073676287, minDivisor(1073676287))
        assert.strictEqual(Number.MAX_VALUE, minDivisor(Number.MAX_VALUE))
    })

    describe("#fib()", () => {
        assert.strictEqual(1, fib(1))
        assert.strictEqual(1, fib(2))
        assert.strictEqual(2, fib(3))
        assert.strictEqual(5, fib(5))
        assert.strictEqual(21, fib(8))
        assert.strictEqual(102334155, fib(40))
        assert.strictEqual(1134903170, fib(45))
        assert.strictEqual(1836311903, fib(46))
        fib(50)
    })

    describe("#whichRookThreatens()", () => {
        assert.strictEqual(0, whichRookThreatens(1, 2, 3, 4, 5, 6))
        assert.strictEqual(1, whichRookThreatens(5, 3, 7, 3, 4, 8))
        assert.strictEqual(2, whichRookThreatens(6, 8, 8, 6, 6, 3))
        assert.strictEqual(3, whichRookThreatens(3, 7, 8, 7, 3, 5))
    })
})

describe("#task3", () => {
    describe("#mean()", () => {
        assert.strictEqual(0.0, mean([]))
        assert.strictEqual(1.0, mean([1.0]))
        assert.strictEqual(2.0, mean([3.0, 1.0, 2.0]))
        assert.strictEqual(3.0, mean([0.0, 2.0, 7.0, 8.0, -2.0]))
    })

    describe("#extractRepeats()", () => {
        assert.strictEqual({}, extractRepeats([]))
        assert.strictEqual({"a": 2}, extractRepeats(["a", "b", "a"]))
        assert.strictEqual({}, extractRepeats(["a", "b", "c"]))
    })

    describe("#findSumOfTwo()", () => {
        assert.strictEqual([1, 2], findSumOfTwo([1, 0, 0, 0], 0))
        assert.strictEqual([-1, -1], findSumOfTwo([], 1))
        assert.strictEqual([0, 2], findSumOfTwo([1, 2, 3], 4))
        assert.strictEqual([0, 2], findSumOfTwo([3, 2, 1], 4))
    })
})

describe("#task4", () => {
    describe("#timeSecondsToStr()", () => {
        assert.strictEqual("10:00:00", timeSecondsToStr(36000))
        assert.strictEqual("11:34:45", timeSecondsToStr(41685))
        assert.strictEqual("23:59:59", timeSecondsToStr(86399))
    })

    describe("#checkDate()", () => {
        assert.strictEqual(false, checkDate(""))
        assert.strictEqual(true, checkDate("23.43.2001"))
        assert.strictEqual(false, checkDate("23.43. 2001"))
        assert.strictEqual(false, checkDate("23.43,2001"))
        assert.strictEqual(false, checkDate("  23.43.2001"))
        assert.strictEqual(false, checkDate("23.43.2001   "))
        assert.strictEqual(false, checkDate("233.43.2001"))
        assert.strictEqual(false, checkDate("23.43.21"))
    })

    describe("#dateDigitToStr()", () => {
        assert.strictEqual("15 июля 2016", dateDigitToStr("15.07.2016"))
        assert.strictEqual("", dateDigitToStr("01.02.20.19"))
        assert.strictEqual("", dateDigitToStr("28.00.2000"))
        assert.strictEqual("3 апреля 2011", dateDigitToStr("03.04.2011"))
        assert.strictEqual("", dateDigitToStr("ab.cd.ef"))
        assert.strictEqual("", dateDigitToStr("32.09.2011"))
        assert.strictEqual("", dateDigitToStr("29.02.1993"))
    })
})