var globalVariableName = 42;
function foo() {
  var longLocalVariableName = 1;
  if (longLocalVariableName) {
    console.log(longLocalVariableName);
  }
}