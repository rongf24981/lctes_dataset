function __DECODE_0__(dPgMIx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 359;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dPgMIx, key);
}
function __STRING_ARRAY__() {
  var _0x4d3295 = ["110BDvalK", "65952yWeOKG", "153616TMQWjE", "1GzJfJJ", "42cuCjyV", "90JwseRu", "readFileSync", "trim", "utf8", "join", "map", "split", "61494aWIuRh", "70eNpYdw", "shift", "4121623gPYUdi", "sort", "37070pgljDE", "34968RmOoCX", "13nMFiWr", "7944564ayGQkq"];
  __STRING_ARRAY__ = function () {
    return _0x4d3295;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1GzJfJJ") / 1 * (parseInt("61494aWIuRh") / 2) + parseInt("42cuCjyV") / 3 * (parseInt("34968RmOoCX") / 4) + parseInt("37070pgljDE") / 5 * (parseInt("90JwseRu") / 6) + -parseInt("70eNpYdw") / 7 * (-parseInt("153616TMQWjE") / 8) + parseInt("65952yWeOKG") / 9 * (parseInt("110BDvalK") / 10) + parseInt("4121623gPYUdi") / 11 + parseInt("7944564ayGQkq") / 12 * (-parseInt("13nMFiWr") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 188125);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var AL = Arr["shift"]();
for (var i = 0; i < AL; i++) {
  var arr = Arr[i].split("")["map"](Number);
  arr.sort(function (a, b) {
    return b - a;
  });
  var a = arr["join"]("");
  arr["sort"](function (a, b) {
    return a - b;
  });
  var b = arr.join("");
  console.log(parseInt(a) - parseInt(b));
}
