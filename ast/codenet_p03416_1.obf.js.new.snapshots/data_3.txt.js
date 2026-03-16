function __DECODE_0__(sqJzeU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 235;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sqJzeU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("87990xKkKWr") / 1 * (parseInt("6aNPtlQ") / 2) + -parseInt("3285tKDhKO") / 3 * (-parseInt("2308HKQtZv") / 4) + -parseInt("4165100WQIwGR") / 5 + -parseInt("1788BMkeJi") / 6 * (-parseInt("2359mjTnSK") / 7) + -parseInt("1963528ONlFRx") / 8 + parseInt("1148724VqXiLw") / 9 + parseInt("9158430HYnfxv") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 433289);
function Main(input) {
  var input = input["split"](" ");
  var A = input[0];
  var B = input[1];
  var cnt = 0;
  function hoge() {
    var x = A["toString"]();
    if (x[0] === x[4] && x[1] === x[3]) {
      return true;
    }
  }
  while (A <= B) {
    if (hoge()) {
      cnt++;
    }
    A++;
  }
  console["log"](cnt);
}
function __STRING_ARRAY__() {
  var _0x984872 = ["split", "/dev/stdin", "9158430HYnfxv", "utf8", "toString", "1148724VqXiLw", "log", "87990xKkKWr", "4165100WQIwGR", "1963528ONlFRx", "1788BMkeJi", "3285tKDhKO", "2359mjTnSK", "2308HKQtZv", "6aNPtlQ"];
  __STRING_ARRAY__ = function () {
    return _0x984872;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
