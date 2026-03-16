function __STRING_ARRAY__() {
  var _0x476b9e = ['511528PsNxbi', '70dHbSut', '45plUgwy', 'resume', '2645610GWkRJR', 'setEncoding', 'trim', 'end', '104278nxECuP', 'stdin', '547565ddJnvR', 'log', 'data', '49Sbneqj', '3pevhXa', '224420Vboedf', '2660364mpegAt', '1586431XecsXe'];
  __STRING_ARRAY__ = function () {
    return _0x476b9e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDRaUA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDRaUA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb3)) / 0x1 + -parseInt(__DECODE_0__(0xb1)) / 0x2 * (parseInt(__DECODE_0__(0xa5)) / 0x3) + -parseInt(__DECODE_0__(0xa6)) / 0x4 * (-parseInt(__DECODE_0__(0xab)) / 0x5) + parseInt(__DECODE_0__(0xad)) / 0x6 + -parseInt(__DECODE_0__(0xa4)) / 0x7 * (parseInt(__DECODE_0__(0xa9)) / 0x8) + parseInt(__DECODE_0__(0xa7)) / 0x9 + -parseInt(__DECODE_0__(0xaa)) / 0xa * (parseInt(__DECODE_0__(0xa8)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x444d8);
function main() {
  var debt = 0x186a0;
  for (var i = 0x0; i < input[__DECODE_0__(0xaf)]() - 0x0; i++) {
    debt = Math['ceil'](debt * 1.05 / 0x3e8) * 0x3e8;
  }
  console[__DECODE_0__(0xa2)](debt);
}
var input = '';
process['stdin'][__DECODE_0__(0xac)]();
process['stdin'][__DECODE_0__(0xae)]('utf8');
process[__DECODE_0__(0xb2)]['on'](__DECODE_0__(0xa3), function (chunk) {
  input += chunk;
});
process['stdin']['on'](__DECODE_0__(0xb0), function () {
  main();
});
