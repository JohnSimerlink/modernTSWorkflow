import {expect} from 'chai'
import {redRidingHood} from "../app/story";
describe('LittleRedRiding hood', () => {
    it('Should contain the word `time`', () => {
        const containsTime = redRidingHood().indexOf("time") >= 0
        expect(containsTime).to.equal(true)
    })

})