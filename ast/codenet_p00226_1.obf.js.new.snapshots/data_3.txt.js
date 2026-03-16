function __STRING_ARRAY__() {
  var _0x4e20d9 = ["/dev/stdin", "12MmtOEJ", "1610360pwFhHM", "3504495BCPbGb", "440541mRthpC", "readFileSync", "9jhpbqW", "split", "6123100fUSclX", "7XOBOSK", "7370982PAiGag", "3923656wfRerA", "indexOf", "0 0", "utf8", "195193vSknWj", "length", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x4e20d9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("195193vSknWj") / 1 * (parseInt("12MmtOEJ") / 2) + parseInt("440541mRthpC") / 3 + -parseInt("3923656wfRerA") / 4 + parseInt("3504495BCPbGb") / 5 + -parseInt("7370982PAiGag") / 6 + -parseInt("7XOBOSK") / 7 * (-parseInt("1610360pwFhHM") / 8) + parseInt("9jhpbqW") / 9 * (parseInt("6123100fUSclX") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 623098);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(wQWUdm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 313;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wQWUdm, key);
}
for (var i = 0; i < Arr["length"]; i++) {
  if (Arr[i] == "0 0") {
    break;
  }
  var arr = Arr[i]["split"](" ");
  var x = arr[0].split("");
  var y = arr[1]["split"]("");
  var h = 0;
  var b = 0;
  for (var j = 0; j < 4; j++) {
    if (x[j] == y[j]) {
      h++;
    } else if (y["indexOf"](x[j]) != -1) {
      b++;
    }
  }
  console.log(h + " " + b);
}
