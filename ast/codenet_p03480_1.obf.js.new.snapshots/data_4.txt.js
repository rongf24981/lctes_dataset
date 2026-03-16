var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this._s = s["trim"]().split("\n");
    this._y = 0;
  }
  g["prototype"].a = function (f) {
    var s = this._s;
    var y = this._y;
    var r;
    if (typeof s[y] === "string") {
      s[y] = s[y].split(" ")["reverse"]();
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
    var r = this._s["slice"](this._y, this._y += n).map(a => a["split"](" "));
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
      return r["map"](a => +a);
    }
  };
  return f;
}();
var o = GET(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(main());
function main() {
  var s = o.a(1);
  var n = s["length"];
  var l = n + 1 >> 1;
  var u;
  var v = l;
  var f = s[l - 1];
  if (n & 1) {
    u = l - 2;
  } else {
    u = l - 1;
  }
  for (; u >= 0; u--, v++) {
    if (s[u] !== f || s[v] !== f) {
      break;
    }
    l++;
  }
  return l;
}
