(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("320990jKHInI") / 1 + -parseInt("71312PmgWOW") / 2 * (-parseInt("36XOZsOH") / 3) + -parseInt("6358988WyXZcQ") / 4 + -parseInt("5085215gKdfZK") / 5 + -parseInt("3645984WdgPEv") / 6 + parseInt("8077251JbCKzE") / 7 + parseInt("16RmMrxf") / 8 * (parseInt("12595761DoZYcT") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 845379);
function __DECODE_0__(DHOzOg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 331;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DHOzOg, key);
}
function Main(input) {
  input = input["split"](" ");
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);
  var t = parseInt(input[2], 10);
  console["log"]("%d", Math["floor"]((t + 0.5) / a) * b);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x40c388 = ["12595761DoZYcT", "71312PmgWOW", "320990jKHInI", "5085215gKdfZK", "split", "floor", "utf8", "8077251JbCKzE", "6358988WyXZcQ", "readFileSync", "log", "36XOZsOH", "16RmMrxf", "3645984WdgPEv", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x40c388;
  };
  return __STRING_ARRAY__();
}
