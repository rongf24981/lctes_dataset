function __STRING_ARRAY__() {
  const _0x1d7695 = ['835908MMXydX', '10qgDkNt', '4765684NIzOqV', 'map', '7715835tnENTF', '8sVdoUf', 'sort', '5877XBhVGV', '4764405TJKLtT', '/dev/stdin', '6EWlArf', 'utf8', '1892BWdHEU', 'readFileSync', '22YAFSsA', '585383DRqfqd', 'split', 'forEach', '815596aORQqN'];
  __STRING_ARRAY__ = function () {
    return _0x1d7695;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(fiutXz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fiutXz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xab)) / 0x1 + parseInt(__DECODE_0__(0xae)) / 0x2 + parseInt(__DECODE_0__(0xa3)) / 0x3 * (parseInt(__DECODE_0__(0xa8)) / 0x4) + parseInt(__DECODE_0__(0xa4)) / 0x5 * (-parseInt(__DECODE_0__(0xa6)) / 0x6) + parseInt(__DECODE_0__(0xb1)) / 0x7 * (parseInt(__DECODE_0__(0xa1)) / 0x8) + parseInt(__DECODE_0__(0xb3)) / 0x9 * (-parseInt(__DECODE_0__(0xb0)) / 0xa) + parseInt(__DECODE_0__(0xaa)) / 0xb * (-parseInt(__DECODE_0__(0xaf)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9ef4e);
function main(input) {
  const args = input['split']('\x0a');
  const N = parseInt(args[0x0], 0xa);
  const sorted = args[0x1][__DECODE_0__(0xac)]('\x20')[__DECODE_0__(0xb2)](v => parseInt(v))[__DECODE_0__(0xa2)]((a, b) => b - a);
  var alice = 0x0;
  var bob = 0x0;
  sorted[__DECODE_0__(0xad)]((v, i) => {
    if ((i + 0x1) % 0x2 == 0x0) {
      bob += v;
    } else {
      alice += v;
    }
  });
  console['log'](alice - bob);
}
main(require('fs')[__DECODE_0__(0xa9)](__DECODE_0__(0xa5), __DECODE_0__(0xa7)));
