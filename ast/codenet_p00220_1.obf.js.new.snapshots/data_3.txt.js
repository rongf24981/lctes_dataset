function __STRING_ARRAY__() {
  var _0x34273e = ["1227GfBjgr", "7924rumgCN", "21ObBjBE", "pow", "1106566CKVCiR", "4877580uVKmzC", "push", "3351895IPxYJr", "2057368CqCxXq", "split", "utf8", "replace", "/dev/stdin", "9329436ozeaYr", "length", "shift", "591202FEhcGH", "6dybDqU", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x34273e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("591202FEhcGH") / 1 + parseInt("1106566CKVCiR") / 2 + parseInt("1227GfBjgr") / 3 * (parseInt("7924rumgCN") / 4) + -parseInt("3351895IPxYJr") / 5 * (parseInt("6dybDqU") / 6) + -parseInt("21ObBjBE") / 7 * (-parseInt("2057368CqCxXq") / 8) + -parseInt("9329436ozeaYr") / 9 + -parseInt("4877580uVKmzC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 531486);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "")["split"]("\n");
var nums = [];
for (var i = 7; i >= -4; i--) {
  nums["push"](Math["pow"](2, i));
}
function __DECODE_0__(bIRZYh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 396;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bIRZYh, key);
}
while (true) {
  var x = Arr["shift"]() - 0;
  if (x == -1) {
    break;
  }
  var str = "";
  for (var i = 0; i < nums["length"]; i++) {
    if (x >= nums[i]) {
      x -= nums[i];
      str += "1";
    } else {
      str += "0";
    }
    if (i == 7) {
      str += ".";
    }
  }
  if (x !== 0) {
    str = "NA";
  }
  console.log(str);
}
