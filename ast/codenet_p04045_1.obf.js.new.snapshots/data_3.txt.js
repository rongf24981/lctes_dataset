function __DECODE_0__(MvVkhF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 277;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MvVkhF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("20SltTXK") / 1 * (-parseInt("72974UUQPkY") / 2) + parseInt("2005425wDVhzf") / 3 + -parseInt("422680IKerOU") / 4 + parseInt("3853820pbWajm") / 5 + parseInt("6HuLEYg") / 6 * (-parseInt("889301QQmsaT") / 7) + parseInt("6126248PnKzJY") / 8 + -parseInt("1737unnzRj") / 9 * (parseInt("119850qWFuTS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388942);
function main(input) {
  var inputs = input.split("\n");
  var money = inputs[0].split(" ")[0];
  var kRegexp = new RegExp(inputs[1]["replace"](" ", "|"));
  while (kRegexp["test"](String(money))) {
    money++;
  }
  return money;
}
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  var _0xb4a394 = ["6HuLEYg", "119850qWFuTS", "readFileSync", "889301QQmsaT", "422680IKerOU", "2005425wDVhzf", "1737unnzRj", "utf8", "replace", "3853820pbWajm", "test", "log", "20SltTXK", "72974UUQPkY", "6126248PnKzJY"];
  __STRING_ARRAY__ = function () {
    return _0xb4a394;
  };
  return __STRING_ARRAY__();
}
