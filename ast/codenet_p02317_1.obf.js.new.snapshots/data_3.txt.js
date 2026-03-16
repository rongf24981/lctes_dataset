(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3yWeBkn") / 1 * (-parseInt("300146jhaRkd") / 2) + -parseInt("2090382PyQGJD") / 3 + -parseInt("1136908NuOSlg") / 4 + parseInt("5SmuwXY") / 5 * (parseInt("2994714uFTzIe") / 6) + parseInt("7lhPprb") / 7 * (-parseInt("660952DcPyXL") / 8) + -parseInt("4589721RpNyBc") / 9 + parseInt("10431830bQVBPo") / 10 * (parseInt("11WMoLfn") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 418912);
function main() {
  var input = getInput();
  var ls = input.split("\n");
  var n = parseInt(ls[0]);
  var nums = ls["slice"](1, n + 1).map(function (s) {
    return parseInt(s);
  });
  console["log"](lis(nums));
}
function __STRING_ARRAY__() {
  var _0x1ba6d2 = ["300146jhaRkd", "getElementById", "2994714uFTzIe", "2090382PyQGJD", "input", "10431830bQVBPo", "slice", "4589721RpNyBc", "toString", "7lhPprb", "660952DcPyXL", "length", "log", "5SmuwXY", "undefined", "3yWeBkn", "1136908NuOSlg", "11WMoLfn"];
  __STRING_ARRAY__ = function () {
    return _0x1ba6d2;
  };
  return __STRING_ARRAY__();
}
function lis(xs) {
  var table = [xs[0]];
  for (var i = 1; i < xs["length"]; i++) {
    var x = xs[i];
    table[search(table, x) + 1] = x;
  }
  return table["length"];
}
function search(table, x) {
  var l = 0;
  var h = table.length;
  if (table.length == 0 || x <= table[0]) {
    return -1;
  }
  while (l + 1 < h) {
    var pivot = (l + h + 1) / 2;
    if (table[pivot] < x) {
      l = pivot;
    } else {
      h = pivot;
    }
  }
  return l;
}
function __DECODE_0__(SFbTfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SFbTfK, key);
}
nodeJS = typeof require != "undefined";
function getInput() {
  if (!nodeJS) {
    return document["getElementById"]("input").value;
  }
  return require("fs").readFileSync("/dev/stdin")["toString"]();
}
if (nodeJS) {
  main();
}
