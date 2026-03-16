function __STRING_ARRAY__() {
  var _0x2255a0 = ["split", "13518VqJvZE", "12gTDdSO", "3176iBJZNF", "260980izYapV", "/dev/stdin", "5rpNgoI", "1082dDgUiJ", "1979156wstMkI", "5593860tSXOiH", "5294025HUDnHe", "477OXUZUD", "2558857MZUGwk"];
  __STRING_ARRAY__ = function () {
    return _0x2255a0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jRvbYf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 395;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jRvbYf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("260980izYapV") / 1 + parseInt("1082dDgUiJ") / 2 * (parseInt("477OXUZUD") / 3) + -parseInt("1979156wstMkI") / 4 * (-parseInt("5rpNgoI") / 5) + -parseInt("12gTDdSO") / 6 * (-parseInt("2558857MZUGwk") / 7) + parseInt("3176iBJZNF") / 8 * (-parseInt("13518VqJvZE") / 9) + -parseInt("5593860tSXOiH") / 10 + parseInt("5294025HUDnHe") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 376525);
function Main(input) {
  var inputs = input["split"](" ");
  var ab = parseInt(inputs[0], 10);
  var bc = parseInt(inputs[1], 10);
  console.log(ab * bc / 2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
