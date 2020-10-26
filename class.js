export default class TestClass {
  static staticMethod() {
    return "foo";
  }
  instanceMethod() {
    return "bar";
  }
}

module.exports = TestClass;
