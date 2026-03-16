function __DECODE_0__(sSnSqi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 330;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sSnSqi, key);
}
function __STRING_ARRAY__() {
  var _0x9c6e6a = ["2511LrTJiq", "263904RRDawf", "4hDpCDq", "1067UmmoSI", "620edJIiV", "804600CNKiJk", "14581QQyZNj", "readFileSync", "20bOwokf", "trim", "858OsAuGK", "map", "564272lKWavG", "7207240wuYGVR", "2577159AUBoRk", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x9c6e6a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("564272lKWavG") / 1 + parseInt("620edJIiV") / 2 * (-parseInt("2511LrTJiq") / 3) + -parseInt("4hDpCDq") / 4 * (-parseInt("804600CNKiJk") / 5) + parseInt("858OsAuGK") / 6 * (-parseInt("14581QQyZNj") / 7) + -parseInt("7207240wuYGVR") / 8 + parseInt("2577159AUBoRk") / 9 * (parseInt("20bOwokf") / 10) + parseInt("1067UmmoSI") / 11 * (parseInt("263904RRDawf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 844330);
function Main(input) {
  var xs = input["trim"]().split("\n")["map"](v => parseInt(v, 10));
  var A = 0;
  if (xs[0] <= xs[1]) {
    A = A + xs[0];
  } else if (xs[0] >= xs[1]) {
    A = A + xs[1];
  }
  var B = 0;
  if (xs[2] <= xs[3]) {
    B = B + xs[2];
  } else if (xs[2] >= xs[3]) {
    B = B + xs[3];
  }
  console.log(A + B);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
