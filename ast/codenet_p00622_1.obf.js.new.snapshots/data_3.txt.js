function __STRING_ARRAY__() {
  var _0x52a862 = ["readFileSync", "hasOwnProperty", "1FiFwiE", "29024FwOklB", "join", "/dev/stdin", "split", "6fqXNDg", "7658240IpCssB", "shift", "forEach", "4669553AuXKOR", "512314qPFlnH", "1719BbwLSv", "1145405fIyPNo", "2796048omGfFh", "utf8", "1356788yXPbjz"];
  __STRING_ARRAY__ = function () {
    return _0x52a862;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BqFjAG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BqFjAG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1FiFwiE") / 1 * (-parseInt("512314qPFlnH") / 2) + -parseInt("2796048omGfFh") / 3 + parseInt("1356788yXPbjz") / 4 + parseInt("1145405fIyPNo") / 5 + -parseInt("6fqXNDg") / 6 * (-parseInt("4669553AuXKOR") / 7) + -parseInt("29024FwOklB") / 8 * (-parseInt("1719BbwLSv") / 9) + -parseInt("7658240IpCssB") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 486622);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
while (true) {
  var a = arr["shift"]().split("");
  if (a["join"]("") == "-") {
    break;
  }
  var b = arr["shift"]()["split"]("");
  var c = arr["shift"]()["split"]("");
  var obj = {};
  a["forEach"](function (v) {
    obj[v] = true;
  });
  var str = "";
  var m = "";
  c["forEach"](function (v) {
    if (obj["hasOwnProperty"](v)) {
      if (m == "") {
        m = a["shift"]();
        m = a["shift"]();
      } else {
        m = a["shift"]();
      }
    } else {
      while (true) {
        if (m == v) {
          m = a.shift();
          break;
        } else {
          str += m;
          m = b.shift();
        }
      }
    }
  });
  str += m;
  str += b["join"]("");
  console.log(str);
}
