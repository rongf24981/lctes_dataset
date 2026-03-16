(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("344426rEcgsK") / 1 * (parseInt("4PTmlxQ") / 2) + -parseInt("5251836AhCTvO") / 3 + -parseInt("20lbnmFQ") / 4 * (-parseInt("952345pZBJZT") / 5) + -parseInt("78ZrlKuo") / 6 * (-parseInt("64988nPGAde") / 7) + -parseInt("504eFQGgX") / 8 * (-parseInt("56214XVNLIF") / 9) + parseInt("3829600XirHiR") / 10 + parseInt("38874AAjMDT") / 11 * (parseInt("612JtROHq") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 967969);
function __DECODE_0__(pYImok, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 177;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pYImok, key);
}
const main = inputs => {
  var array = inputs[0].split(" ");
  var X = Number(array);
  var num = 100;
  var count = 0;
  while (1) {
    var risoku = Math["floor"](num * 0.01);
    num = num + risoku;
    count++;
    if (X <= num) {
      break;
    }
  }
  console["log"](count);
};
main(require("fs").readFileSync("/dev/stdin", "UTF-8")["trim"]().split("\n"));
function __STRING_ARRAY__() {
  var _0x2146dd = ["/dev/stdin", "38874AAjMDT", "64988nPGAde", "trim", "952345pZBJZT", "floor", "344426rEcgsK", "UTF-8", "20lbnmFQ", "3829600XirHiR", "56214XVNLIF", "5251836AhCTvO", "504eFQGgX", "4PTmlxQ", "78ZrlKuo", "612JtROHq", "log"];
  __STRING_ARRAY__ = function () {
    return _0x2146dd;
  };
  return __STRING_ARRAY__();
}
