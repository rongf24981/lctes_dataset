function __STRING_ARRAY__() {
  const _0x3c8915 = ['14669YbTsHo', '42NCUwxz', '3260950ZcVPEH', 'utf8', '88104NjezAs', '/dev/stdin', 'log', '1794472RWrUAy', '1437399zrZSBw', '20JKssfJ', '343105ygReRP', 'split', 'floor', '22kCGoou', '1219025gJbNkI'];
  __STRING_ARRAY__ = function () {
    return _0x3c8915;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(efbSpb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ae;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(efbSpb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1b2)) / 0x1 * (parseInt(__DECODE_0__(0x1b0)) / 0x2) + parseInt(__DECODE_0__(0x1b6)) / 0x3 * (parseInt(__DECODE_0__(0x1bb)) / 0x4) + parseInt(__DECODE_0__(0x1b1)) / 0x5 + -parseInt(__DECODE_0__(0x1b3)) / 0x6 * (-parseInt(__DECODE_0__(0x1bc)) / 0x7) + -parseInt(__DECODE_0__(0x1b9)) / 0x8 + -parseInt(__DECODE_0__(0x1ba)) / 0x9 + -parseInt(__DECODE_0__(0x1b4)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2d2a2);
const Main = input => {
  ABN = input[__DECODE_0__(0x1ae)]('\x20')['map'](item => parseInt(item));
  console[__DECODE_0__(0x1b8)](F(ABN[0x0], ABN[0x1], ABN[0x2]));
};
const F = (A, B, N) => {
  max = 0x0;
  count = 0x0;
  count0 = 0x0;
  for (x = 0x0; x <= N; x++) {
    result = Math['floor'](A * x / B) - A * Math[__DECODE_0__(0x1af)](x / B);
    if (result == 0x0) {
      count0++;
    }
    if (count0 > 0x2) {
      break;
    }
    if (result > max) {
      max = result;
      count = x;
    }
  }
  return max;
};
Main(require('fs')['readFileSync'](__DECODE_0__(0x1b7), __DECODE_0__(0x1b5)));
