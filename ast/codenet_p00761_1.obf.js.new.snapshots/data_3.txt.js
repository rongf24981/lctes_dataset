function __DECODE_0__(fXgvcB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 304;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fXgvcB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("11WVaGmW") / 1 * (parseInt("273668GVoLSR") / 2) + -parseInt("3897747Guvzmb") / 3 + -parseInt("6459632sfiACv") / 4 + parseInt("2059760gkWbZf") / 5 + parseInt("6YqStlN") / 6 * (-parseInt("6494061mKLtJz") / 7) + parseInt("8824AwMsUT") / 8 * (parseInt("1197weXafv") / 9) + parseInt("2213930NYUrwj") / 10 * (parseInt("132nCfsif") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 878661);
function str1(x) {
  x = x + "";
  while (x["length"] != b) {
    x = "0" + x;
  }
  return x;
}
function __STRING_ARRAY__() {
  var _0xbe720a = ["utf8", "6YqStlN", "3897747Guvzmb", "join", "push", "1197weXafv", "length", "split", "2059760gkWbZf", "log", "8824AwMsUT", "6459632sfiACv", "6494061mKLtJz", "2213930NYUrwj", "sort", "indexOf", "reverse", "132nCfsif", "map", "11WVaGmW", "trim", "273668GVoLSR", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0xbe720a;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var ab = Arr.shift()["split"](" ")["map"](Number);
  if (ab[0] == 0 && ab[1] == 0) {
    break;
  }
  var str = ab[0] + "";
  var b = ab[1];
  var arr = [];
  str = str1(str);
  arr.push(str);
  var i = 0;
  while (true) {
    i++;
    var s = str["split"]("");
    s["sort"](function (a, b) {
      return b - a;
    });
    var A = parseInt(s.join(""), 10);
    var B = parseInt(s["reverse"]()["join"](""), 10);
    var C = A - B;
    var Cstr = str1(C);
    if (arr["indexOf"](Cstr) != -1) {
      break;
    }
    arr["push"](Cstr);
    str = Cstr;
  }
  console["log"](arr["indexOf"](Cstr) + " " + parseInt(Cstr, 10) + " " + (i - arr["indexOf"](Cstr)));
}
