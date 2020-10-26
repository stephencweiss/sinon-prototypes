// const TestClass = require("./class");
const sinon = require("sinon");

class TestClass {
  static staticMethod() {
    return "foo";
  }
  instanceMethod() {
    return "bar";
  }
}

describe("the test class", () => {
  beforeEach(() => {
    sinon
      .stub(TestClass.prototype, "instanceMethod")
      .callsFake(function foo() {
        return "baz";
      });
  });
  afterEach(() => {
    sinon.reset();
  });
  test("testClass instance can be stubbed", () => {
    const testClass = new TestClass()
    expect(testClass.instanceMethod()).toBe("baz");
  });
});
