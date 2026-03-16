(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("489686TAjcQi") / 1 + parseInt("2366562QDpJKx") / 2 + parseInt("364053MAiShC") / 3 * (-parseInt("28zASbcH") / 4) + parseInt("145QIFJGM") / 5 * (-parseInt("3738HEsWKd") / 6) + -parseInt("5786004YhMGcx") / 7 + parseInt("1504vqJSEB") / 8 * (parseInt("57924oZyiUe") / 9) + parseInt("6222160LttzMl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 831683);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["split"]("\n");
function __STRING_ARRAY__() {
  var _0x2d2814 = ["split", "5786004YhMGcx", "2366562QDpJKx", "57924oZyiUe", "utf8", "1504vqJSEB", "6222160LttzMl", "readFileSync", "489686TAjcQi", "map", "364053MAiShC", "28zASbcH", "145QIFJGM", "log", "3738HEsWKd", "indexOf", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x2d2814;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HtaYwI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 300;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HtaYwI, key);
}
var imagine;
while (imagine = lines["shift"]()) {
  var guess = lines["shift"]();
  var a = imagine.split(" ")["map"](function (n) {
    return +n;
  });
  var b = guess["split"](" ")["map"](function (n) {
    return +n;
  });
  var hit = 0;
  for (var i = 0; i < 4; i++) {
    if (a[i] == b[i]) {
      hit++;
    }
  }
  var blow = 0;
  for (var i = 0; i < 4; i++) {
    if (a["indexOf"](b[i]) >= 0) {
      blow++;
    }
  }
  blow -= hit;
  console["log"](hit + " " + blow);
}
