function __STRING_ARRAY__() {
  const _0x51f8cd = ['a\x20==\x20b', 'map', '18TZxFnt', '160NdlfNm', '9ctkUmj', '24jVMjDZ', 'a\x20<\x20b', 'log', 'utf-8', '3025MVFvCa', '3552OIKCIo', 'a\x20>\x20b', '333012HXqPTx', '375126iyxCFO', '210258QcAbTL', '690949JdXaIT', '/dev/stdin', '23985DrIPqV', 'split', '404704IMtshw'];
  __STRING_ARRAY__ = function () {
    return _0x51f8cd;
  };
  return __STRING_ARRAY__();
}
const a0_0x6e5b03 = __DECODE_0__;
function __DECODE_0__(FDaUsw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FDaUsw, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x33dc64 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x33dc64(0x1eb)) / 0x1 + parseInt(_0x33dc64(0x1ea)) / 0x2 + -parseInt(_0x33dc64(0x1f6)) / 0x3 * (parseInt(_0x33dc64(0x1f1)) / 0x4) + parseInt(_0x33dc64(0x1ef)) / 0x5 * (-parseInt(_0x33dc64(0x1f4)) / 0x6) + parseInt(_0x33dc64(0x1ed)) / 0x7 * (parseInt(_0x33dc64(0x1f7)) / 0x8) + parseInt(_0x33dc64(0x1ec)) / 0x9 * (-parseInt(_0x33dc64(0x1f5)) / 0xa) + -parseInt(_0x33dc64(0x1e7)) / 0xb * (-parseInt(_0x33dc64(0x1e8)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x37872);
function main(input) {
  const _0x300dd5 = __DECODE_0__;
  let nums = input[_0x300dd5(0x1f0)]('\x20')[_0x300dd5(0x1f3)](item => parseInt(item));
  if (nums[0x0] > nums[0x1]) {
    console['log'](_0x300dd5(0x1e9));
  } else {
    if (nums[0x0] < nums[0x1]) {
      console[_0x300dd5(0x1f9)](_0x300dd5(0x1f8));
    } else {
      console[_0x300dd5(0x1f9)](_0x300dd5(0x1f2));
    }
  }
}
main(require('fs')['readFileSync'](a0_0x6e5b03(0x1ee), a0_0x6e5b03(0x1e6)));
