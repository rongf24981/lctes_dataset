var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this._s = s["trim"]()["split"]("\n");
    this._y = 0;
  }
  g["prototype"].a = function (f) {
    var s = this._s;
    var y = this._y;
    var r;
    if (typeof s[y] === "string") {
      s[y] = s[y]["split"](" ")["reverse"]();
    }
    r = s[y]["pop"]();
    if (!s[y]["length"]) {
      this._y++;
    }
    if (f) {
      return r;
    } else {
      return +r;
    }
  };
  g["prototype"].l = function (f) {
    var s = this._s[this._y++].split(" ");
    if (f) {
      return s;
    } else {
      return s["map"](a => +a);
    }
  };
  g["prototype"].m = function (n, f) {
    var r = this._s["slice"](this._y, this._y += n)["map"](a => a.split(" "));
    if (f) {
      return r;
    } else {
      return r.map(a => a["map"](a => +a));
    }
  };
  g["prototype"].r = function (n, f) {
    var r = this._s["slice"](this._y, this._y += n);
    if (f) {
      return r;
    } else {
      return r.map(a => +a);
    }
  };
  return f;
}();
var o = GET(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
console["log"](main());
function main() {
  var n = o.a();
  var m = o.m(n);
  var t = 0;
  var x = 0;
  var y = 0;
  for (var i = 0; i < n; i++) {
    var dxy = Math["abs"](x - m[i][1]);
    dxy += Math["abs"](y - m[i][2]);
    var dt = m[i][0] - t;
    if (dxy > dt || dxy % 2 !== dt % 2) {
      return "No";
    }
    x = m[i][1];
    y = m[i][2];
    t = m[i][0];
  }
  return "Yes";
}
