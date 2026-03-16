function __DECODE_0__(qHWQKC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 455;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qHWQKC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1114120RRIfuR") / 1 + parseInt("230580yOsHtA") / 2 + parseInt("3hOaGIE") / 3 * (-parseInt("1678472BMvbTH") / 4) + parseInt("4267540mcXzFY") / 5 + parseInt("615714yEimmC") / 6 + parseInt("4309256woLvrE") / 7 * (parseInt("16HPHbTq") / 8) + -parseInt("1354536AIaVIw") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 618391);
console["log"](main(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  var _0x1ef106 = ["readFileSync", "pop", "sort", "4309256woLvrE", "4267540mcXzFY", "3hOaGIE", "split", "utf8", "/dev/stdin", "230580yOsHtA", "map", "615714yEimmC", "1678472BMvbTH", "1114120RRIfuR", "1354536AIaVIw", "log", "16HPHbTq"];
  __STRING_ARRAY__ = function () {
    return _0x1ef106;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  s = s["split"]("\n")["map"](a => +a);
  var n = s[0];
  s[0] = s[n];
  s["pop"]();
  s["sort"]((a, b) => a - b);
  var ans = 0;
  var m = n + 1 >> 1;
  for (var i = 0; i < m; i++) {
    ans -= s[i] * 2;
  }
  for (; i < n; i++) {
    ans += s[i] * 2;
  }
  if (n % 2 === 0) {
    return ans - s[m] + s[m - 1];
  }
  if (s[m - 1] + s[m - 2] > s[m - 1] * 3 - s[m]) {
    return ans + s[m - 1] + s[m - 2];
  } else {
    return ans + s[m - 1] * 3 - s[m];
  }
}
