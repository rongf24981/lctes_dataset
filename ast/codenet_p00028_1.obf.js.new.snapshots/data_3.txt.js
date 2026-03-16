(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3710jGwmAP") / 1 * (parseInt("262xGepwB") / 2) + -parseInt("2442qzdoLF") / 3 * (-parseInt("688OzRFtv") / 4) + -parseInt("3839870OawiVS") / 5 + -parseInt("864006SGiFUY") / 6 + -parseInt("63wcGnTl") / 7 * (-parseInt("405368xsmgXH") / 8) + parseInt("1932435TkjIYr") / 9 + -parseInt("1930yqYPjb") / 10 * (-parseInt("8965TBeBDI") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 542092);
function __DECODE_0__(nwuYeC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 296;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nwuYeC, key);
}
a = [];
b = 100;
while (b--) {
  c = a[b] = 0;
}
function __STRING_ARRAY__() {
  var _0x44137a = ["63wcGnTl", "some", "864006SGiFUY", "3710jGwmAP", "/dev/stdin", "3839870OawiVS", "utf8", "405368xsmgXH", "1930yqYPjb", "split", "log", "8965TBeBDI", "688OzRFtv", "262xGepwB", "2442qzdoLF", "1932435TkjIYr"];
  __STRING_ARRAY__ = function () {
    return _0x44137a;
  };
  return __STRING_ARRAY__();
}
require("fs").readFileSync("/dev/stdin", "utf8")["split"]("\n").some(function (i) {
  if (+i) {
    a[+i]++;
    c = a[+i] > c ? a[+i] : c;
  }
});
a["some"](function (i, j) {
  if (i == c) {
    console["log"](j);
  }
});
