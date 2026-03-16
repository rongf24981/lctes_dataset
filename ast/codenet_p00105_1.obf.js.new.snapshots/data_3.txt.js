(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("145625xDQJRg") / 1 + parseInt("559094TMUfiE") / 2 + -parseInt("27921BSflel") / 3 * (-parseInt("28LkpHLv") / 4) + -parseInt("733775cGhEOO") / 5 + -parseInt("251424Nxfyzr") / 6 + -parseInt("6524YjuWXV") / 7 * (-parseInt("2608JNnKmx") / 8) + parseInt("4039047OjchMm") / 9 * (-parseInt("10TIvnXm") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 156711);
var d = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x589e09 = ["trim", "log", "join", "27921BSflel", "push", "readFileSync", "utf8", "2608JNnKmx", "4039047OjchMm", "145625xDQJRg", "10TIvnXm", "split", "251424Nxfyzr", "28LkpHLv", "733775cGhEOO", "6524YjuWXV", "559094TMUfiE"];
  __STRING_ARRAY__ = function () {
    return _0x589e09;
  };
  return __STRING_ARRAY__();
}
var info = line = "";
var map = [];
while (line = d.shift()) {
  info = line["split"](" ");
  map["push"]([info[0], +info[1]]);
}
map.sort(function (a, b) {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }
  if (a[1] > b[1]) {
    return 1;
  }
  return 0;
});
var word = "";
function __DECODE_0__(ZrStPp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 289;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZrStPp, key);
}
var pages = [];
map.forEach(function (info, i) {
  if (word !== info[0]) {
    if (i !== 0) {
      console["log"](pages["join"](" "));
      pages = [];
    }
    console["log"](info[0]);
  }
  pages["push"](info[1]);
  word = info[0];
});
console["log"](pages["join"](" "));
