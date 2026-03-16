function __STRING_ARRAY__() {
  var _0x273db1 = ["readFileSync", "62108hmvsfb", "9195QkwJaQ", "647618nIDCPl", "/dev/stdin", "1266KFMimo", "2995090qpvDfw", "Yes", "1348641rlMvrk", "utf8", "10356786LbElsi", "1VJwCWk", "135AMMPBH", "33608oIbSMS", "log", "69SiZlkU"];
  __STRING_ARRAY__ = function () {
    return _0x273db1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bXbfob, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 245;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bXbfob, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1VJwCWk") / 1 * (parseInt("647618nIDCPl") / 2) + -parseInt("69SiZlkU") / 3 * (parseInt("62108hmvsfb") / 4) + parseInt("9195QkwJaQ") / 5 * (parseInt("1266KFMimo") / 6) + -parseInt("1348641rlMvrk") / 7 + parseInt("33608oIbSMS") / 8 * (parseInt("135AMMPBH") / 9) + -parseInt("2995090qpvDfw") / 10 + parseInt("10356786LbElsi") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 219468);
function main(input) {
  var args = input.split(" ");
  var n = parseInt(args[0], 10);
  var m = parseInt(args[1], 10);
  if (n === m) {
    return "Yes";
  } else {
    return "No";
  }
}
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
