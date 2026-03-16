function __DECODE_0__(LpqPFd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 310;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LpqPFd, key);
}
function __STRING_ARRAY__() {
  var _0x37afdc = ["/dev/stdin", "1276ePykCw", "3080020SEZwli", "split", "shift", "floor", "904600DwahKJ", "push", "log", "forEach", "559594eYjbFF", "8935024FfNbtX", "30YfjLhp", "2922hwcRKf", "sort", "36UrSKRl", "trim", "1176175oorKea", "readFileSync", "127446bTmTqV"];
  __STRING_ARRAY__ = function () {
    return _0x37afdc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("559594eYjbFF") / 1 + -parseInt("127446bTmTqV") / 2 + parseInt("2922hwcRKf") / 3 * (parseInt("1276ePykCw") / 4) + parseInt("3080020SEZwli") / 5 + -parseInt("30YfjLhp") / 6 * (-parseInt("1176175oorKea") / 7) + -parseInt("8935024FfNbtX") / 8 + -parseInt("36UrSKRl") / 9 * (parseInt("904600DwahKJ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 783988);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var I = 0;
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  if (I != 0) {
    console["log"]("");
  }
  I++;
  var rank = [];
  for (var i = 0; i < n; i++) {
    var arr = Arr["shift"]().split(" ");
    var score = (arr[1] - 0) * 3 + (arr[3] - 0) + (10 - i) * 0.01;
    rank["push"]([arr[0], score]);
  }
  rank["sort"](function (a, b) {
    a = a[1];
    b = b[1];
    return b - a;
  });
  rank["forEach"](function (v) {
    console["log"](v[0] + "," + Math["floor"](v[1]));
  });
}
