function __STRING_ARRAY__() {
  var _0x304508 = ["13475kAPRQz", "117170gOFwWO", "27eWgNKN", "2864266CNIxML", "map", "max", "2920MIIlac", "1432050raVLmK", "readFileSync", "5509625XtVsVi", "split", "3wnpGRe", "324MsTMpY", "1830076OYGEtl", "785760vPFIFH", "/dev/stdin", "%d %d", "utf8", "24FqAVVA", "sort"];
  __STRING_ARRAY__ = function () {
    return _0x304508;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("785760vPFIFH") / 1 + -parseInt("2864266CNIxML") / 2 + parseInt("3wnpGRe") / 3 * (-parseInt("1830076OYGEtl") / 4) + -parseInt("117170gOFwWO") / 5 * (-parseInt("324MsTMpY") / 6) + -parseInt("13475kAPRQz") / 7 * (-parseInt("2920MIIlac") / 8) + -parseInt("27eWgNKN") / 9 * (-parseInt("1432050raVLmK") / 10) + -parseInt("5509625XtVsVi") / 11 * (-parseInt("24FqAVVA") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 724014);
function __DECODE_0__(IttZmp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 350;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IttZmp, key);
}
function Main(s) {
  s = s["split"]("\n");
  var a = s[1].split(" ")["map"](a => +a);
  const n = +s[0];
  var m = Math["max"](...a);
  var b = [...a]["sort"]((a, b) => a - b);
  var c = 9000000000;
  for (var i = 0; i < n - 1; i++) {
    if (Math.abs(m / 2 - b[i]) < c) {
      c = Math.abs(m / 2 - b[i]);
    } else {
      break;
    }
  }
  console.log("%d %d", m, b[i - 1]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
