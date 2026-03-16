function __DECODE_0__(KZCwNg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 321;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KZCwNg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("928556YhIBcE") / 1 + -parseInt("694648xjTnNz") / 2 * (-parseInt("3kRxTxS") / 3) + parseInt("68YDGOok") / 4 * (-parseInt("178080PLXulq") / 5) + parseInt("2927832RZIFdx") / 6 + -parseInt("35hGAKgP") / 7 * (-parseInt("572624JFBxyR") / 8) + parseInt("3096Gvpoij") / 9 * (parseInt("26210nPjrfZ") / 10) + -parseInt("2344749rcptax") / 11 * (parseInt("108BcTrho") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 499463);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
Arr["shift"]();
var obj = {};
function __STRING_ARRAY__() {
  var _0x453a30 = ["694648xjTnNz", "split", "26210nPjrfZ", "3kRxTxS", "2927832RZIFdx", "insert", "178080PLXulq", "572624JFBxyR", "35hGAKgP", "108BcTrho", "928556YhIBcE", "68YDGOok", "forEach", "3096Gvpoij", "2344749rcptax", "log", "hasOwnProperty", "/dev/stdin", "shift", "yes"];
  __STRING_ARRAY__ = function () {
    return _0x453a30;
  };
  return __STRING_ARRAY__();
}
Arr["forEach"](function (v) {
  var arr = v.split(" ");
  if (arr[0] == "insert") {
    obj[arr[1]] = true;
  }
  if (arr[0] == "find") {
    console["log"](obj["hasOwnProperty"](arr[1]) ? "yes" : "no");
  }
});
