(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("353664IrITfE") / 1 + parseInt("58538YcehVi") / 2 + -parseInt("6BAJkup") / 3 * (-parseInt("446612aJvwOZ") / 4) + parseInt("2542505Ijncqs") / 5 * (parseInt("6GTRMSq") / 6) + parseInt("372477DzfriC") / 7 * (parseInt("24Ycejje") / 8) + parseInt("148779JcejRq") / 9 * (-parseInt("170DsQVQC") / 10) + parseInt("11WPXzzB") / 11 * (-parseInt("8572632kkGKDm") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 278960);
function initOfficialHouse(bMax, fMax, rMax) {
  var o = Array(bMax);
  for (var b = 0; b < bMax; b++) {
    o[b] = Array(fMax);
    for (var f = 0; f < fMax; f++) {
      o[b][f] = Array(rMax);
      for (var r = 0; r < rMax; r++) {
        o[b][f][r] = 0;
      }
    }
  }
  return o;
}
function toString(o) {
  return o.map(function (b) {
    return b.map(function (f) {
      return " " + f["join"](" ");
    })["join"]("\n");
  })["join"]("\n####################\n");
}
function __STRING_ARRAY__() {
  var _0x398af4 = ["split", "170DsQVQC", "11WPXzzB", "446612aJvwOZ", "utf8", "6GTRMSq", "8572632kkGKDm", "148779JcejRq", "join", "353664IrITfE", "log", "map", "24Ycejje", "372477DzfriC", "forEach", "6BAJkup", "\n####################\n", "trim", "/dev/stdin", "2542505Ijncqs", "shift", "58538YcehVi"];
  __STRING_ARRAY__ = function () {
    return _0x398af4;
  };
  return __STRING_ARRAY__();
}
const chunk = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = chunk["trim"]().split("\n");
lines["shift"]();
var o = initOfficialHouse(4, 3, 10);
lines["forEach"](function (line) {
  var bfrv = line["split"](" ")["map"](Number);
  var b = bfrv[0];
  var f = bfrv[1];
  var r = bfrv[2];
  var v = bfrv[3];
  o[b - 1][f - 1][r - 1] += v;
});
function __DECODE_0__(WzbBBv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 239;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WzbBBv, key);
}
console["log"](toString(o));
