import {chicken,stick} from "../app/joke"
import {expect} from "chai"
// let x: number = 5
describe("Chicken", function() {
    it('Should be something about a road', function() {
        var containsRoad = chicken().indexOf("road") >= 0
        expect(containsRoad).to.equal(true)
    })
})
describe("Stick", function() {
    it('Should be something about a stick', function() {
        var containsStick = stick().indexOf("stick") >= 0
        expect(containsStick).to.equal(true)
    })
})
