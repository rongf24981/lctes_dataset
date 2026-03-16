function __DECODE_0__(DVNUxU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 458;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DVNUxU, key);
}
function __STRING_ARRAY__() {
  var _0x23963f = ["1446LfofXe", "utf8", "trim", "8232ZvZSVa", "map", "1146OtBBDi", "1348020wYHcaf", "/dev/stdin", "split", "190lnulNw", "2127RhpamX", "240vGKleb", "2165232mvaMEf", "log", "448659kMklQI", "19236iSmXFu", "195635xtyiYs"];
  __STRING_ARRAY__ = function () {
    return _0x23963f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("448659kMklQI") / 1 + -parseInt("1446LfofXe") / 2 * (parseInt("2127RhpamX") / 3) + -parseInt("19236iSmXFu") / 4 * (-parseInt("240vGKleb") / 5) + -parseInt("1146OtBBDi") / 6 * (parseInt("8232ZvZSVa") / 7) + parseInt("2165232mvaMEf") / 8 + -parseInt("1348020wYHcaf") / 9 + -parseInt("190lnulNw") / 10 * (-parseInt("195635xtyiYs") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 401057);
var input = require("fs").readFileSync("/dev/stdin", "utf8")["trim"]();
var nums = input["split"](" ")["map"](function (num) {
  return +num;
});
var n = nums[0];
var m = nums[1];
var mod = 1;
for (var i = 0; i < m; i++) {
  mod = mod * n % 1000000007;
}
console["log"](mod);
