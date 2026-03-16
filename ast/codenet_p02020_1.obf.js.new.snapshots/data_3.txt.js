(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("62754KKAsXA") / 1 + -parseInt("70eJiQqV") / 2 * (parseInt("33357KnwvOI") / 3) + -parseInt("1871780NOnRUu") / 4 + -parseInt("181290vxsHjI") / 5 * (parseInt("12FzZQHh") / 6) + -parseInt("14dhCDfD") / 7 * (parseInt("1973976XBoysQ") / 8) + parseInt("474039ytQVGA") / 9 * (parseInt("60CFhprG") / 10) + -parseInt("5287843zEkkqt") / 11 * (-parseInt("36YVBbAz") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 272291);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(hXLwaT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 470;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hXLwaT, key);
}
var [n, arr] = input["trim"]()["split"]("\n");
arr = arr.split(" ")["map"](Number);
arr["sort"](function (a, b) {
  return a - b;
});
var sum = arr["reduce"](function (a, b) {
  return a + b;
});
function __STRING_ARRAY__() {
  var _0x219fdc = ["log", "1871780NOnRUu", "readFileSync", "1973976XBoysQ", "70eJiQqV", "map", "5287843zEkkqt", "474039ytQVGA", "length", "trim", "utf8", "181290vxsHjI", "36YVBbAz", "12FzZQHh", "62754KKAsXA", "14dhCDfD", "sort", "/dev/stdin", "60CFhprG", "reduce", "split", "33357KnwvOI"];
  __STRING_ARRAY__ = function () {
    return _0x219fdc;
  };
  return __STRING_ARRAY__();
}
if (sum % 2 == 0) {
  console["log"](sum / 2);
} else {
  for (var i = 0; i < arr["length"]; i++) {
    if (arr[i] % 2 == 1) {
      console["log"]((sum - arr[i]) / 2);
      break;
    }
  }
}
