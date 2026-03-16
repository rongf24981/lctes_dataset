(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("17090fJaCSO") / 1 * (-parseInt("24EUcyKj") / 2) + parseInt("1402302ZIvjGf") / 3 + parseInt("1371704oxaubL") / 4 + parseInt("2233430UxIKBj") / 5 + parseInt("721734qKcMYP") / 6 + parseInt("56ZMrGjq") / 7 * (parseInt("385176jthKDk") / 8) + -parseInt("9SLzDFY") / 9 * (parseInt("17301690AuDlyZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 237422);
function __DECODE_0__(WRhbXM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WRhbXM, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [n, arr] = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x497085 = ["1402302ZIvjGf", "56ZMrGjq", "9SLzDFY", "trim", "split", "17090fJaCSO", "385176jthKDk", "utf8", "721734qKcMYP", "24EUcyKj", "every", "2233430UxIKBj", "1371704oxaubL", "17301690AuDlyZ"];
  __STRING_ARRAY__ = function () {
    return _0x497085;
  };
  return __STRING_ARRAY__();
}
arr = arr["split"](" ").map(Number);
for (var i = 1; i <= 100; i++) {
  var sum = 0;
  var flag = arr["every"](v => {
    sum = sum + v - i;
    return sum >= 0;
  });
  if (!flag) {
    break;
  }
}
console.log(i - 1);
