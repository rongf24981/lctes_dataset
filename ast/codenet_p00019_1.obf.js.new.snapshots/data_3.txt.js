function __STRING_ARRAY__() {
  var _0x3d46a2 = ["3SmCcSv", "1010737AZcrgP", "3741715VNzOnS", "1230484arwrXG", "log", "readFileSync", "1799skRjGd", "utf8", "376268qnijwr", "6324186OdPqpP", "25864BWhXuv", "13681125cgqOtd"];
  __STRING_ARRAY__ = function () {
    return _0x3d46a2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1010737AZcrgP") / 1 + -parseInt("376268qnijwr") / 2 + parseInt("3SmCcSv") / 3 * (parseInt("1230484arwrXG") / 4) + parseInt("3741715VNzOnS") / 5 + parseInt("6324186OdPqpP") / 6 + parseInt("1799skRjGd") / 7 * (-parseInt("25864BWhXuv") / 8) + -parseInt("13681125cgqOtd") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 581592);
function main(input) {
  var ans = 1;
  var inputNum = toInt(input);
  for (var i = 1; i <= input; i++) {
    ans = ans * i;
  }
  console["log"](ans);
}
function toInt(str) {
  return parseInt(str, 10);
}
function __DECODE_0__(gKmgFJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 170;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gKmgFJ, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
