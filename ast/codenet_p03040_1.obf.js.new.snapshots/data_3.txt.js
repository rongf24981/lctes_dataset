'use strict';

function __DECODE_0__(Oserix, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 359;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Oserix, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("251204FeMjxi") / 1 + parseInt("424056DzifHM") / 2 + -parseInt("1261059QOyiWZ") / 3 * (parseInt("4qnxviu") / 4) + -parseInt("10dBSXmJ") / 5 * (-parseInt("826782IlTawZ") / 6) + -parseInt("49QXfxpp") / 7 * (-parseInt("331696mSQuQs") / 8) + -parseInt("3886650hUSvCu") / 9 + parseInt("5563450wFribB") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 230794);
function I(t, i) {
  this._s = t["split"]("\n");
  this._c = 0;
  this._l = 0;
  this._f = i || Number;
}
I["prototype"].a = function (t) {
  var i = this._s[this._l];
  if (i) {
    var s = i.trim().split(" ");
    var h = s[this._c];
    this._c++;
    if (s["length"] === this._c) {
      this._c = 0;
      this._l++;
    }
    if (t) {
      return t(h);
    } else {
      return this._f(h);
    }
  }
};
I["prototype"].l = function (t) {
  var i = this._s[this._l];
  if (i) {
    this._c = 0;
    this._l++;
    return i["split"](" ").map(t || this._f);
  }
};
module["exports"] = I;
function __STRING_ARRAY__() {
  var _0x11d222 = ["sort", "1261059QOyiWZ", "map", "split", "5563450wFribB", "readFileSync", "utf8", "push", "abs", "prototype", "length", "826782IlTawZ", "331696mSQuQs", "4qnxviu", "251204FeMjxi", "424056DzifHM", "3886650hUSvCu", "49QXfxpp", "exports", "10dBSXmJ"];
  __STRING_ARRAY__ = function () {
    return _0x11d222;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var o = new I(input);
  var q = o.a();
  var c = 0;
  var sorted = [];
  for (var i = 0; i < q; i++) {
    var q1 = o.a();
    if (q1 === 1) {
      var a = o.a();
      var b = o.a();
      c += b;
      sorted["push"](a);
    } else {
      sorted = sorted["sort"]((a, b) => a - b);
      var mid = sorted[Math.floor((sorted.length - 1) / 2)];
      var ans = sorted["map"](x => Math["abs"](x - mid)).reduce((acc, cur) => acc + cur) + c;
      console.log(mid, ans);
    }
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
