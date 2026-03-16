function __STRING_ARRAY__() {
  var _0x1f007a = ["log", "utf8", "2916249NgdXLb", "47zEIVao", "8605256ifbaWe", "6MPNdkf", "split", "68886qYOeBb", "toString", "readFileSync", "3994662ruuJUZ", "5063255MACvIV", "971772mUuCSn", "23235885IputHC"];
  __STRING_ARRAY__ = function () {
    return _0x1f007a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("47zEIVao") / 1 * (parseInt("68886qYOeBb") / 2) + -parseInt("2916249NgdXLb") / 3 + parseInt("971772mUuCSn") / 4 + -parseInt("5063255MACvIV") / 5 * (parseInt("6MPNdkf") / 6) + parseInt("3994662ruuJUZ") / 7 + parseInt("8605256ifbaWe") / 8 + parseInt("23235885IputHC") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 867476);
function __DECODE_0__(LjiXUO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 370;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LjiXUO, key);
}
function Main(input) {
  var args = input["split"](" ");
  var num = parseInt(args[0], 10);
  var str = num["toString"](10);
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "1") {
      count += 1;
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
