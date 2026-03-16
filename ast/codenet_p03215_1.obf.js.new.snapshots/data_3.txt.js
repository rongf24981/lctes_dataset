'use strict';

function __DECODE_0__(SWFozP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 204;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SWFozP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("72447jUhHTl") / 1 + -parseInt("98dxHjAK") / 2 * (parseInt("10899iJUnIR") / 3) + parseInt("353516yeCjcl") / 4 * (-parseInt("25VFauQC") / 5) + -parseInt("6rOooLO") / 6 * (parseInt("465479dKbQPf") / 7) + parseInt("95896YEAlug") / 8 * (parseInt("306DdmBFS") / 9) + -parseInt("5030070DwhpuE") / 10 + parseInt("12561879vMqUJh") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 287684);
function __STRING_ARRAY__() {
  const _0x309a3e = ["72447jUhHTl", "465479dKbQPf", "pop", "10899iJUnIR", "ints", "strn", "/dev/stdin", "5030070DwhpuE", "slice", "12561879vMqUJh", "353516yeCjcl", "sort", "306DdmBFS", "utf8", "25VFauQC", "filter", "strv", "prototype", "log", "length", "map", "split", "6rOooLO", "98dxHjAK", "95896YEAlug"];
  __STRING_ARRAY__ = function () {
    return _0x309a3e;
  };
  return __STRING_ARRAY__();
}
function _(s) {
  let l = s.split("\n");
  if (l[l["length"] - 1] == "") {
    l["pop"]();
  }
  this.l = l;
  this.y = 0;
}
_.prototype["ints"] = function () {
  return this.l[this.y++]["split"](" ")["map"](v => +v);
};
_["prototype"].intv = function () {
  const y = this.y;
  this.y = this.l["length"];
  return this.l["slice"](y)["map"](v => +v);
};
_["prototype"]["strv"] = function () {
  const y = this.y;
  this.y = this.l["length"];
  return this.l["slice"](y);
};
_["prototype"]["strn"] = function (n) {
  const y = this.y;
  this.y += n;
  return this.l["slice"](y, y + n);
};
const $ = new _(require("fs").readFileSync("/dev/stdin", "utf8"));
(() => {
  const nk = $["ints"]();
  const n = nk[0];
  const k = nk[1];
  const a = $["ints"]();
  const rr = [];
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = i; j < n; j++) {
      s += a[j];
      rr.push(s);
    }
  }
  rr["sort"]((a, b) => b - a);
  let res = 0;
  for (let d = 41; d >= 0; d--) {
    let border = 1 << d;
    let num = rr["filter"](e => (e & res + border) === res + border)["length"];
    if (num >= k) {
      res += border;
    }
  }
  console["log"](res);
})();
