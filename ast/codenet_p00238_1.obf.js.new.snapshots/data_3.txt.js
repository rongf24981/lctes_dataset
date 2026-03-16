function __STRING_ARRAY__() {
  var _0x4300e9 = ["trim", "utf8", "shift", "21gzCkyz", "1627890eJGaxI", "20bexFXe", "split", "12565539NKVRAt", "readFileSync", "519lMFGcd", "map", "587800Laihjs", "3063852UPNWzh", "10732EBQLbv", "833471ofWUvl", "3214845iZahuK"];
  __STRING_ARRAY__ = function () {
    return _0x4300e9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RzMoMv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 132;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RzMoMv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("833471ofWUvl") / 1 + -parseInt("1627890eJGaxI") / 2 + parseInt("519lMFGcd") / 3 * (-parseInt("10732EBQLbv") / 4) + parseInt("3214845iZahuK") / 5 + -parseInt("3063852UPNWzh") / 6 + -parseInt("21gzCkyz") / 7 * (parseInt("587800Laihjs") / 8) + -parseInt("12565539NKVRAt") / 9 * (-parseInt("20bexFXe") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 592669);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var t = Arr.shift() - 0;
  if (t == 0) {
    break;
  }
  var n = Arr["shift"]() - 0;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    var arr = Arr.shift().split(" ")["map"](Number);
    sum += arr[1] - arr[0];
  }
  console.log(t <= sum ? "OK" : t - sum);
}
