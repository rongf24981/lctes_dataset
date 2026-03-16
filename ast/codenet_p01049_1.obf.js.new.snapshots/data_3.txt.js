(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("567818mgFEII") / 1 + -parseInt("4308ImCnUV") / 2 * (parseInt("654QIFQJn") / 3) + parseInt("20028mOcWKy") / 4 * (parseInt("70sWEPWZ") / 5) + parseInt("402324RInfsY") / 6 + -parseInt("175umzNVR") / 7 * (parseInt("171288ajcaOO") / 8) + parseInt("132678xUBglM") / 9 * (-parseInt("190LXiBFZ") / 10) + parseInt("11fvzXQb") / 11 * (parseInt("24458808HXbDcV") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 322623);
function __DECODE_0__(njGhlS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(njGhlS, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x44ff94 = ["171288ajcaOO", "push", "4308ImCnUV", "trim", "175umzNVR", "11fvzXQb", "70sWEPWZ", "readFileSync", "20028mOcWKy", "shift", "map", "24458808HXbDcV", "split", "402324RInfsY", "654QIFQJn", "567818mgFEII", "/dev/stdin", "132678xUBglM", "190LXiBFZ"];
  __STRING_ARRAY__ = function () {
    return _0x44ff94;
  };
  return __STRING_ARRAY__();
}
var [a, d] = arr["shift"]()["split"](" ")["map"](Number);
var retu = [];
for (var i = 0; i < n; i++) {
  retu["push"](a + i * d);
}
var m = arr.shift() - 0;
for (var i = 0; i < m; i++) {
  var [x, y, z] = arr["shift"]()["split"](" ").map(Number);
  if (x == 0) {
    [retu[y - 1], retu[z - 1]] = [retu[z - 1], retu[y - 1]];
  } else {
    retu[y - 1] = retu[z - 1];
  }
}
var k = arr["shift"]() - 0;
console.log(retu[k - 1]);
