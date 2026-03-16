(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1c5)) / 0x1 + parseInt(__DECODE_0__(0x1bf)) / 0x2 + parseInt(__DECODE_0__(0x1c6)) / 0x3 * (-parseInt(__DECODE_0__(0x1bc)) / 0x4) + parseInt(__DECODE_0__(0x1c1)) / 0x5 * (parseInt(__DECODE_0__(0x1c3)) / 0x6) + -parseInt(__DECODE_0__(0x1b7)) / 0x7 * (-parseInt(__DECODE_0__(0x1b8)) / 0x8) + -parseInt(__DECODE_0__(0x1c0)) / 0x9 * (-parseInt(__DECODE_0__(0x1bb)) / 0xa) + parseInt(__DECODE_0__(0x1b6)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x51bb3);
function __DECODE_0__(asezzC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(asezzC, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1bd)]()[__DECODE_0__(0x1b9)]('\x0a')[__DECODE_0__(0x1c2)](function (x) {
    return x['split']('\x20');
  });
  let M = parseInt(input[0x0][0x0], 0xa);
  let ans = -0x1;
  let tmp = 0x0;
  for (let i = 0x0; i < M; i++) {
    ans += parseInt(input[i + 0x1][0x1], 0xa);
    tmp += parseInt(input[i + 0x1][0x0], 0xa) * parseInt(input[i + 0x1][0x1], 0xa);
  }
  ans += Math[__DECODE_0__(0x1be)]((tmp - 0x1) / 0x9);
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x1c7)](__DECODE_0__(0x1c4), __DECODE_0__(0x1ba)));
function __STRING_ARRAY__() {
  const _0x191639 = ['utf8', '2380yAypYk', '559796QDvDDp', 'trim', 'floor', '408222cBdhXV', '19665lajEHD', '10WOaeRz', 'map', '25626xUEEmd', '/dev/stdin', '394712FVBhtH', '9Ngscta', 'readFileSync', '682704TnQHNY', '7rMJrie', '2836664JAZrZf', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x191639;
  };
  return __STRING_ARRAY__();
}
