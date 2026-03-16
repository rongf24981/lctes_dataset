function __DECODE_0__(ifCnTu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 500;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ifCnTu, key);
}
function __STRING_ARRAY__() {
  var _0x967f96 = ["readFileSync", "1081494fteWwn", "2120hVbyLp", "210950mFedbL", "273IXlHTB", "1077096juxyjj", "730124wkPVkH", "2181543jkocEy", "15tfqjMB", "90GufCyA", "/dev/stdin", "16AxERDY", "30moUReZ", "3547302RsXYBX", "utf8", "102VpbBDu", "map", "log"];
  __STRING_ARRAY__ = function () {
    return _0x967f96;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2120hVbyLp") / 1 * (-parseInt("90GufCyA") / 2) + parseInt("15tfqjMB") / 3 * (parseInt("730124wkPVkH") / 4) + parseInt("210950mFedbL") / 5 * (parseInt("102VpbBDu") / 6) + -parseInt("2181543jkocEy") / 7 * (-parseInt("16AxERDY") / 8) + parseInt("1081494fteWwn") / 9 * (parseInt("30moUReZ") / 10) + -parseInt("3547302RsXYBX") / 11 + -parseInt("1077096juxyjj") / 12 * (parseInt("273IXlHTB") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 501681);
function Main(input) {
  var data = input.split(/\a\n|\a|\n/)["map"](function (s) {
    return parseInt(s);
  });
  var x = [[data[0], data[1], 0], [0, data[2], 0], [0, 0, 0]];
  var sum = x[1][1] * 3;
  x[0][2] = sum - x[0][0] - x[0][1];
  x[2][1] = sum - x[0][1] - x[1][1];
  x[2][2] = sum - x[0][0] - x[1][1];
  x[2][0] = sum - x[2][1] - x[2][2];
  x[1][0] = sum - x[0][0] - x[2][0];
  x[1][2] = sum - x[0][2] - x[2][2];
  console["log"](x[0][0] + " " + x[0][1] + " " + x[0][2]);
  console["log"](x[1][0] + " " + x[1][1] + " " + x[1][2]);
  console["log"](x[2][0] + " " + x[2][1] + " " + x[2][2]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
