function __STRING_ARRAY__() {
  var _0x13821b = ['30149406QjDzAf', 'trim', 'utf8', 'split', '/dev/stdin', '5537337NhkVpG', '6oQTMhg', '4546dOcuKM', 'shift', '6136490EBjvQS', '820MZwPkA', '902951qFwJDD', 'log', '10310200ZVEIjQ', 'readFileSync', '22752rQseDQ'];
  __STRING_ARRAY__ = function () {
    return _0x13821b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rMBCsz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x81;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rMBCsz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x87)) / 0x1 * (parseInt(__DECODE_0__(0x8a)) / 0x2) + -parseInt(__DECODE_0__(0x85)) / 0x3 + -parseInt(__DECODE_0__(0x8f)) / 0x4 + -parseInt(__DECODE_0__(0x89)) / 0x5 + parseInt(__DECODE_0__(0x86)) / 0x6 * (parseInt(__DECODE_0__(0x8b)) / 0x7) + -parseInt(__DECODE_0__(0x8d)) / 0x8 + parseInt(__DECODE_0__(0x90)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xee18f);
var input = require('fs')[__DECODE_0__(0x8e)](__DECODE_0__(0x84), __DECODE_0__(0x82));
var Arr = input[__DECODE_0__(0x81)]()[__DECODE_0__(0x83)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x88)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var cnt = 0x0;
  while (n != 0x1) {
    cnt++;
    if (n % 0x2 == 0x0) {
      n = n / 0x2;
    } else {
      n = 0x3 * n + 0x1;
    }
  }
  console[__DECODE_0__(0x8c)](cnt);
}
