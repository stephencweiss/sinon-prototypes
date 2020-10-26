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
  test("testClass instance can be stubbed", () => {
    const instanceStub = sinon
      .stub(TestClass.prototype, "instanceMethod")
      .callsFake(function foo() {
        return "baz";
      });
    expect(instanceStub()).toBe("baz");
  });

  test("testClass static method can be stubbed", () => {
    const staticStub = sinon.stub(TestClass, "staticMethod").callsFake(() => 'foobar')
    expect(staticStub()).toBe('foobar')
    staticStub.reset()
  })
});
