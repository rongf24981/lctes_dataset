(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1d0)) / 0x1 * (-parseInt(__DECODE_0__(0x1da)) / 0x2) + parseInt(__DECODE_0__(0x1d2)) / 0x3 + -parseInt(__DECODE_0__(0x1d5)) / 0x4 * (parseInt(__DECODE_0__(0x1cf)) / 0x5) + -parseInt(__DECODE_0__(0x1dd)) / 0x6 * (parseInt(__DECODE_0__(0x1d8)) / 0x7) + -parseInt(__DECODE_0__(0x1db)) / 0x8 * (parseInt(__DECODE_0__(0x1d6)) / 0x9) + -parseInt(__DECODE_0__(0x1d4)) / 0xa + parseInt(__DECODE_0__(0x1d9)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc4b93);
const rl = require(__DECODE_0__(0x1dc))[__DECODE_0__(0x1d7)]({
  'input': process['stdin']
});
rl['on'](__DECODE_0__(0x1d3), line => {
  const param = line[__DECODE_0__(0x1d1)]('\x20');
  solve(Number(param[0x0]), Number(param[0x1]));
  rl['close']();
});
function __STRING_ARRAY__() {
  const _0x56098c = ['36996iUZepn', 'log', '220700PHPNjj', '413653tWkKPj', 'split', '1698504wqAZuM', 'line', '7613500lJnCXz', '60idPswW', '9buZYzL', 'createInterface', '1309NibGDz', '57679864GzcLhG', '6GXQaHb', '9492496LDhndp', 'readline'];
  __STRING_ARRAY__ = function () {
    return _0x56098c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(mduhaR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ce;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mduhaR, key);
}
function solve(x, y) {
  console[__DECODE_0__(0x1ce)](x + y / 0x2);
}
