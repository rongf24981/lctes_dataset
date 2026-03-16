(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("481983VdxHXF") / 1 + parseInt("198QChiUw") / 2 * (parseInt("1068zNVmfJ") / 3) + parseInt("44276yLKZNt") / 4 * (-parseInt("120AMkSfU") / 5) + parseInt("66156AHDXwt") / 6 + parseInt("478611XgjeQR") / 7 + -parseInt("24rXGawb") / 8 * (-parseInt("178569IwXVTZ") / 9) + -parseInt("157580JprFyK") / 10 * (parseInt("77xgxwOu") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 280187);
function Main(input) {
  var inp = input.split(" ");
  var a = inp[0];
  var b = inp[1];
  var n = parseInt(a + b);
  var flsqn = Math["floor"](Math["sqrt"](n));
  if (flsqn * flsqn === n) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
function __DECODE_0__(rjNIwB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rjNIwB, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x2604df = ["1068zNVmfJ", "readFileSync", "/dev/stdin", "478611XgjeQR", "44276yLKZNt", "481983VdxHXF", "sqrt", "120AMkSfU", "utf8", "Yes", "66156AHDXwt", "floor", "157580JprFyK", "77xgxwOu", "178569IwXVTZ", "log", "24rXGawb", "198QChiUw"];
  __STRING_ARRAY__ = function () {
    return _0x2604df;
  };
  return __STRING_ARRAY__();
}
