(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5qVnOkE") / 1 * (-parseInt("492874wpcAMQ") / 2) + -parseInt("2850033pGSwQa") / 3 + parseInt("8LraSjb") / 4 * (parseInt("3544330xZOBBc") / 5) + -parseInt("1038UIkEXt") / 6 * (parseInt("6181ZZZpCT") / 7) + parseInt("1256KPPhDR") / 8 * (-parseInt("76059OjKNmJ") / 9) + -parseInt("13340010LtSfuT") / 10 + parseInt("8767jAOflV") / 11 * (parseInt("30864uvbBTJ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 936223);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
var N = Arr["shift"]() - 0;
for (var i = 0; i < N; i++) {
  var arr = Arr.shift()["split"](" ")["map"](Number);
  var x = arr[0];
  var y = arr[1];
  var b = arr[2];
  var p = arr[3];
  var A = x * b + y * p;
  while (b < 5) {
    b++;
  }
  while (p < 2) {
    p++;
  }
  var B = (x * b + y * p) * 0.8;
  console.log(Math["min"](A, B));
}
function __DECODE_0__(Jaxipf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Jaxipf, key);
}
function __STRING_ARRAY__() {
  var _0x1c5554 = ["8LraSjb", "split", "map", "1038UIkEXt", "76059OjKNmJ", "2850033pGSwQa", "shift", "30864uvbBTJ", "3544330xZOBBc", "492874wpcAMQ", "8767jAOflV", "min", "5qVnOkE", "1256KPPhDR", "13340010LtSfuT", "6181ZZZpCT", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1c5554;
  };
  return __STRING_ARRAY__();
}
