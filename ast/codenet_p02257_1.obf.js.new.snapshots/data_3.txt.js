function __STRING_ARRAY__() {
  var _0x4f961f = ["split", "map", "7424RmMyqb", "3157434JtAHmw", "push", "length", "shift", "16jxolnU", "indexOf", "sqrt", "trim", "152XsVqkw", "279iWZOBY", "1063725vXMuWu", "/dev/stdin", "sort", "186417pDLbKT", "10436xAuTwA", "utf8", "300006qwJwnL", "6715990dHZzjM"];
  __STRING_ARRAY__ = function () {
    return _0x4f961f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("7424RmMyqb") / 1 * (-parseInt("16jxolnU") / 2) + parseInt("279iWZOBY") / 3 * (-parseInt("10436xAuTwA") / 4) + -parseInt("1063725vXMuWu") / 5 + -parseInt("300006qwJwnL") / 6 + -parseInt("186417pDLbKT") / 7 * (-parseInt("152XsVqkw") / 8) + -parseInt("3157434JtAHmw") / 9 + parseInt("6715990dHZzjM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 261987);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
function __DECODE_0__(EQsEYd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EQsEYd, key);
}
Arr["shift"]();
Arr["sort"](function (a, b) {
  return a - b;
});
var max = Arr[Arr["length"] - 1];
var arr = [2];
for (var i = 3; i <= max; i = i + 2) {
  var a = true;
  var sqrt = ~~Math["sqrt"](i) + 1;
  for (var j = 0; j < arr["length"]; j++) {
    if (arr[j] > sqrt) {
      break;
    }
    if (i % arr[j] == 0) {
      a = false;
      break;
    }
  }
  if (a) {
    arr["push"](i);
  }
}
var num = 0;
var f = 0;
for (var i = 0; i < Arr["length"]; i++) {
  if (Arr[i] != 2 && Arr[i] % 2 == 0) {
    continue;
  }
  var index = arr["indexOf"](Arr[i], f);
  if (index != -1) {
    f = index;
    num++;
  }
}
console.log(num);
