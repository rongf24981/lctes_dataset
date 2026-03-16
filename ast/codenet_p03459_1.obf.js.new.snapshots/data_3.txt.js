(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2717tuPtwB") / 1 * (parseInt("348EnnBda") / 2) + parseInt("3216dobVjp") / 3 * (parseInt("1616iOscpl") / 4) + -parseInt("2283125MBVUrO") / 5 + -parseInt("747462OpHWtZ") / 6 * (parseInt("14Assxia") / 7) + parseInt("8hwtQyx") / 8 * (-parseInt("3158901Vpihln") / 9) + parseInt("4128930KaYjdo") / 10 + -parseInt("246224zQPTJM") / 11 * (-parseInt("48UweHQD") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 351507);
function __DECODE_0__(rTRZyM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rTRZyM, key);
}
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
function __STRING_ARRAY__() {
  var _0x130529 = ["Yes", "utf8", "48UweHQD", "reverse", "3216dobVjp", "length", "split", "1616iOscpl", "2283125MBVUrO", "abs", "pop", "747462OpHWtZ", "348EnnBda", "4128930KaYjdo", "246224zQPTJM", "2717tuPtwB", "/dev/stdin", "8hwtQyx", "slice", "3158901Vpihln", "map", "log", "prototype", "readFileSync", "trim", "14Assxia"];
  __STRING_ARRAY__ = function () {
    return _0x130529;
  };
  return __STRING_ARRAY__();
}
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
