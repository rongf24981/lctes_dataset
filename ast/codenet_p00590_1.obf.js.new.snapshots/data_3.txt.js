function __DECODE_0__(apgZTZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 275;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(apgZTZ, key);
}
function __STRING_ARRAY__() {
  var _0x112d52 = ["1312011vRHLQg", "sqrt", "5548472CNgous", "214482rTdqBy", "/dev/stdin", "22vbjEvx", "map", "readFileSync", "9onKNzW", "1039390xTcuSB", "trim", "31025gwKCdz", "4OQDBvm", "length", "utf8", "4869004mlJYsb", "2885380tHLkos", "push", "floor", "split"];
  __STRING_ARRAY__ = function () {
    return _0x112d52;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("31025gwKCdz") / 1 * (-parseInt("22vbjEvx") / 2) + -parseInt("1312011vRHLQg") / 3 + -parseInt("4OQDBvm") / 4 * (-parseInt("2885380tHLkos") / 5) + -parseInt("214482rTdqBy") / 6 + -parseInt("4869004mlJYsb") / 7 + parseInt("5548472CNgous") / 8 + parseInt("9onKNzW") / 9 * (parseInt("1039390xTcuSB") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547193);
function prime(max) {
  var arr = [];
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0] = false;
  arr[1] = false;
  var sqrt = Math["floor"](Math["sqrt"](max));
  for (var i = 2; i <= sqrt; i++) {
    if (arr[i] == false) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
  var result = {};
  for (var i = 0; i <= max; i++) {
    if (arr[i] !== false) {
      result[arr[i]] = true;
    }
  }
  return result;
}
var p = prime(10000);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  var a = Arr[i];
  var A = [];
  var B = [];
  for (var j = 1; j <= a; j++) {
    A.push(j);
  }
  for (var j = a; j >= 1; j--) {
    B["push"](j);
  }
  var pair = 0;
  for (var j = 0; j < a; j++) {
    if (p.hasOwnProperty(A[j]) && p.hasOwnProperty(B[j])) {
      pair++;
    }
  }
  console.log(pair);
}
