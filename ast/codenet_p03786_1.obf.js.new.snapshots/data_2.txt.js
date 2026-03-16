function __STRING_ARRAY__() {
  const _0x4abf73 = ['split', '4941906MMuQcI', 'map', '3SvVsml', 'sort', 'log', '110451yiQVTA', '5bnEcgK', '30IhnsbQ', '380112vGEBdg', '1033749UHezsT', '/dev/stdin', '140bBIgBh', '827758VxSqjf', '14099734OZKmtv', 'trim', 'readFileSync', '3846140WwqyXs'];
  __STRING_ARRAY__ = function () {
    return _0x4abf73;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vHraUV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vHraUV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x188)) / 0x1 + parseInt(__DECODE_0__(0x17d)) / 0x2 + -parseInt(__DECODE_0__(0x185)) / 0x3 * (parseInt(__DECODE_0__(0x181)) / 0x4) + -parseInt(__DECODE_0__(0x189)) / 0x5 * (parseInt(__DECODE_0__(0x183)) / 0x6) + -parseInt(__DECODE_0__(0x18e)) / 0x7 * (-parseInt(__DECODE_0__(0x18b)) / 0x8) + -parseInt(__DECODE_0__(0x18c)) / 0x9 * (parseInt(__DECODE_0__(0x18a)) / 0xa) + parseInt(__DECODE_0__(0x17e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x98fcb);
console[__DECODE_0__(0x187)]((args => {
  const [[N], A] = args[__DECODE_0__(0x17f)]()[__DECODE_0__(0x182)]('\x0a')[__DECODE_0__(0x184)](r => r[__DECODE_0__(0x182)]('\x20')['map'](v => v | 0x0));
  A[__DECODE_0__(0x186)]((a, b) => a - b);
  let sum = A[0x0];
  let n = 0x0;
  for (let i = 0x1; i < N; i++) {
    if (sum * 0x2 >= A[i]) {
      n++;
    } else {
      n = 0x0;
    }
    if (sum + A[i] >= 0x3b9aca00) {
      return '' + (n + N - i);
    }
    sum = sum + A[i];
  }
  return '' + (n + 0x1);
})(require('fs')[__DECODE_0__(0x180)](__DECODE_0__(0x18d), 'utf8')));
