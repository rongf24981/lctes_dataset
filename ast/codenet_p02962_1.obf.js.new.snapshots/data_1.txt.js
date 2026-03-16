const a0_0x4dffe5 = __DECODE_0__;
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
  const _0x432ce9 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x432ce9(0x121)) / 0x1 * (-parseInt(_0x432ce9(0x125)) / 0x2) + parseInt(_0x432ce9(0x127)) / 0x3 * (parseInt(_0x432ce9(0x12c)) / 0x4) + -parseInt(_0x432ce9(0x12b)) / 0x5 + -parseInt(_0x432ce9(0x126)) / 0x6 * (parseInt(_0x432ce9(0x120)) / 0x7) + -parseInt(_0x432ce9(0x122)) / 0x8 * (parseInt(_0x432ce9(0x124)) / 0x9) + parseInt(_0x432ce9(0x129)) / 0xa + parseInt(_0x432ce9(0x12f)) / 0xb;
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
  const _0x39dea1 = __DECODE_0__;
  input = input[_0x39dea1(0x12e)]('\x0a');
  const s = input[0x0];
  const t = input[0x1];
  const match = [];
  for (i = 0x0; i < s[_0x39dea1(0x11e)]; i++) {
    if ((s + t)[_0x39dea1(0x11d)](i, i + t[_0x39dea1(0x11e)]) == t) {
      match[_0x39dea1(0x123)](!![]);
    } else {
      match[_0x39dea1(0x123)](![]);
    }
  }
  max = 0x0;
  for (i = 0x0; i < s[_0x39dea1(0x11e)]; i++) {
    isInf = ![];
    now = i;
    getted = [];
    while (match[now]) {
      getted[_0x39dea1(0x123)](now);
      now = (now + t['length']) % s[_0x39dea1(0x11e)];
      if (getted[_0x39dea1(0x128)](now) != -0x1) {
        isInf = !![];
        break;
      }
    }
    if (isInf) {
      max = -0x1;
      break;
    } else {
      if (max < getted[_0x39dea1(0x11e)]) {
        max = getted[_0x39dea1(0x11e)];
      }
    }
  }
  console[_0x39dea1(0x130)](max);
}
Main(require('fs')[a0_0x4dffe5(0x11f)](a0_0x4dffe5(0x12d), a0_0x4dffe5(0x12a)));
