(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("730554MKkbCH") / 1 + -parseInt("4110HRTtLu") / 2 * (-parseInt("390pSQHWa") / 3) + -parseInt("9292TcYbzV") / 4 * (parseInt("1510XucrMb") / 5) + parseInt("7530126OWMzSU") / 6 * (-parseInt("7FhKIhs") / 7) + parseInt("6477824JTeyKp") / 8 + -parseInt("4146111bkLmTp") / 9 * (-parseInt("10Rdrpup") / 10) + parseInt("42823gYGLAa") / 11 * (parseInt("6060TUWBQb") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 816401);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var q = arr["shift"]() - 0;
var str = "";
function __STRING_ARRAY__() {
  var _0x5995dc = ["/dev/stdin", "10Rdrpup", "trim", "utf8", "1510XucrMb", "shift", "6477824JTeyKp", "42823gYGLAa", "has", "4146111bkLmTp", "7FhKIhs", "730554MKkbCH", "readFileSync", "4110HRTtLu", "390pSQHWa", "size", "log", "add", "7530126OWMzSU", "9292TcYbzV", "6060TUWBQb", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5995dc;
  };
  return __STRING_ARRAY__();
}
var set = new Set();
function __DECODE_0__(sRXwGu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sRXwGu, key);
}
for (var i = 0; i < q; i++) {
  var [a, b] = arr[i]["split"](" ");
  if (a == "0") {
    set["add"](b);
    str += set["size"] + "\n";
  } else {
    str += (set["has"](b) ? 1 : 0) + "\n";
  }
}
console["log"](str["trim"]());
