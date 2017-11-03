require('babel-register')
import {chicken} from "../app/joke"
import {expect} from "chai"
describe("Chicken", function() {
    it('Should be something about a road', function() {
        var containsRoad = chicken().indexOf("road") >= 0
        expect(containsRoad).to.equal(true)
    })
})