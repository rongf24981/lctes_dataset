function __DECODE_0__(GqwpxX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GqwpxX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x130)) / 0x1 * (-parseInt(__DECODE_0__(0x12f)) / 0x2) + -parseInt(__DECODE_0__(0x132)) / 0x3 + -parseInt(__DECODE_0__(0x138)) / 0x4 + parseInt(__DECODE_0__(0x133)) / 0x5 + -parseInt(__DECODE_0__(0x13b)) / 0x6 * (parseInt(__DECODE_0__(0x137)) / 0x7) + parseInt(__DECODE_0__(0x135)) / 0x8 + parseInt(__DECODE_0__(0x139)) / 0x9 * (parseInt(__DECODE_0__(0x134)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x41a84);
function Main(input) {
  input = input[__DECODE_0__(0x136)]();
  input = input[__DECODE_0__(0x13c)]('\x0a');
  var A = input[0x0][__DECODE_0__(0x13c)]('');
  var B = input[0x1][__DECODE_0__(0x13c)]('');
  if (A[0x0] == B[0x2] && A[0x1] == B[0x1] && A[0x2] == B[0x0]) {
    console['log'](__DECODE_0__(0x131));
  } else {
    console[__DECODE_0__(0x13e)]('NO');
  }
}
function __STRING_ARRAY__() {
  var _0x1f4054 = ['2789297FBZamX', '1028220pLsjjd', '953559YxLyAX', 'readFileSync', '6xgPPrS', 'split', 'utf8', 'log', '2pujbxG', '323594twDZJV', 'YES', '47817AOCTxn', '1813075Jhpiyi', '70gNSsHT', '1277752NehYiJ', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x1f4054;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x13a)]('/dev/stdin', __DECODE_0__(0x13d)));
