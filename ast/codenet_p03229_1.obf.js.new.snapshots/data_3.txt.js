function __DECODE_0__(mTZSxp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mTZSxp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("926412tJFNVF") / 1 + -parseInt("69906LzTGcM") / 2 + parseInt("17187UEJSEF") / 3 * (-parseInt("536TVADIq") / 4) + -parseInt("3093545gnZKNe") / 5 + -parseInt("4367982JpSqTc") / 6 + -parseInt("8010702AoAodk") / 7 + parseInt("25199288fbRWXL") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 782592);
function Main(input) {
  var nums = input["split"]("\n")["map"](function (value) {
    return value - 0;
  });
  var N = nums["shift"]();
  nums["sort"](function (a, b) {
    return b - a;
  });
  var ary = new Array(N);
  var m = 0;
  var r = N - 1;
  for (var l = 0; l < N / 2; l++, r--) {
    ary[m++] = nums[l];
    ary[m++] = nums[r];
  }
  var s = 0;
  var s1 = 0;
  m = N - 1;
  for (var n = 0; n < N - 1; n++) {
    r = Math["abs"](ary[m] - ary[n]);
    s += r;
    m = n;
  }
  for (var n = 0; n < N - 1; n++) {
    r = Math.abs(ary[n] - ary[n + 1]);
    s1 += r;
  }
  console["log"](Math["max"](s, s1));
}
function __STRING_ARRAY__() {
  var _0x1e345a = ["split", "map", "log", "25199288fbRWXL", "readFileSync", "3093545gnZKNe", "17187UEJSEF", "/dev/stdin", "shift", "sort", "8010702AoAodk", "69906LzTGcM", "max", "utf8", "abs", "4367982JpSqTc", "536TVADIq", "926412tJFNVF"];
  __STRING_ARRAY__ = function () {
    return _0x1e345a;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
