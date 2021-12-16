import { assert } from "chai";
import { describe } from "mocha";
import * as tasks from "@ts-tasks/tasks";

describe("#task1", () => {
    describe("#trackLengthTests()", () => {
        assert.strictEqual(5.0,  tasks.trackLength(3.0, 0.0, 0.0, 4.0))
        assert.strictEqual(1.0, tasks.trackLength(0.0, 1.0, -1.0, 1.0))
        assert.strictEqual("1.41", tasks.trackLength(1.0, 1.0, 2.0, 2.0).toFixed(2))
    })
    
    describe("#getThirdDigit()", () => {
        assert.strictEqual(8, tasks.getThirdDigit(3801))
        assert.strictEqual(1, tasks.getThirdDigit(100))
        assert.strictEqual(0, tasks.getThirdDigit(1000))
    })
    
    describe("#amountAfterThreeYears()", () => {
        assert.strictEqual(133.1, tasks.amountAfterThreeYears(100, 10))
        assert.strictEqual(1.0, tasks.amountAfterThreeYears(1, 0))
        assert.strictEqual(104.0, tasks.amountAfterThreeYears(13, 100))
    })
})

describe("#task2", () => {
    describe("#minDivisor()", () => {
        assert.strictEqual(2, tasks.minDivisor(2))
        assert.strictEqual(3, tasks.minDivisor(75))
        assert.strictEqual(5, tasks.minDivisor(75 / 3))
        assert.strictEqual(97, tasks.minDivisor(97))
        assert.strictEqual(7, tasks.minDivisor(49))
        assert.strictEqual(17, tasks.minDivisor(8653))
        assert.strictEqual(2124679, tasks.minDivisor(2124679))
        assert.strictEqual(1073676287, tasks.minDivisor(1073676287))
        assert.strictEqual(Number.MAX_VALUE, tasks.minDivisor(Number.MAX_VALUE))
    })

    describe("#fib()", () => {
        assert.strictEqual(1, tasks.fib(1))
        assert.strictEqual(1, tasks.fib(2))
        assert.strictEqual(2, tasks.fib(3))
        assert.strictEqual(5, tasks.fib(5))
        assert.strictEqual(21, tasks.fib(8))
        assert.strictEqual(102334155, tasks.fib(40))
        assert.strictEqual(1134903170, tasks.fib(45))
        assert.strictEqual(1836311903, tasks.fib(46))
        tasks.fib(50)
    })

    describe("#whichRookThreatens()", () => {
        assert.strictEqual(0, tasks.whichRookThreatens(1, 2, 3, 4, 5, 6))
        assert.strictEqual(1, tasks.whichRookThreatens(5, 3, 7, 3, 4, 8))
        assert.strictEqual(2, tasks.whichRookThreatens(6, 8, 8, 6, 6, 3))
        assert.strictEqual(3, tasks.whichRookThreatens(3, 7, 8, 7, 3, 5))
    })
})

describe("#task3", () => {
    describe("#mean()", () => {
        assert.strictEqual(0.0, tasks.mean([]))
        assert.strictEqual(1.0, tasks.mean([1.0]))
        assert.strictEqual(2.0, tasks.mean([3.0, 1.0, 2.0]))
        assert.strictEqual(3.0, tasks.mean([0.0, 2.0, 7.0, 8.0, -2.0]))
    })

    describe("#extractRepeats()", () => {
        assert.strictEqual(new Map<string, number>(), tasks.extractRepeats([]))
        assert.strictEqual({ "a": 2 } as unknown as Map<string, number>, tasks.extractRepeats(["a", "b", "a"]))
        assert.strictEqual({}, tasks.extractRepeats(["a", "b", "c"]))
    })

    describe("#findSumOfTwo()", () => {
        assert.strictEqual([1, 2], tasks.findSumOfTwo([1, 0, 0, 0], 0))
        assert.strictEqual([-1, -1], tasks.findSumOfTwo([], 1))
        assert.strictEqual([0, 2], tasks.findSumOfTwo([1, 2, 3], 4))
        assert.strictEqual([0, 2], tasks.findSumOfTwo([3, 2, 1], 4))
    })
})

describe("#task4", () => {
    describe("#timeSecondsToStr()", () => {
        assert.strictEqual("10:00:00", tasks.timeSecondsToStr(36000))
        assert.strictEqual("11:34:45", tasks.timeSecondsToStr(41685))
        assert.strictEqual("23:59:59", tasks.timeSecondsToStr(86399))
    })

    describe("#checkDate()", () => {
        assert.strictEqual(false, tasks.checkDate(""))
        assert.strictEqual(true, tasks.checkDate("23.43.2001"))
        assert.strictEqual(false, tasks.checkDate("23.43. 2001"))
        assert.strictEqual(false, tasks.checkDate("23.43,2001"))
        assert.strictEqual(false, tasks.checkDate("  23.43.2001"))
        assert.strictEqual(false, tasks.checkDate("23.43.2001   "))
        assert.strictEqual(false, tasks.checkDate("233.43.2001"))
        assert.strictEqual(false, tasks.checkDate("23.43.201"))
    })

    describe("#dateDigitToStr()", () => {
        assert.strictEqual("15 июля 2016", tasks.dateDigitToStr("15.07.2016"))
        assert.strictEqual("", tasks.dateDigitToStr("01.02.20.19"))
        assert.strictEqual("", tasks.dateDigitToStr("28.00.2000"))
        assert.strictEqual("3 апреля 2011", tasks.dateDigitToStr("03.04.2011"))
        assert.strictEqual("", tasks.dateDigitToStr("ab.cd.ef"))
        assert.strictEqual("", tasks.dateDigitToStr("32.09.2011"))
        assert.strictEqual("", tasks.dateDigitToStr("29.02.1993"))
    })
})