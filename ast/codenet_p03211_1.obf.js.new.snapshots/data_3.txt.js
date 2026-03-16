function __STRING_ARRAY__() {
  var _0xa61d0a = ["reverse", "4GjiGAH", "4124527MDJKxd", "10zzyagp", "slice", "8KwdFnw", "prototype", "readFileSync", "trim", "split", "log", "321000qpibqU", "554286luPTLy", "length", "2804389vdPsES", "/dev/stdin", "361652UsRaSh", "pop", "210807SiIDOK", "643292xnAUoC", "map", "string", "15usqmSi"];
  __STRING_ARRAY__ = function () {
    return _0xa61d0a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("361652UsRaSh") / 1 + -parseInt("643292xnAUoC") / 2 + -parseInt("321000qpibqU") / 3 * (parseInt("4GjiGAH") / 4) + -parseInt("15usqmSi") / 5 * (-parseInt("554286luPTLy") / 6) + -parseInt("2804389vdPsES") / 7 * (-parseInt("8KwdFnw") / 8) + parseInt("210807SiIDOK") / 9 * (-parseInt("10zzyagp") / 10) + -parseInt("4124527MDJKxd") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 212396);
function __DECODE_0__(YEJYbg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 191;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YEJYbg, key);
}
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this._s = s["trim"]().split("\n");
    this._y = 0;
  }
  g.prototype.a = function (f) {
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
    var s = this._s[this._y++]["split"](" ");
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
      return r["map"](a => a["map"](a => +a));
    }
  };
  g.prototype.r = function (n, f) {
    var r = this._s["slice"](this._y, this._y += n);
    if (f) {
      return r;
    } else {
      return r["map"](a => +a);
    }
  };
  return f;
}();
var o = GET(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
console["log"](main());
function main() {
  var s = o.a(1);
  var ans = 999;
  for (var i = 2; i < s["length"]; i++) {
    var t = s[i - 2] + s[i - 1] + s[i];
    t = Math.abs(t - 753);
    if (ans > t) {
      ans = t;
    }
  }
  return ans;
}
