function __DECODE_0__(pgaNCL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x147;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pgaNCL, key);
}
const a0_0x32b516 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x60a734 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x60a734(0x14c)) / 0x1 * (parseInt(_0x60a734(0x151)) / 0x2) + parseInt(_0x60a734(0x147)) / 0x3 + -parseInt(_0x60a734(0x14f)) / 0x4 * (-parseInt(_0x60a734(0x14d)) / 0x5) + parseInt(_0x60a734(0x152)) / 0x6 + parseInt(_0x60a734(0x14a)) / 0x7 * (-parseInt(_0x60a734(0x148)) / 0x8) + -parseInt(_0x60a734(0x149)) / 0x9 + -parseInt(_0x60a734(0x155)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xebfe5);
function main(input) {
  const _0x513c8a = __DECODE_0__;
  const nums = input['split']('\x20');
  if (nums[_0x513c8a(0x156)]('5') != -0x1) {
    nums['splice'](nums[_0x513c8a(0x156)]('5'), 0x1);
  }
  if (nums[_0x513c8a(0x156)]('5') != -0x1) {
    nums[_0x513c8a(0x150)](nums['indexOf']('5'), 0x1);
  }
  if (nums[_0x513c8a(0x156)]('7') != -0x1) {
    nums[_0x513c8a(0x150)](nums[_0x513c8a(0x156)]('7'), 0x1);
  }
  console[_0x513c8a(0x154)](nums[0x0] == null ? _0x513c8a(0x14b) : 'NO');
}
function __STRING_ARRAY__() {
  const _0x4a031f = ['3176bPCwLE', 'splice', '4NekeQw', '3963636klGMHs', 'readFileSync', 'log', '14374830llbUXu', 'indexOf', '3683106FOhQcS', '8UZWzuI', '14369085lJsZmA', '1711241sjbYDU', 'YES', '726233rEFPIN', '5695EXcdPl', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x4a031f;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x32b516(0x153)](a0_0x32b516(0x14e), 'utf8'));
