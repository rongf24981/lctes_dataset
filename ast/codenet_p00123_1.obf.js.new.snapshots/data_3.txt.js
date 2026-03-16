function __STRING_ARRAY__() {
  var _0x4afbaa = ["35632490cFpHRy", "6720504KvnXPV", "split", "utf8", "/dev/stdin", "5XYXtsx", "map", "8763314JhHOce", "forEach", "6PEEygO", "1141004ZKEBlN", "AAA", "3187941GcalbX", "1234270IPHQVW", "18WBqcbO", "22kXqSKk", "6870708fTGDgt", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x4afbaa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1141004ZKEBlN") / 1 + parseInt("1234270IPHQVW") / 2 + -parseInt("3187941GcalbX") / 3 + -parseInt("6870708fTGDgt") / 4 * (parseInt("5XYXtsx") / 5) + parseInt("6PEEygO") / 6 * (-parseInt("8763314JhHOce") / 7) + parseInt("6720504KvnXPV") / 8 * (-parseInt("18WBqcbO") / 9) + parseInt("35632490cFpHRy") / 10 * (parseInt("22kXqSKk") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 890277);
function __DECODE_0__(XNHAmQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 170;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XNHAmQ, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
Arr["forEach"](function (v) {
  var arr = v.split(" ")["map"](Number);
  var a = arr[0];
  var b = arr[1];
  var ans;
  if (a < 35.5 && b < 71) {
    ans = "AAA";
  } else if (a < 37.5 && b < 77) {
    ans = "AA";
  } else if (a < 40 && b < 83) {
    ans = "A";
  } else if (a < 43 && b < 89) {
    ans = "B";
  } else if (a < 50 && b < 105) {
    ans = "C";
  } else if (a < 55 && b < 116) {
    ans = "D";
  } else if (a < 70 && b < 148) {
    ans = "E";
  } else {
    ans = "NA";
  }
  console.log(ans);
});
