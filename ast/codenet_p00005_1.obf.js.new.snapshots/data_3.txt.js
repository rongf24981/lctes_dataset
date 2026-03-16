(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("62064pxLNHO") / 1 + parseInt("4tqziqY") / 2 * (parseInt("510531IoETia") / 3) + -parseInt("1819972dQQKWV") / 4 + -parseInt("1526595bdgnGs") / 5 + parseInt("1645806tgThSM") / 6 * (-parseInt("7SNnLrY") / 7) + parseInt("593024QuPHXy") / 8 * (parseInt("27gkdOHp") / 9) + parseInt("6387380Xdcmip") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 228927);
function __DECODE_0__(GMdUZQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 294;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GMdUZQ, key);
}
config = {
  stdin: "/dev/stdin",
  newline: "\n"
};
require("fs").readFileSync(config["stdin"], "ascii")["trim"]()["split"](config["newline"]).forEach(function (line) {
  var ary = line["split"](" ");
  var a = ary[0];
  var b = ary[1];
  console["log"]("%d %d", gcd(a, b), lcm(a, b));
});
function __STRING_ARRAY__() {
  var _0x367838 = ["593024QuPHXy", "1819972dQQKWV", "newline", "7SNnLrY", "%d %d", "ascii", "/dev/stdin", "stdin", "62064pxLNHO", "6387380Xdcmip", "1526595bdgnGs", "27gkdOHp", "log", "split", "1645806tgThSM", "4tqziqY", "trim", "510531IoETia"];
  __STRING_ARRAY__ = function () {
    return _0x367838;
  };
  return __STRING_ARRAY__();
}
function gcd(a, b) {
  while (a !== b) {
    if (a < b) {
      var tmp = a;
      a = b;
      b = tmp;
    }
    if (a % b === 0) {
      return b;
    }
    a -= b;
  }
  return a;
}
function lcm(a, b) {
  var g = gcd(a, b);
  return g * (a / g) * (b / g);
}
