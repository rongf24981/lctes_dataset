(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4627UfzCGT") / 1 * (parseInt("382QOxqrc") / 2) + parseInt("1444194PFQrfY") / 3 * (parseInt("4ALsVQU") / 4) + parseInt("14855ESyack") / 5 * (parseInt("354UkmlQm") / 6) + parseInt("1409695HyqGZi") / 7 * (-parseInt("16JajwsH") / 8) + parseInt("5613093sEsBkx") / 9 + parseInt("10zotVNY") / 10 * (parseInt("220693IrUTPZ") / 11) + -parseInt("48DcYwUF") / 12 * (parseInt("3627468YPHYgD") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 665270);
function Main(s) {
  s = s["split"]("\n");
  var n = +s[0];
  var m = 1 << n;
  var a = s[1]["split"](" ")["map"](a => +a);
  var b = [a[0]];
  var c = [[a[0], 0]];
  var d = [[-1, -1]];
  for (var i = 1; i < m; i++) {
    f(i);
  }
  console["log"](b.slice(1)["join"]("\n"));
  function f(n) {
    var q = {};
    var s = n;
    var t = 0;
    while (s) {
      t++;
      s >>= 1;
    }
    for (var i = 0; i < t; i++) {
      var u = n & (1 << i ^ 1048575);
      if (u === n) {
        continue;
      }
      q[c[u][1]] = c[u][0];
      q[d[u][1]] = d[u][0];
    }
    s = [a[n], n];
    t = [-1, -1];
    for (i in q) {
      if (t[0] > q[i]) {
        continue;
      }
      if (s[0] > q[i]) {
        t = [q[i], i];
      } else {
        t = s;
        s = [q[i], i];
      }
    }
    b[n] = Math["max"](b[n - 1], t[0] + s[0]);
    c[n] = t;
    d[n] = s;
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(LeQiHM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LeQiHM, key);
}
function __STRING_ARRAY__() {
  var _0x1d2e18 = ["log", "utf8", "split", "3627468YPHYgD", "354UkmlQm", "map", "10zotVNY", "5613093sEsBkx", "220693IrUTPZ", "1444194PFQrfY", "382QOxqrc", "14855ESyack", "max", "1409695HyqGZi", "16JajwsH", "4627UfzCGT", "join", "readFileSync", "48DcYwUF", "4ALsVQU"];
  __STRING_ARRAY__ = function () {
    return _0x1d2e18;
  };
  return __STRING_ARRAY__();
}
