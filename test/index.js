var expect    = require("chai").expect;
var generator = require("../");

describe("Generate Username", function() {
  it("with separator", function() {
    var username = generator.generateUsername("-");
    expect(username).to.contain('-')

  });

  it("without separator", function() {
    var username = generator.generateUsername();
    expect(username).to.not.contain('-')
  });
});
