import { assert } from 'chai'
import { describe, it } from 'mocha'
import { roundFixed } from '@flx-learn-ts/utils'
import { amountAfterThreeYears, getThirdDigit, trackLength } from '@flx-learn-ts/tasks'

describe('task1', () => {
    it('trackLength()', () => {
        assert.strictEqual(5.00, trackLength(3.0, 0.0, 0.0, 4.0))
        assert.strictEqual(1.00, trackLength(0.0, 1.0, -1.0, 1.0))
        assert.strictEqual(1.41, roundFixed(trackLength(1.0, 1.0, 2.0, 2.0), 2))
    })

    it("getThirdDigit()", () => {
        assert.strictEqual(8, getThirdDigit(3801))
        assert.strictEqual(1, getThirdDigit(100))
        assert.strictEqual(0, getThirdDigit(1000))
    })
    
    it("amountAfterThreeYears()", () => {
        assert.strictEqual(133.1, roundFixed(amountAfterThreeYears(100, 10), 1))
        assert.strictEqual(1.0, amountAfterThreeYears(1, 0))
        assert.strictEqual(104.0, amountAfterThreeYears(13, 100))
    })
})
