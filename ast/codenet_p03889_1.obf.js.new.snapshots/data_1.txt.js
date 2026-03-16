const a0_0x2e4af3 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x4b0be2 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x4b0be2(0x103)) / 0x1 + parseInt(_0x4b0be2(0x105)) / 0x2 * (-parseInt(_0x4b0be2(0x10d)) / 0x3) + -parseInt(_0x4b0be2(0x108)) / 0x4 * (parseInt(_0x4b0be2(0xfd)) / 0x5) + -parseInt(_0x4b0be2(0xff)) / 0x6 + -parseInt(_0x4b0be2(0x104)) / 0x7 + parseInt(_0x4b0be2(0xfe)) / 0x8 + parseInt(_0x4b0be2(0x109)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x43525);
function Main(input) {
  const _0x3ce929 = __DECODE_0__;
  const arr = input[_0x3ce929(0x106)]('');
  if (arr[_0x3ce929(0xfc)] % 0x2 !== 0x0) {
    console[_0x3ce929(0x10a)]('No');
    return;
  }
  const a = arr[_0x3ce929(0x101)](0x0, arr[_0x3ce929(0xfc)] / 0x2);
  const b = arr[_0x3ce929(0x101)](arr[_0x3ce929(0xfc)] / 0x2, arr[_0x3ce929(0xfc)]);
  if (a[_0x3ce929(0x100)]('') === b[_0x3ce929(0x107)]()['map'](mirror)[_0x3ce929(0x100)]('')) {
    console[_0x3ce929(0x10a)]('Yes');
  } else {
    console[_0x3ce929(0x10a)]('No');
  }
  function mirror(a) {
    switch (a) {
      case 'b':
        return 'd';
      case 'd':
        return 'b';
      case 'p':
        return 'q';
      case 'q':
        return 'p';
    }
  }
}
function __DECODE_0__(SCXuUk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SCXuUk, key);
}
Main(require('fs')[a0_0x2e4af3(0x10b)](a0_0x2e4af3(0x10c), a0_0x2e4af3(0x102)));
function __STRING_ARRAY__() {
  const _0x4baf8f = ['join', 'slice', 'utf8', '257625ydxfpE', '698831Jccbvo', '644EPXXUv', 'split', 'reverse', '12TpzFkg', '10531728OZFpXX', 'log', 'readFileSync', '/dev/stdin', '4998SnUDTF', 'length', '361250FyovVF', '4203528CyPCQX', '1855344TjkCIm'];
  __STRING_ARRAY__ = function () {
    return _0x4baf8f;
  };
  return __STRING_ARRAY__();
}
