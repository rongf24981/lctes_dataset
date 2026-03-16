(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("59531PrJOsr") / 1 * (-parseInt("30pOYOeG") / 2) + parseInt("1584963dibnsy") / 3 + parseInt("2074784XpUBeZ") / 4 + -parseInt("215hTeRMJ") / 5 * (parseInt("214572ZdNNAZ") / 6) + parseInt("133lBVYfb") / 7 * (parseInt("158920yFbMYA") / 8) + parseInt("9TjlVgy") / 9 * (-parseInt("10583230hGeKOo") / 10) + parseInt("12039786UnJpjy") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 815854);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["trim"]().split(/\n/g);
var n = +lines[0].split(" ")[0];
function __STRING_ARRAY__() {
  var _0x50c523 = ["158920yFbMYA", "split", "log", "readFileSync", "10583230hGeKOo", "214572ZdNNAZ", "trim", "12039786UnJpjy", "215hTeRMJ", "2074784XpUBeZ", "slice", "9TjlVgy", "59531PrJOsr", "/dev/stdin", "1584963dibnsy", "utf8", "30pOYOeG", "133lBVYfb"];
  __STRING_ARRAY__ = function () {
    return _0x50c523;
  };
  return __STRING_ARRAY__();
}
var m = +lines[0]["split"](" ")[1];
var A = lines["slice"](1, m);
function __DECODE_0__(psbqDV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(psbqDV, key);
}
var b = lines["slice"](m, m + m);
var ans;
for (var i = 0; i < n; i++) {
  ans = 0;
  for (var j = 0; j < m; j++) {
    ans += A[i]["split"](" ")[j] * b[j];
  }
  console["log"](ans);
}
