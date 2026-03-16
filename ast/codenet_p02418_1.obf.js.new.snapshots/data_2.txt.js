(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb9)) / 0x1 * (parseInt(__DECODE_0__(0xba)) / 0x2) + -parseInt(__DECODE_0__(0xb3)) / 0x3 + parseInt(__DECODE_0__(0xb6)) / 0x4 + parseInt(__DECODE_0__(0xb8)) / 0x5 + parseInt(__DECODE_0__(0xb7)) / 0x6 + parseInt(__DECODE_0__(0xb1)) / 0x7 * (parseInt(__DECODE_0__(0xaf)) / 0x8) + parseInt(__DECODE_0__(0xb0)) / 0x9 * (-parseInt(__DECODE_0__(0xad)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa3b15);
function __STRING_ARRAY__() {
  const _0x561429 = ['4287444tHeSmo', '2732466akRaTe', '1842955ZXJcPP', '1rQQKeG', '1027762hRfRbx', 'Yes', '14506070snbayQ', 'readFileSync', '225136eqdCpV', '9xkmBfo', '154kNwnHQ', 'split', '2723328zVPkAs', 'utf8', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x561429;
  };
  return __STRING_ARRAY__();
}
const input = require('fs')[__DECODE_0__(0xae)]('/dev/stdin', __DECODE_0__(0xb4));
const arr = input[__DECODE_0__(0xb2)]('\x0a');
function __DECODE_0__(WNxSVo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xad;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WNxSVo, key);
}
const regExp = new RegExp(arr[0x1]);
console[__DECODE_0__(0xb5)](regExp['test'](arr[0x0] + arr[0x0]) ? __DECODE_0__(0xbb) : 'No');
