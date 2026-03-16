function __STRING_ARRAY__() {
  var _0x2e5a31 = ["size", "1242812CYUEvA", "push", "utf8", "4866864TPfcBa", "map", "292073QuAhiE", "4brYAtM", "join", "floor", "695296ZwBDoa", "/dev/stdin", "log", "866600ndgGov", "1666767GnsIpd", "3716640vXiQKs", "toString", "split"];
  __STRING_ARRAY__ = function () {
    return _0x2e5a31;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xImKfs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 404;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xImKfs, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("292073QuAhiE") / 1 + parseInt("1242812CYUEvA") / 2 + -parseInt("1666767GnsIpd") / 3 * (parseInt("4brYAtM") / 4) + -parseInt("3716640vXiQKs") / 5 + parseInt("4866864TPfcBa") / 6 + parseInt("695296ZwBDoa") / 7 + -parseInt("866600ndgGov") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 416709);
function Main(arg) {
  var N = arg["split"]("\n")[0] - 0;
  var A = arg.split("\n")[1]["split"](" ")["map"](v => v - 0);
  var tmp = new Set(A);
  var ans = [];
  ans.push(N);
  for (var K = 2; K <= N; K++) {
    if (tmp.size < K) {
      ans.push(0);
    } else {
      ans["push"](Math["floor"](tmp["size"] / K));
    }
  }
  console["log"](ans["join"]("\n")["toString"]());
  return;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
