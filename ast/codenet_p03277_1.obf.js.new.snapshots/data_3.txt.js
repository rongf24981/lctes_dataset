function __DECODE_0__(PlkUxU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 168;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PlkUxU, key);
}
function __STRING_ARRAY__() {
  var _0x9cd3e2 = ["2114cZVNie", "518627MNNslh", "/dev/stdin", "4758485SjvQGk", "42595820swpfdC", "map", "pop", "2598noQpgg", "max", "readFileSync", "2869264eJYmQo", "18wsbGDS", "6903MwhCRa", "2439032mxfTdA", "reverse", "length", "utf8", "split", "782hAXUpy", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x9cd3e2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("518627MNNslh") / 1 + parseInt("782hAXUpy") / 2 * (-parseInt("6903MwhCRa") / 3) + -parseInt("2869264eJYmQo") / 4 + -parseInt("4758485SjvQGk") / 5 + -parseInt("2598noQpgg") / 6 * (-parseInt("2114cZVNie") / 7) + -parseInt("2439032mxfTdA") / 8 * (parseInt("18wsbGDS") / 9) + parseInt("42595820swpfdC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 693259);
function gets(str) {
  this._s = str.split("\n");
  this._y = 0;
}
;
gets.prototype = {
  a: function (f) {
    var s = this._s;
    var y = this._y;
    var r;
    if (typeof s[y] === "string") {
      s[y] = s[y]["split"](" ")["reverse"]();
    }
    r = s[y]["pop"]();
    if (!s[y].length) {
      this._y++;
    }
    if (f) {
      return r;
    } else {
      return +r;
    }
  },
  l: function (f) {
    var s = this._s[this._y++].split(" ");
    if (f) {
      return s;
    } else {
      return s.map(a => +a);
    }
  },
  m: function (n, f) {
    var s = this._s;
    var y = this._y;
    var r = [];
    var i = 0;
    if (f) {
      for (; i < n; i++) {
        r[i] = s[y + i]["split"](" ");
      }
    } else {
      for (; i < n; i++) {
        r[i] = s[y + i]["split"](" ")["map"](a => +a);
      }
    }
    this._y += n;
    return r;
  }
};
var o = new gets(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
console.log(main());
function main() {
  var n = o.a();
  var a = o.l();
  var b = [];
  if (n <= 2) {
    return Math["max"](...a);
  }
  for (var i = 0; i < n - 1; i++) {
    a[n + i] = Math["max"](a[i], a[i + 1]);
  }
  return middle(a);
  function middle(a) {
    a["sort"]((a, b) => a - b);
    return a[a["length"] >> 1];
  }
}
