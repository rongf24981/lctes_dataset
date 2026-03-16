function __STRING_ARRAY__() {
  var _0x1510ef = ["1114971JxzCsR", "prototype", "4621855CCmHaJ", "length", "map", "4889508RUijGe", "9741876nUMhin", "split", "58jIevJS", "142723ITXOsp", "reverse", "trim", "232rpaQDj", "3914595CVRnoy", "slice", "pop", "/dev/stdin", "54449RTDIOp", "string"];
  __STRING_ARRAY__ = function () {
    return _0x1510ef;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("54449RTDIOp") / 1 * (parseInt("58jIevJS") / 2) + -parseInt("1114971JxzCsR") / 3 + parseInt("4889508RUijGe") / 4 + -parseInt("4621855CCmHaJ") / 5 + parseInt("9741876nUMhin") / 6 + parseInt("142723ITXOsp") / 7 * (parseInt("232rpaQDj") / 8) + parseInt("3914595CVRnoy") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 997210);
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
function __DECODE_0__(NdzEcJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 305;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NdzEcJ, key);
}
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
