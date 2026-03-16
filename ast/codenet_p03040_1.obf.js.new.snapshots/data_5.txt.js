'use strict';

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
