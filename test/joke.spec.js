var chicken  = require('../app/joke').chicken
var expect = require('chai').expect
describe("Chicken", function() {
    it('Should be something about a road', function() {
        var containsRoad = chicken().indexOf("road") >= 0
        expect(containsRoad).to.be(true)
    })
})