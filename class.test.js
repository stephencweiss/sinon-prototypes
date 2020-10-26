const TestClass = require("./class");
const sinon = require("sinon");

describe("the math class", () => {
  beforeEach(() => {
    sinon
      .stub(math, "sum")
      .withArgs(1, 2)
      .callsFake(function foo() {
        return "bar";
      });
  });
  afterEach(() => {
    sinon.reset();
  });
  test("adds 1 + 2 to equal 3", () => {
    math.sum.callThrough();
    expect(math.sum(1, 2)).toBe("bar");
    expect(math.sum(3, 2)).toBe(5);
  });
});
