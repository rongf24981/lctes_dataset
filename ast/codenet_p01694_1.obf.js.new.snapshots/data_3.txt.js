(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("218550vxQnOw") / 1 + -parseInt("1734940FTaHro") / 2 + parseInt("2173332cjWWmq") / 3 + parseInt("5444geyJsR") / 4 * (parseInt("2245dZGsnz") / 5) + parseInt("5396598iWthwM") / 6 + -parseInt("7NUatoE") / 7 * (parseInt("6140088mGrTrP") / 8) + -parseInt("1629lSItOs") / 9 * (parseInt("15700MlQvuJ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 534365);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(UJDCHn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 403;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UJDCHn, key);
}
function __STRING_ARRAY__() {
  var _0x7c5629 = ["1629lSItOs", "5444geyJsR", "readFileSync", "7NUatoE", "2173332cjWWmq", "5396598iWthwM", "15700MlQvuJ", "utf8", "1734940FTaHro", "2245dZGsnz", "218550vxQnOw", "6140088mGrTrP", "/dev/stdin", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x7c5629;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]().split("\n");
while (true) {
  var n = arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var ary = arr.shift().split(" ");
  var L = 0;
  var R = 0;
  var UD = 2;
  var cnt = 0;
  ary.forEach(function (v) {
    if (v == "lu") {
      L = 1;
    } else if (v == "ru") {
      R = 1;
    } else if (v == "ld") {
      L = 0;
    } else if (v == "rd") {
      R = 0;
    }
    if (UD == L + R) {
      cnt++;
      UD = UD == 2 ? 0 : 2;
    }
  });
  console.log(cnt);
}
