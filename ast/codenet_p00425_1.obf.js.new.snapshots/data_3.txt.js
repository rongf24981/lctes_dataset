function __DECODE_0__(sSimUf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 136;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sSimUf, key);
}
function __STRING_ARRAY__() {
  var _0x1151d0 = ["trim", "utf8", "split", "51738SmQiNi", "length", "3839301ZEfhnW", "1193142feTmBH", "readFileSync", "charAt", "8AQdaiV", "7581784sbThHA", "283594eSXfok", "4264584wGhAwi", "465GhzXSb", "766305WaXxeD", "log"];
  __STRING_ARRAY__ = function () {
    return _0x1151d0;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("283594eSXfok") / 1 + -parseInt("1193142feTmBH") / 2 + -parseInt("3839301ZEfhnW") / 3 + parseInt("4264584wGhAwi") / 4 + parseInt("465GhzXSb") / 5 * (parseInt("51738SmQiNi") / 6) + parseInt("7581784sbThHA") / 7 + parseInt("8AQdaiV") / 8 * (-parseInt("766305WaXxeD") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 706120);
function move(x, arr) {
  var d1 = arr[0];
  var d2 = arr[1];
  var d3 = arr[2];
  var d4 = arr[3];
  var d5 = arr[4];
  var d6 = arr[5];
  var after = [];
  if (x == "N") {
    after = [d2, d6, d3, d4, d1, d5];
  }
  if (x == "S") {
    after = [d5, d1, d3, d4, d6, d2];
  }
  if (x == "E") {
    after = [d4, d2, d1, d6, d5, d3];
  }
  if (x == "W") {
    after = [d3, d2, d6, d1, d5, d4];
  }
  if (x == "R") {
    after = [d1, d3, d5, d2, d4, d6];
  }
  if (x == "L") {
    after = [d1, d4, d2, d5, d3, d6];
  }
  return after;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var dice;
var sum;
for (var i = 0; i < Arr["length"]; i++) {
  var v = Arr[i]["charAt"](0);
  if (v.match(/[NSEWRL]/)) {
    dice = move(v, dice);
    sum += dice[0];
  } else {
    if (i != 0) {
      console["log"](sum);
    }
    dice = [1, 2, 3, 4, 5, 6];
    sum = 1;
  }
  if (Arr[i] == "0") {
    break;
  }
}
