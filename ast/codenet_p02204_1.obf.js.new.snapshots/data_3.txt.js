(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("374967eVGOHR") / 1 + -parseInt("1240844jJHAEP") / 2 + -parseInt("3445341TZtJSW") / 3 + parseInt("145044FQLGuR") / 4 * (-parseInt("105LRDcyK") / 5) + parseInt("6792216EknFHf") / 6 + -parseInt("6916189TibrWq") / 7 * (-parseInt("8CQTLkq") / 8) + parseInt("9hHjFDM") / 9 * (parseInt("6813670YJTxie") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 646047);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var [m, n] = arr["shift"]().split(" ")["map"](Number);
function __DECODE_0__(QOMFYj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QOMFYj, key);
}
function __STRING_ARRAY__() {
  var _0x245f6e = ["145044FQLGuR", "trim", "9hHjFDM", "log", "105LRDcyK", "shift", "374967eVGOHR", "/dev/stdin", "3445341TZtJSW", "6916189TibrWq", "6813670YJTxie", "1240844jJHAEP", "split", "map", "utf8", "min", "readFileSync", "6792216EknFHf", "8CQTLkq"];
  __STRING_ARRAY__ = function () {
    return _0x245f6e;
  };
  return __STRING_ARRAY__();
}
var a = arr["shift"]()["split"](" ");
if (m == 2) {
  var cnt = [0, 0];
  for (var i = 0; i < n; i++) {
    if (a[i] - 1 == i % 2) {
      cnt[0]++;
    }
    if (a[i] - 1 == (i + 1) % 2) {
      cnt[1]++;
    }
  }
  console["log"](Math["min"](...cnt));
} else {
  var cnt = 0;
  for (var i = 1; i < n; i++) {
    if (a[i - 1] == a[i]) {
      cnt++;
      i++;
    }
  }
  console["log"](cnt);
}
