function __STRING_ARRAY__() {
  var _0x344f75 = ["trim", "1880710egIGRn", "409840tysNQz", "reverse", "length", "utf8", "1861242DBgBws", "10aaxKzW", "12410607opoGdt", "83496PqTGAw", "pop", "39244MODWmb", "split", "map", "slice", "log", "join", "9966NVQWyz", "128dYrldS", "81ydlRZY", "string", "push", "prototype", "328uqvlZz", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x344f75;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("10aaxKzW") / 1 * (-parseInt("39244MODWmb") / 2) + -parseInt("9966NVQWyz") / 3 * (-parseInt("328uqvlZz") / 4) + parseInt("1880710egIGRn") / 5 + parseInt("1861242DBgBws") / 6 + parseInt("83496PqTGAw") / 7 * (-parseInt("128dYrldS") / 8) + -parseInt("81ydlRZY") / 9 * (-parseInt("409840tysNQz") / 10) + -parseInt("12410607opoGdt") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 204744);
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
  g.prototype.l = function (f) {
    var s = this._s[this._y++]["split"](" ");
    if (f) {
      return s;
    } else {
      return s.map(a => +a);
    }
  };
  g.prototype.m = function (n, f) {
    var r = this._s["slice"](this._y, this._y += n)["map"](a => a.split(" "));
    if (f) {
      return r;
    } else {
      return r["map"](a => a.map(a => +a));
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
var o = GET(require("fs").readFileSync("/dev/stdin", "utf8"));
function __DECODE_0__(SHEUZl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SHEUZl, key);
}
console["log"](main());
function main() {
  var n = o.a();
  var ans = [];
  for (var i = 1; i <= n; i++) {
    for (var j = i + 1; j <= n; j++) {
      if (n % 2 && i + j === n) {
        continue;
      }
      if (n % 2 === 0 && i + j === n + 1) {
        continue;
      }
      ans["push"](i + " " + j);
    }
  }
  console.log(ans["length"]);
  return ans["join"]("\n");
}
