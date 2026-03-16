(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1fwJkPX") / 1 * (parseInt("1432684yMwxzG") / 2) + parseInt("3zLsaBh") / 3 * (-parseInt("924676kbwxaX") / 4) + -parseInt("182165hCOKlt") / 5 * (parseInt("42LdTchf") / 6) + parseInt("104650wXmYmR") / 7 + -parseInt("5615336gZEFHk") / 8 + -parseInt("1251nCJZEd") / 9 * (parseInt("54830oUzHau") / 10) + parseInt("18105131SOoLOb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 426959);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __DECODE_0__(vdDHiL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vdDHiL, key);
}
var q = arr["shift"]() - 0;
var str = "";
function __STRING_ARRAY__() {
  var _0x3cb9be = ["get", "1432684yMwxzG", "1251nCJZEd", "delete", "104650wXmYmR", "trim", "split", "/dev/stdin", "has", "set", "924676kbwxaX", "readFileSync", "utf8", "54830oUzHau", "3zLsaBh", "42LdTchf", "5615336gZEFHk", "18105131SOoLOb", "1fwJkPX", "log", "182165hCOKlt", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x3cb9be;
  };
  return __STRING_ARRAY__();
}
var map = new Map();
for (var i = 0; i < q; i++) {
  var [a, b, c] = arr[i].split(" ");
  if (a == "0") {
    map["set"](b, c);
  } else if (a == "1") {
    str += (map["has"](b) ? map["get"](b) : "0") + "\n";
  } else {
    map["delete"](b);
  }
}
console["log"](str["trim"]());
