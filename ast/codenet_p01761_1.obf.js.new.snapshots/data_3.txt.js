(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("917cfxmHv") / 1 * (-parseInt("76mRrAOG") / 2) + parseInt("1289142kDIsWQ") / 3 + parseInt("2560efUJdD") / 4 * (parseInt("1340euglSd") / 5) + parseInt("1600896YgqUcd") / 6 + -parseInt("2962995lHIAdE") / 7 + parseInt("8uFXSWv") / 8 * (parseInt("318177yDHods") / 9) + -parseInt("2670070nMiNht") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 247957);
function __STRING_ARRAY__() {
  var _0x59903a = ["/dev/stdin", "shift", "forEach", "917cfxmHv", "2560efUJdD", "1289142kDIsWQ", "push", "1340euglSd", "utf8", "76mRrAOG", "318177yDHods", "8uFXSWv", "test", "1600896YgqUcd", "getTime", "2962995lHIAdE", "2670070nMiNht", "log", "readFileSync", "split"];
  __STRING_ARRAY__ = function () {
    return _0x59903a;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(aOuAFR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 233;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aOuAFR, key);
}
var arr = input.trim()["split"]("\n");
var n = arr["shift"]() - 0;
var book = [];
for (var i = 0; i < n; i++) {
  book[i] = arr["shift"]();
}
var q = arr["shift"]() - 0;
for (var i = 0; i < q; i++) {
  if (i != 0) {
    console["log"]("");
  }
  var ans = [];
  var v = arr["shift"]()["split"](" ");
  var a = v[0];
  var b = v[1];
  var c = v[2] != "*" ? new Date(v[2])["getTime"]() : "*";
  var d = v[3] != "*" ? new Date(v[3])["getTime"]() : "*";
  book["forEach"](function (V) {
    V = V["split"](" ");
    var A = V[0];
    var B = V[1];
    var C = new Date(V[2])["getTime"]();
    var flag = true;
    if (a != "*") {
      var regex = new RegExp(a);
      if (regex["test"](A) == false) {
        flag = false;
      }
    }
    if (b != "*") {
      var regex = new RegExp(b);
      if (regex["test"](B) == false) {
        flag = false;
      }
    }
    if (c != "*") {
      if (c > C) {
        flag = false;
      }
    }
    if (d != "*") {
      if (d < C) {
        flag = false;
      }
    }
    if (flag) {
      ans["push"](A);
    }
  });
  ans["forEach"](function (value) {
    console["log"](value);
  });
}
