function __STRING_ARRAY__() {
  var _0x49f1c3 = ["965373azpIoF", "2072214fALeSz", "split", "stdin", "16529403YkLvyN", "push", "164222JDNbJr", "stdout", "24jlglEI", "426485mSXtlp", "20lIXlNh", "createInterface", "4EsrCYc", "line", "4041192aDKnzt", "4wcIfIo", "6606992QjCrcd", "log"];
  __STRING_ARRAY__ = function () {
    return _0x49f1c3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("164222JDNbJr") / 1 * (parseInt("4EsrCYc") / 2) + -parseInt("965373azpIoF") / 3 * (-parseInt("4wcIfIo") / 4) + -parseInt("426485mSXtlp") / 5 * (-parseInt("24jlglEI") / 6) + -parseInt("6606992QjCrcd") / 7 + -parseInt("4041192aDKnzt") / 8 + parseInt("2072214fALeSz") / 9 * (-parseInt("20lIXlNh") / 10) + parseInt("16529403YkLvyN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 584599);
function main(tmp) {
  var i = 0;
  while (tmp[i] != 0 && tmp[i + 1] != 0) {
    if (tmp[i] < tmp[i + 1]) {
      console["log"](tmp[i] + " " + tmp[i + 1]);
    } else {
      console["log"](tmp[i + 1] + " " + tmp[i]);
    }
    i = i + 2;
  }
}
var lines = [];
function __DECODE_0__(ErqeOb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 439;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ErqeOb, key);
}
var b = [];
var reader = require("readline")["createInterface"]({
  input: process.stdin,
  output: process["stdout"]
});
reader.on("line", function (line) {
  var a = line["split"](" ");
  var c = parseInt(a[0], 10);
  var d = parseInt(a[1], 10);
  b["push"](c);
  b["push"](d);
  if (c == 0 && d == 0) {
    main(b);
  }
});
process["stdin"].on("end", function () {});
