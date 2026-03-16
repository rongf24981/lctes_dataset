(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("390928KMqexd") / 1 * (-parseInt("2uSbFfd") / 2) + -parseInt("197865oNkpSa") / 3 * (parseInt("28rGmcAM") / 4) + -parseInt("152160ouWElk") / 5 + -parseInt("1351170VwqhjF") / 6 + -parseInt("549780qnEddo") / 7 + parseInt("2519480pEuBlk") / 8 + parseInt("3353247XZqvYp") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 282594);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x485622 = ["readFileSync", "split", "/dev/stdin", "197865oNkpSa", "slice", "log", "filter", "utf8", "length", "indexOf", "2uSbFfd", "1351170VwqhjF", "28rGmcAM", "3353247XZqvYp", "map", "forEach", "shift", "2519480pEuBlk", "includes", "390928KMqexd", "152160ouWElk", "push", "549780qnEddo"];
  __STRING_ARRAY__ = function () {
    return _0x485622;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kTHuuS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 470;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kTHuuS, key);
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var ary = arr["slice"](0, n);
  ary = ary["map"](v => v["split"](" ")["map"](Number)["slice"](1));
  var flag = true;
  var h = [];
  for (var i = 0; i < n; i++) {
    h["push"]([i]);
  }
  for (var i = 1; i <= 30; i++) {
    var a = [];
    ary["forEach"]((v, j) => {
      if (v["includes"](i)) {
        a.push(j);
      }
    });
    var b = [];
    a.forEach(v => b["push"](...h[v]));
    b = b["filter"]((x, i, self) => self["indexOf"](x) == i);
    if (b["length"] == n) {
      flag = false;
      console["log"](i);
      break;
    }
    a["forEach"](v => h[v] = b);
  }
  if (flag) {
    console["log"](-1);
  }
  arr = arr["slice"](n);
}
