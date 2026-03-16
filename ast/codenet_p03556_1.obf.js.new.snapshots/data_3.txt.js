(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("45701vlNOBz") / 1 + -parseInt("1580798iSAcFm") / 2 + parseInt("12837bQAkFM") / 3 * (parseInt("548CQNRsr") / 4) + parseInt("1207985NezBWR") / 5 * (parseInt("12wZMKCk") / 6) + -parseInt("1676101CftopM") / 7 + parseInt("8215344iMGMAA") / 8 + -parseInt("2984211jGOBYw") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 780615);
function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0]);
  var ans = Math.pow(Math.floor(Math["sqrt"](n)), 2);
  console["log"]("%s", ans);
}
function __DECODE_0__(FLjtGB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 301;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FLjtGB, key);
}
function __STRING_ARRAY__() {
  var _0x55b289 = ["548CQNRsr", "log", "45701vlNOBz", "sqrt", "12wZMKCk", "split", "readFileSync", "1207985NezBWR", "1580798iSAcFm", "12837bQAkFM", "2984211jGOBYw", "1676101CftopM", "/dev/stdin", "utf8", "8215344iMGMAA"];
  __STRING_ARRAY__ = function () {
    return _0x55b289;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
