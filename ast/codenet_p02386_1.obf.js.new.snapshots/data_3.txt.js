(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("217591uAYNHf") / 1 + -parseInt("1446718cozaxZ") / 2 + parseInt("1340514aBxGpv") / 3 + parseInt("17096ueDDdi") / 4 * (parseInt("710NuHTrx") / 5) + -parseInt("556260Xehfrx") / 6 + parseInt("7tMFvQY") / 7 * (-parseInt("2212504ZmiwnJ") / 8) + parseInt("8883054CUmeXb") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 730529);
function __STRING_ARRAY__() {
  var _0x4ebc14 = ["Yes", "trim", "710NuHTrx", "toString", "readFileSync", "shift", "utf8", "1446718cozaxZ", "7tMFvQY", "map", "217591uAYNHf", "hasOwnProperty", "8883054CUmeXb", "556260Xehfrx", "1340514aBxGpv", "apply", "17096ueDDdi", "/dev/stdin", "2212504ZmiwnJ", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4ebc14;
  };
  return __STRING_ARRAY__();
}
function move(d1, d2, d3, d4, d5, d6) {
  var x = this["toString"]();
  if (x == "N") {
    return [d2, d6, d3, d4, d1, d5];
  }
  if (x == "E") {
    return [d4, d2, d1, d6, d5, d3];
  }
}
function roll(d1, d2, d3, d4, d5, d6) {
  return [d1, d3, d5, d2, d4, d6];
}
function rolls(arr) {
  for (var i = 0; i < 4; i++) {
    obj[arr.join(",")] = true;
    arr = roll.apply(null, arr);
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(wxVkMA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 234;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wxVkMA, key);
}
var n = Arr["shift"]() - 0;
var OBJ = {};
var result = "Yes";
for (var i = 0; i < n; i++) {
  var obj = {};
  var dice = Arr[i].split(" ")["map"](Number);
  for (var j = 0; j < 4; j++) {
    rolls(dice);
    dice = move["apply"]("N", dice);
  }
  dice = move.apply("E", dice);
  rolls(dice);
  dice = move["apply"]("E", dice);
  dice = move.apply("E", dice);
  rolls(dice);
  for (var k in obj) {
    if (OBJ["hasOwnProperty"](k)) {
      result = "No";
    } else {
      OBJ[k] = true;
    }
  }
  if (result == "No") {
    break;
  }
}
console["log"](result);
