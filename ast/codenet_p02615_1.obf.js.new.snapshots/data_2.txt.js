function __STRING_ARRAY__() {
  const _0x428f10 = ['6iPwWRY', 'map', 'readFileSync', 'env', '13116pikdlE', 'utf8', '9402633vvUTNk', '8rjmqiH', '141164ZaDKxp', '/dev/stdin', '51NFMPIK', 'split', '284NOYqqp', 'sort', '3553070HAHLKE', 'log', '8268350BJeThe', '13123VtNaqa', '4663nxVSBM', '7529326ihEkXB', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x428f10;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1cf)) / 0x1 * (-parseInt(__DECODE_0__(0x1c9)) / 0x2) + parseInt(__DECODE_0__(0x1c7)) / 0x3 * (parseInt(__DECODE_0__(0x1c5)) / 0x4) + parseInt(__DECODE_0__(0x1cb)) / 0x5 * (parseInt(__DECODE_0__(0x1bd)) / 0x6) + -parseInt(__DECODE_0__(0x1bb)) / 0x7 + parseInt(__DECODE_0__(0x1c4)) / 0x8 * (-parseInt(__DECODE_0__(0x1c3)) / 0x9) + parseInt(__DECODE_0__(0x1cd)) / 0xa + parseInt(__DECODE_0__(0x1ce)) / 0xb * (parseInt(__DECODE_0__(0x1c1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa0d9c);
function __DECODE_0__(LwKEuv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LwKEuv, key);
}
const main = input => {
  input = input['trim']()[__DECODE_0__(0x1c8)]('\x0a');
  let n = parseInt(input[0x0], 0xa) - 0x2;
  const nums = input[0x1][__DECODE_0__(0x1c8)]('\x20')[__DECODE_0__(0x1be)](Number)[__DECODE_0__(0x1ca)]((a, b) => b - a);
  let r = [0x1];
  for (n; n >= 0x2; n -= 0x2) {
    r[__DECODE_0__(0x1bc)](0x2);
  }
  r[__DECODE_0__(0x1bc)](n);
  return console[__DECODE_0__(0x1cc)](r['reduce']((a, b, i) => a + b * nums[i], 0x0));
};
process[__DECODE_0__(0x1c0)]['MYTEST'] ? test() : main(require('fs')[__DECODE_0__(0x1bf)](__DECODE_0__(0x1c6), __DECODE_0__(0x1c2)));
