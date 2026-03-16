function __STRING_ARRAY__() {
  const _0x3c8915 = ["14669YbTsHo", "42NCUwxz", "3260950ZcVPEH", "utf8", "88104NjezAs", "/dev/stdin", "log", "1794472RWrUAy", "1437399zrZSBw", "20JKssfJ", "343105ygReRP", "split", "floor", "22kCGoou", "1219025gJbNkI"];
  __STRING_ARRAY__ = function () {
    return _0x3c8915;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(efbSpb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 430;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(efbSpb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("14669YbTsHo") / 1 * (parseInt("22kCGoou") / 2) + parseInt("88104NjezAs") / 3 * (parseInt("20JKssfJ") / 4) + parseInt("1219025gJbNkI") / 5 + -parseInt("42NCUwxz") / 6 * (-parseInt("343105ygReRP") / 7) + -parseInt("1794472RWrUAy") / 8 + -parseInt("1437399zrZSBw") / 9 + -parseInt("3260950ZcVPEH") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 184994);
const Main = input => {
  ABN = input["split"](" ").map(item => parseInt(item));
  console["log"](F(ABN[0], ABN[1], ABN[2]));
};
const F = (A, B, N) => {
  max = 0;
  count = 0;
  count0 = 0;
  for (x = 0; x <= N; x++) {
    result = Math.floor(A * x / B) - A * Math["floor"](x / B);
    if (result == 0) {
      count0++;
    }
    if (count0 > 2) {
      break;
    }
    if (result > max) {
      max = result;
      count = x;
    }
  }
  return max;
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
