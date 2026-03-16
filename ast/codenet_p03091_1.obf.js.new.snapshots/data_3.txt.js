'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("189433GazMNR") / 1 * (parseInt("4wDCfJg") / 2) + -parseInt("946515aPGupy") / 3 + -parseInt("388440vdNeIV") / 4 + -parseInt("178465gwznhT") / 5 * (parseInt("66TsONKy") / 6) + parseInt("1669675ImQLcB") / 7 + parseInt("3448IHNtkR") / 8 * (-parseInt("2556iPrBiy") / 9) + parseInt("13112930JyucpR") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 243310);
function __DECODE_0__(hbRwNm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hbRwNm, key);
}
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
function __STRING_ARRAY__() {
  const _0x1d98bb = ["66TsONKy", "readFileSync", "178465gwznhT", "prototype", "log", "length", "2556iPrBiy", "13112930JyucpR", "4wDCfJg", "3448IHNtkR", "/dev/stdin", "946515aPGupy", "utf8", "exports", "1669675ImQLcB", "push", "388440vdNeIV", "map", "189433GazMNR", "trim", "split"];
  __STRING_ARRAY__ = function () {
    return _0x1d98bb;
  };
  return __STRING_ARRAY__();
}
I["prototype"].l = function () {
  var l = this._s[this._l];
  if (!l) {
    return;
  }
  this._c = 0;
  this._l++;
  return l["split"](" ")["map"](this._f);
};
module["exports"] = I;
function main(input) {
  const o = new I(input);
  const N = o.a();
  const M = o.a();
  const adj = [];
  for (let i = 1; i <= N; i++) {
    adj[i] = [];
  }
  for (let i = 0; i < M; i++) {
    let ai = o.a();
    let bi = o.a();
    adj[ai].push(bi);
    adj[bi]["push"](ai);
  }
  let flag1 = false;
  let flag2 = true;
  for (let i = 1; i <= N; i++) {
    if (adj[i]["length"] === 6) {
      flag1 = true;
    }
    if (adj[i]["length"] % 2 !== 0) {
      flag2 = false;
    }
  }
  console["log"](flag1 && flag2 ? "Yes" : "No");
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
