(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("630973uHcrNO") / 1 + parseInt("405166pzJFLh") / 2 + -parseInt("1785921NexKpE") / 3 + parseInt("1291868pyZMGc") / 4 * (-parseInt("5MCbHWJ") / 5) + parseInt("1187976HMVWSl") / 6 * (-parseInt("14qigYfr") / 7) + parseInt("2375920WTbElq") / 8 + parseInt("4496634mnMueL") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 315906);
function heron(a, b, c) {
  var s = (a + b + c) / 2;
  var S = Math["sqrt"](s * (s - a) * (s - b) * (s - c));
  return S;
}
function __STRING_ARRAY__() {
  var _0x4b08cf = ["trim", "4496634mnMueL", "readFileSync", "utf8", "405166pzJFLh", "sqrt", "630973uHcrNO", "5MCbHWJ", "split", "toFixed", "14qigYfr", "1187976HMVWSl", "map", "1291868pyZMGc", "2375920WTbElq", "1785921NexKpE"];
  __STRING_ARRAY__ = function () {
    return _0x4b08cf;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(NjUvOl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 336;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NjUvOl, key);
}
var Arr = input["trim"]()["split"]("\n");
for (var i = 0; i < Arr.length; i++) {
  var ALX = Arr[i]["split"](" ")["map"](Number);
  var A = ALX[0];
  var L = ALX[1];
  var X = ALX[2];
  var sum = 0;
  sum += heron(A, L, L);
  sum += heron(L, (L + X) / 2, (L + X) / 2) * 2;
  console.log(sum["toFixed"](10));
}
