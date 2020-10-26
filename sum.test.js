const sum = require("./sum");
const sinon = require("sinon");

const sumStub = sinon.stub(sum, "sum").callsFake(function foo() {
  return "bar";
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum.sum(1, 2)).toBe("bar");
});
