function __DECODE_0__(zHGyPj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zHGyPj, key);
}
function __STRING_ARRAY__() {
  const _0x4b6b41 = ['log', 'slice', 'length', 'readFileSync', '2189901RRnKhk', '2qEoLdk', '1458656VDTFYv', 'push', '18ZrWpCS', '117858MngWvE', '6bYGsfE', '33fRaVHK', 'indexOf', '5032500XJZLzD', 'utf8', '2899200ygCSus', '277284fbJujb', '/dev/stdin', 'split', '7086893qRmAtZ'];
  __STRING_ARRAY__ = function () {
    return _0x4b6b41;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x121)) / 0x1 * (-parseInt(__DECODE_0__(0x125)) / 0x2) + parseInt(__DECODE_0__(0x127)) / 0x3 * (parseInt(__DECODE_0__(0x12c)) / 0x4) + -parseInt(__DECODE_0__(0x12b)) / 0x5 + -parseInt(__DECODE_0__(0x126)) / 0x6 * (parseInt(__DECODE_0__(0x120)) / 0x7) + -parseInt(__DECODE_0__(0x122)) / 0x8 * (parseInt(__DECODE_0__(0x124)) / 0x9) + parseInt(__DECODE_0__(0x129)) / 0xa + parseInt(__DECODE_0__(0x12f)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82937);
function Main(input) {
  input = input[__DECODE_0__(0x12e)]('\x0a');
  const s = input[0x0];
  const t = input[0x1];
  const match = [];
  for (i = 0x0; i < s[__DECODE_0__(0x11e)]; i++) {
    if ((s + t)[__DECODE_0__(0x11d)](i, i + t[__DECODE_0__(0x11e)]) == t) {
      match[__DECODE_0__(0x123)](!![]);
    } else {
      match[__DECODE_0__(0x123)](![]);
    }
  }
  max = 0x0;
  for (i = 0x0; i < s[__DECODE_0__(0x11e)]; i++) {
    isInf = ![];
    now = i;
    getted = [];
    while (match[now]) {
      getted[__DECODE_0__(0x123)](now);
      now = (now + t['length']) % s[__DECODE_0__(0x11e)];
      if (getted[__DECODE_0__(0x128)](now) != -0x1) {
        isInf = !![];
        break;
      }
    }
    if (isInf) {
      max = -0x1;
      break;
    } else {
      if (max < getted[__DECODE_0__(0x11e)]) {
        max = getted[__DECODE_0__(0x11e)];
      }
    }
  }
  console[__DECODE_0__(0x130)](max);
}
Main(require('fs')[__DECODE_0__(0x11f)](__DECODE_0__(0x12d), __DECODE_0__(0x12a)));
