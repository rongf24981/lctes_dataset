const a0_0x2eeff2 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1c0802 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1c0802(0xb9)) / 0x1 * (parseInt(_0x1c0802(0xba)) / 0x2) + -parseInt(_0x1c0802(0xb3)) / 0x3 + parseInt(_0x1c0802(0xb6)) / 0x4 + parseInt(_0x1c0802(0xb8)) / 0x5 + parseInt(_0x1c0802(0xb7)) / 0x6 + parseInt(_0x1c0802(0xb1)) / 0x7 * (parseInt(_0x1c0802(0xaf)) / 0x8) + parseInt(_0x1c0802(0xb0)) / 0x9 * (-parseInt(_0x1c0802(0xad)) / 0xa);
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
const input = require('fs')[a0_0x2eeff2(0xae)]('/dev/stdin', a0_0x2eeff2(0xb4));
const arr = input[a0_0x2eeff2(0xb2)]('\x0a');
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
console[a0_0x2eeff2(0xb5)](regExp['test'](arr[0x0] + arr[0x0]) ? a0_0x2eeff2(0xbb) : 'No');
