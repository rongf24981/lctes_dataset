function __STRING_ARRAY__() {
  const _0x16ed8d = ["log", "539REVQtL", "820365dCDRyT", "30DMPiqI", "pow", "93692QzNONT", "720152TsNKwC", "12uAFUHZ", "233185ufTAIv", "utf8", "762snZyiX", "861864zBOCQB", "split", "702477qAovOR", "/dev/stdin", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x16ed8d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("539REVQtL") / 1 * (-parseInt("762snZyiX") / 2) + -parseInt("12uAFUHZ") / 3 * (-parseInt("93692QzNONT") / 4) + parseInt("233185ufTAIv") / 5 + -parseInt("861864zBOCQB") / 6 + parseInt("820365dCDRyT") / 7 + parseInt("720152TsNKwC") / 8 + -parseInt("702477qAovOR") / 9 * (parseInt("30DMPiqI") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 175099);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(NyNMQz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 262;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NyNMQz, key);
}
(input => {
  const lines = input["split"]("\n");
  const N = lines[0] - 0;
  const X = lines[1];
  const popcount = n => {
    let count = 0;
    do {
      if (n & 1) {
        count++;
      } else {
        count;
      }
    } while (n = n >>> 1);
    return count;
  };
  const f = n => {
    if (n === 0) {
      return 0;
    }
    let count = 1;
    while (n %= popcount(n)) {
      count++;
    }
    return count;
  };
  const x = parseInt(X, 2);
  const pr = popcount(x) - 1;
  const nx = popcount(x) + 1;
  for (let i = 0; i < N; i++) {
    let n = x ^ Math["pow"](2, N - i - 1);
    if (n === 0) {
      console.log(0);
    } else {
      console["log"](f(n % (X[i] === "1" ? pr : nx)) + 1);
    }
  }
})(input);
