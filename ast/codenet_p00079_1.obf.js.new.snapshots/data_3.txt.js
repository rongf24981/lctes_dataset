(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("260663aonjHp") / 1 + -parseInt("343294vEIhOJ") / 2 * (parseInt("6uFCBWU") / 3) + parseInt("23884tyTIWN") / 4 * (-parseInt("255tJcptV") / 5) + parseInt("262326ihAHIS") / 6 * (parseInt("7tbkHQY") / 7) + -parseInt("173064ZQYEJX") / 8 * (-parseInt("63aBcVlQ") / 9) + -parseInt("10OtBpgw") / 10 * (parseInt("2407559ITigYp") / 11) + parseInt("14599308HchYFG") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284414);
function __STRING_ARRAY__() {
  var _0x33eb56 = ["pow", "262326ihAHIS", "10OtBpgw", "toFixed", "map", "6uFCBWU", "split", "255tJcptV", "343294vEIhOJ", "14599308HchYFG", "173064ZQYEJX", "23884tyTIWN", "/dev/stdin", "sqrt", "length", "7tbkHQY", "2407559ITigYp", "260663aonjHp", "63aBcVlQ", "utf8", "shift", "log"];
  __STRING_ARRAY__ = function () {
    return _0x33eb56;
  };
  return __STRING_ARRAY__();
}
function heron(a, b, c) {
  var s = (a + b + c) / 2;
  var S = Math["sqrt"](s * (s - a) * (s - b) * (s - c));
  return S;
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
var xy1 = Arr["shift"]()["split"](",")["map"](Number);
var xy2 = Arr.shift()["split"](",").map(Number);
var x1 = xy1[0];
function __DECODE_0__(yMGwVy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 392;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yMGwVy, key);
}
var y1 = xy1[1];
var x2 = xy2[0];
var y2 = xy2[1];
var sum = 0;
for (var I = 0; I < Arr["length"]; I++) {
  var xy3 = Arr[I]["split"](",")["map"](Number);
  var x3 = xy3[0];
  var y3 = xy3[1];
  var d12 = Math["sqrt"](Math["pow"](x1 - x2, 2) + Math["pow"](y1 - y2, 2));
  var d13 = Math["sqrt"](Math["pow"](x1 - x3, 2) + Math["pow"](y1 - y3, 2));
  var d23 = Math["sqrt"](Math["pow"](x2 - x3, 2) + Math["pow"](y2 - y3, 2));
  sum += heron(d12, d13, d23);
  x2 = xy3[0];
  y2 = xy3[1];
}
console["log"](sum["toFixed"](6));
