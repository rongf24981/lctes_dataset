function __STRING_ARRAY__() {
  var _0x120e59 = ["3psozxn", "push", "trim", "4738122iXSHlM", "9VkXrLK", "104499OGRHjR", "52vVqxlA", "split", "/dev/stdin", "log", "205830bRvdBf", "198dLBbtU", "readFileSync", "4291145XfHHsj", "shift", "338630byjdik", "length", "6886696QvubVZ", "5568976JUqLKn"];
  __STRING_ARRAY__ = function () {
    return _0x120e59;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3psozxn") / 1 * (-parseInt("205830bRvdBf") / 2) + parseInt("104499OGRHjR") / 3 * (parseInt("52vVqxlA") / 4) + -parseInt("4291145XfHHsj") / 5 + parseInt("4738122iXSHlM") / 6 + parseInt("5568976JUqLKn") / 7 + -parseInt("6886696QvubVZ") / 8 * (parseInt("9VkXrLK") / 9) + -parseInt("338630byjdik") / 10 * (-parseInt("198dLBbtU") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 619807);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
l = inp["shift"]().split(" ");
N = l["shift"]() * 1;
P = l["shift"]() * 1;
_primFactors = function (n) {
  var arr = [];
  if (n == 1) {
    return [{
      n: 1,
      r: 1
    }];
  }
  s = n;
  var i = 2;
  r = 0;
  if (n % i === 0) {
    do {
      r++;
      n /= i;
    } while (n % i === 0);
    arr["push"]({
      n: i,
      r: r
    });
  }
  for (i = 3; i * i <= s; i += 2) {
    r = 0;
    if (n % i === 0) {
      do {
        r++;
        n /= i;
      } while (n % i === 0);
      arr.push({
        n: i,
        r: r
      });
    }
  }
  if (n > 1) {
    arr["push"]({
      n: n,
      r: 1
    });
  }
  return arr;
};
function __DECODE_0__(TvPGVF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TvPGVF, key);
}
arr = _primFactors(P);
ans = 1;
for (i = 0; i < arr["length"]; i++) {
  a = arr[i];
  r = a.r;
  while (r >= N) {
    ans *= a.n;
    r -= N;
  }
}
console["log"](ans);
