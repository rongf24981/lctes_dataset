function __DECODE_0__(LxwfWm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 143;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LxwfWm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("19JAfwut") / 1 * (parseInt("28590EstZPJ") / 2) + parseInt("249jsJicj") / 3 * (parseInt("12468XXidtK") / 4) + parseInt("10WniCMj") / 5 * (-parseInt("392538pItBys") / 6) + parseInt("7xsUyAx") / 7 * (parseInt("2437784NLulcH") / 8) + -parseInt("1014057MdKGKN") / 9 * (parseInt("10yLKuIe") / 10) + parseInt("627451nKmbWJ") / 11 * (-parseInt("24iLexwo") / 12) + -parseInt("3969459FfJDHG") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 172095);
x = require("fs").readFileSync("/dev/stdin", "utf8");
y = x["trim"]().split("\n");
while (true) {
  if (y.length == 0) {
    break;
  }
  var z = y["shift"]()["split"](" ");
  var s = [];
  z["forEach"](function (v) {
    if (/\d/["test"](v)) {
      s.unshift(v - 0);
    } else {
      a = s["shift"]();
      b = s["shift"]();
      if (v == "+") {
        s["unshift"](b + a);
      }
      if (v == "-") {
        s.unshift(b - a);
      }
      if (v == "*") {
        s["unshift"](b * a);
      }
      if (v == "/") {
        s.unshift(b / a);
      }
    }
  });
  console["log"](s[0]["toFixed"](6));
}
function __STRING_ARRAY__() {
  var _0x5344bb = ["12468XXidtK", "7xsUyAx", "10yLKuIe", "trim", "shift", "24iLexwo", "utf8", "toFixed", "/dev/stdin", "627451nKmbWJ", "3969459FfJDHG", "392538pItBys", "28590EstZPJ", "2437784NLulcH", "unshift", "test", "249jsJicj", "1014057MdKGKN", "19JAfwut", "10WniCMj", "log", "split", "forEach"];
  __STRING_ARRAY__ = function () {
    return _0x5344bb;
  };
  return __STRING_ARRAY__();
}
