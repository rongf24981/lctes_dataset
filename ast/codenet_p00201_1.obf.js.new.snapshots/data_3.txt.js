function __DECODE_0__(eVPcJA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 463;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eVPcJA, key);
}
function __STRING_ARRAY__() {
  var _0x584d99 = ["6DmaQpK", "shift", "1429286ayxOsV", "482015CjlnJe", "readFileSync", "70habhRX", "18mFMSkO", "push", "4416305cboYPc", "log", "2696APCWDu", "345XUQMXq", "39142169vjjDOF", "/dev/stdin", "trim", "utf8", "5519750cslhGJ", "forEach", "split", "912536kMCNhq"];
  __STRING_ARRAY__ = function () {
    return _0x584d99;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("482015CjlnJe") / 1 + parseInt("1429286ayxOsV") / 2 + parseInt("345XUQMXq") / 3 * (-parseInt("2696APCWDu") / 4) + -parseInt("4416305cboYPc") / 5 * (parseInt("6DmaQpK") / 6) + -parseInt("70habhRX") / 7 * (parseInt("912536kMCNhq") / 8) + -parseInt("18mFMSkO") / 9 * (parseInt("5519750cslhGJ") / 10) + parseInt("39142169vjjDOF") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 585616);
function bomb(name) {
  var min = obj[name];
  M["forEach"](function (v) {
    if (name == v[0]) {
      var sum = 0;
      v[1]["forEach"](function (value) {
        sum += bomb(value);
      });
      min = Math.min(min, sum);
    }
  });
  return min;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var obj = {};
  for (var i = 0; i < n; i++) {
    var data = arr["shift"]()["split"](" ");
    obj[data[0]] = data[1] - 0;
  }
  var m = arr.shift() - 0;
  var M = [];
  for (var i = 0; i < m; i++) {
    var data = arr["shift"]()["split"](" ");
    var name = data.shift();
    data["shift"]();
    M["push"]([name, data]);
  }
  var item = arr["shift"]();
  console["log"](bomb(item));
}
