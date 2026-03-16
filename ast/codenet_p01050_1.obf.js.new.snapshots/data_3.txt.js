function __DECODE_0__(oyIRcu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 452;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oyIRcu, key);
}
function __STRING_ARRAY__() {
  var _0x5f1843 = ["log", "0123456789AabcdefghijklmnopqrstuvwxyzA", "8wXCvfV", "test", "10230633HyfEsJ", "115xguShv", "7705033ckiMyV", "split", "utf8", "replace", "/dev/stdin", "808447EdeZnv", "20galKyq", "674460RBkwlO", "11EGjYyf", "2IxNzhS", "trim", "readFileSync", "21698700MbfroZ", "933020rpGbsH", "241158pNqmXy"];
  __STRING_ARRAY__ = function () {
    return _0x5f1843;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("808447EdeZnv") / 1 * (-parseInt("2IxNzhS") / 2) + parseInt("674460RBkwlO") / 3 * (-parseInt("20galKyq") / 4) + -parseInt("115xguShv") / 5 * (-parseInt("241158pNqmXy") / 6) + -parseInt("7705033ckiMyV") / 7 * (parseInt("8wXCvfV") / 8) + parseInt("10230633HyfEsJ") / 9 + parseInt("933020rpGbsH") / 10 * (-parseInt("11EGjYyf") / 11) + parseInt("21698700MbfroZ") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 742833);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var s = input["trim"]();
var len = s.length;
var abc = "0123456789AabcdefghijklmnopqrstuvwxyzA"["split"]("");
var sum = 0;
while (true) {
  if (s == "") {
    break;
  }
  var cnt = 0;
  var flag = false;
  abc.forEach(v => {
    var re = new RegExp(v);
    if (re["test"](s)) {
      if (flag) {
        cnt++;
      }
      flag = true;
      s = s["replace"](re, "");
    } else {
      if (cnt >= 3) {
        sum += cnt - 2;
      }
      cnt = 0;
      flag = false;
    }
  });
}
console["log"](len - sum);
