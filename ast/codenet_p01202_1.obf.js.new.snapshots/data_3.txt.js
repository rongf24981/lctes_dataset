(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("17JPDcnq") / 1 * (-parseInt("11164NutsyE") / 2) + -parseInt("36843RsKbVO") / 3 + -parseInt("9224UqvyxP") / 4 * (-parseInt("330EIrzCu") / 5) + parseInt("1038ZnCAmL") / 6 * (-parseInt("7469tGkEPI") / 7) + parseInt("1254272PlOJlh") / 8 + parseInt("1381302rUDrTB") / 9 * (-parseInt("10LZqSoW") / 10) + parseInt("2731135yxJHIP") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 112021);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x48cc48 = ["/dev/stdin", "utf8", "330EIrzCu", "Yes", "shift", "10LZqSoW", "11164NutsyE", "17JPDcnq", "1254272PlOJlh", "1038ZnCAmL", "7469tGkEPI", "2731135yxJHIP", "trim", "9224UqvyxP", "36843RsKbVO", "1381302rUDrTB", "split", "log"];
  __STRING_ARRAY__ = function () {
    return _0x48cc48;
  };
  return __STRING_ARRAY__();
}
var n = arr.shift() - 0;
function __DECODE_0__(KAjCjZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 254;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KAjCjZ, key);
}
while (n--) {
  var ary = arr["shift"]()["split"]("");
  var ans = "Yes";
  var s = "";
  ary.forEach(function (v) {
    if (v == s) {
      ans = "No";
    }
    s = v;
  });
  console["log"](ans);
}
