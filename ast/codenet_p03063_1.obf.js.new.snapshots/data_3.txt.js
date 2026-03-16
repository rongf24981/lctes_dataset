'use strict';

function __STRING_ARRAY__() {
  var _0x150709 = ["4jwbIuO", "6035320rlOxeM", "479740VnTjdS", "471wRFcqh", "2588460PMdnWa", "utf8", "readFileSync", "split", "4348MOQItw", "log", "trim", "114492CCuKnl", "20180020lVRiHw", "7KZXKZE", "8832906jkOnxl", "prototype", "length"];
  __STRING_ARRAY__ = function () {
    return _0x150709;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("479740VnTjdS") / 1 * (parseInt("4jwbIuO") / 2) + -parseInt("471wRFcqh") / 3 * (-parseInt("4348MOQItw") / 4) + -parseInt("2588460PMdnWa") / 5 + parseInt("114492CCuKnl") / 6 + parseInt("7KZXKZE") / 7 * (parseInt("6035320rlOxeM") / 8) + -parseInt("8832906jkOnxl") / 9 + parseInt("20180020lVRiHw") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 503552);
function I(s, f) {
  this._s = s["split"]("\n");
  this._c = 0;
  this._l = 0;
  this._f = f || Number;
}
I["prototype"].a = function () {
  var l = this._s[this._l];
  if (!l) {
    return;
  }
  var t = l["trim"]()["split"](" ");
  var a = t[this._c];
  this._c++;
  if (t["length"] === this._c) {
    this._c = 0;
    this._l++;
  }
  return this._f(a);
};
I["prototype"].l = function () {
  var l = this._s[this._l];
  if (!l) {
    return;
  }
  this._c = 0;
  this._l++;
  return l.split(" ").map(this._f);
};
function __DECODE_0__(NJhZjv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJhZjv, key);
}
function main(input) {
  var o = new I(input, String);
  var n = Number(o.a());
  var s = o.a();
  var white = 0;
  var black = 0;
  for (var i = 0; i < s["length"]; i++) {
    if (s[i] === ".") {
      white += 1;
    }
  }
  let min = white;
  for (var i = 0; i < s["length"]; i++) {
    if (s[i] === "#") {
      black += 1;
    } else {
      white -= 1;
    }
    if (black + white < min) {
      min = black + white;
    }
  }
  console["log"](min);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
