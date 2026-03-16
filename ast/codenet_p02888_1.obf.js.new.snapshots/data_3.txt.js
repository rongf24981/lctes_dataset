function __DECODE_0__(eOWmrA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 332;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eOWmrA, key);
}
function __STRING_ARRAY__() {
  var _0x56db34 = ["12CCvrxU", "utf8", "map", "2480471aSTejL", "reverse", "2815608pXeCpv", "floor", "split", "log", "1369616qmOEoW", "/dev/stdin", "readFileSync", "length", "619256SNPooC", "1482620YeKxgm", "90vrgjYx", "1026610gqTsmZ", "slice", "977136tNTKXH", "3AiiRjD", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x56db34;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("977136tNTKXH") / 1 + -parseInt("1369616qmOEoW") / 2 * (-parseInt("3AiiRjD") / 3) + -parseInt("12CCvrxU") / 4 * (parseInt("1482620YeKxgm") / 5) + parseInt("2815608pXeCpv") / 6 + parseInt("2480471aSTejL") / 7 + -parseInt("619256SNPooC") / 8 * (parseInt("90vrgjYx") / 9) + -parseInt("1026610gqTsmZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 719262);
function Main(input) {
  input = input["split"]("\n");
  var N = input[0];
  var L = input[1].split(" ")["map"](Number);
  var sum = 0;
  L["sort"](function (a, b) {
    return b - a;
  });
  for (var i = 0; i < N - 1; i++) {
    for (var j = i + 1; j < N; j++) {
      var tag = L[i] - L[j];
      var arr = L["slice"](0, L["length"]);
      arr.splice(0, j + 1);
      arr["reverse"]();
      sum += arr["length"] - caninsert(arr, tag);
    }
  }
  console["log"](sum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function caninsert(array, value) {
  value += 0.1;
  var lower = 0;
  var upper = array.length;
  while (lower < upper) {
    var mid = Math["floor"](lower + (upper - lower) / 2);
    if (array[mid] <= value) {
      lower = mid + 1;
    } else {
      upper = mid;
    }
  }
  return lower;
}
;
