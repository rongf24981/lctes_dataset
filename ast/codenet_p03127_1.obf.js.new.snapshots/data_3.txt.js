function __DECODE_0__(DxxUEz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 470;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DxxUEz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("45259IibAhn") / 1 * (parseInt("8TTfTnH") / 2) + parseInt("233547uFbQjq") / 3 + parseInt("279904alGOQG") / 4 + -parseInt("5oakvJX") / 5 * (-parseInt("107730QIvVZg") / 6) + parseInt("4487bHKsUz") / 7 * (parseInt("3488KnHBjn") / 8) + parseInt("532476nfxkRI") / 9 + parseInt("5017190YfWgtM") / 10 * (-parseInt("11fEKrmL") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 183737);
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
      return s["map"](a => +a);
    }
  };
  g["prototype"].m = function (n, f) {
    var r = this._s["slice"](this._y, this._y += n)["map"](a => a["split"](" "));
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
function gcd(a, b) {
  if (b) {
    return gcd(b, a % b);
  } else {
    return a;
  }
}
console["log"](main());
function main() {
  var n = o.a();
  var a = o.l();
  var ans = a[0];
  for (var i = 1; i < n; i++) {
    ans = gcd(ans, a[i]);
  }
  return ans;
}
function __STRING_ARRAY__() {
  var _0x22dd0c = ["string", "readFileSync", "/dev/stdin", "279904alGOQG", "233547uFbQjq", "4487bHKsUz", "532476nfxkRI", "split", "11fEKrmL", "slice", "8TTfTnH", "5oakvJX", "107730QIvVZg", "pop", "45259IibAhn", "trim", "reverse", "length", "prototype", "map", "5017190YfWgtM", "log", "3488KnHBjn"];
  __STRING_ARRAY__ = function () {
    return _0x22dd0c;
  };
  return __STRING_ARRAY__();
}
