(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("12773yuQBxH") / 1 * (parseInt("10qyjUFR") / 2) + parseInt("517773KZTvIE") / 3 + -parseInt("32920wVMpKO") / 4 * (-parseInt("135hQtBGz") / 5) + parseInt("96798COwVcq") / 6 + parseInt("604079lDtnGQ") / 7 + parseInt("784Wfhfob") / 8 * (parseInt("5103hJCLSU") / 9) + -parseInt("3773360ndBOFT") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 111596);
function Main(input) {
  var tmp = String(input);
  var truecount = 0;
  if (tmp[2] == tmp[0]) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
function __DECODE_0__(OPdMVc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 264;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OPdMVc, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x3baa80 = ["12773yuQBxH", "3773360ndBOFT", "784Wfhfob", "Yes", "log", "135hQtBGz", "604079lDtnGQ", "5103hJCLSU", "readFileSync", "utf8", "10qyjUFR", "32920wVMpKO", "96798COwVcq", "517773KZTvIE", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x3baa80;
  };
  return __STRING_ARRAY__();
}
