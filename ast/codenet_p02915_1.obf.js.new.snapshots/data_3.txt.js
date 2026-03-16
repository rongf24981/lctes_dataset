function __STRING_ARRAY__() {
  var _0x382e76 = ["6947526PoxilT", "4cMLUBc", "458899oPyRCU", "1887219utYpqR", "slice", "prototype", "utf8", "map", "string", "7894840NSQSBU", "3885940VCHMyO", "2KDimuq", ";})", "8DOHDMR", "length", "1414017gZsZiv", "]).fill(0).map(x=>{return ", "Array(a[", "/dev/stdin", "split", "log", "reverse", "273849DRRczp"];
  __STRING_ARRAY__ = function () {
    return _0x382e76;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1887219utYpqR") / 1 + parseInt("2KDimuq") / 2 * (-parseInt("273849DRRczp") / 3) + -parseInt("4cMLUBc") / 4 * (-parseInt("3885940VCHMyO") / 5) + parseInt("6947526PoxilT") / 6 + -parseInt("458899oPyRCU") / 7 * (-parseInt("8DOHDMR") / 8) + parseInt("1414017gZsZiv") / 9 + parseInt("7894840NSQSBU") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 968761);
var GET = function () {
  function f(s) {
    return new g(s);
  }
  function g(s) {
    this._s = s.trim().split("\n");
    this._y = 0;
  }
  g.prototype.a = function (f) {
    var s = this._s;
    var y = this._y;
    var r;
    if (typeof s[y] === "string") {
      s[y] = s[y]["split"](" ")["reverse"]();
    }
    r = s[y].pop();
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
    var r = this._s["slice"](this._y, this._y += n)["map"](a => a["split"](" "));
    if (f) {
      return r;
    } else {
      return r["map"](a => a["map"](a => +a));
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
function __DECODE_0__(IXmyoo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 455;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IXmyoo, key);
}
function xArray(v) {
  var a = arguments;
  var l = a["length"];
  var r = "Array(a[" + --l + "]).fill(0).map(x=>{return " + v + ";})";
  while (--l) {
    r = "Array(a[" + l + "]).fill(0).map(x=>" + r + ")";
  }
  return eval(r);
}
console["log"](main());
function main() {
  var n = o.a();
  return n * n * n;
}
