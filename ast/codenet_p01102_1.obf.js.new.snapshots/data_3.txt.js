function __DECODE_0__(pEbLzl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 145;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pEbLzl, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("417719lOnEEU") / 1 * (-parseInt("2cVGLWU") / 2) + -parseInt("2360307bQRwCp") / 3 + -parseInt("4861576KmNVNB") / 4 + parseInt("1491235UolUYP") / 5 * (-parseInt("12WGJAti") / 6) + parseInt("1056594KFfICh") / 7 * (-parseInt("40QwtxUV") / 8) + parseInt("162wOmmdr") / 9 * (parseInt("179210LXvgbh") / 10) + parseInt("45117127sHsjWs") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 653049);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var a = arr["shift"]();
  if (a == ".") {
    break;
  }
  var b = arr.shift();
  var memo = [];
  var aa = a.replace(/".*?"/g, function (s) {
    memo.push(s);
    return "\"";
  });
  var cnt = 0;
  var bb = b.replace(/".*?"/g, function (s) {
    if (s != memo["shift"]()) {
      cnt++;
    }
    return "\"";
  });
  if (aa == bb && cnt == 0) {
    console["log"]("IDENTICAL");
  } else if (aa == bb && cnt == 1) {
    console.log("CLOSE");
  } else if (aa != bb || aa == bb && cnt > 1) {
    console["log"]("DIFFERENT");
  }
}
function __STRING_ARRAY__() {
  var _0x671555 = ["2cVGLWU", "162wOmmdr", "IDENTICAL", "12WGJAti", "DIFFERENT", "log", "split", "utf8", "/dev/stdin", "4861576KmNVNB", "179210LXvgbh", "readFileSync", "2360307bQRwCp", "shift", "1491235UolUYP", "trim", "1056594KFfICh", "417719lOnEEU", "40QwtxUV", "45117127sHsjWs"];
  __STRING_ARRAY__ = function () {
    return _0x671555;
  };
  return __STRING_ARRAY__();
}
