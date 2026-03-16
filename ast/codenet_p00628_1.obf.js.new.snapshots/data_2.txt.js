function __DECODE_0__(YsZDdW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YsZDdW, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x187)) / 0x1 + parseInt(__DECODE_0__(0x17d)) / 0x2 * (parseInt(__DECODE_0__(0x17c)) / 0x3) + -parseInt(__DECODE_0__(0x188)) / 0x4 * (-parseInt(__DECODE_0__(0x185)) / 0x5) + -parseInt(__DECODE_0__(0x181)) / 0x6 + parseInt(__DECODE_0__(0x184)) / 0x7 * (-parseInt(__DECODE_0__(0x18a)) / 0x8) + parseInt(__DECODE_0__(0x182)) / 0x9 * (-parseInt(__DECODE_0__(0x189)) / 0xa) + -parseInt(__DECODE_0__(0x18c)) / 0xb * (-parseInt(__DECODE_0__(0x17e)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5cb01);
var input = require('fs')[__DECODE_0__(0x183)]('/dev/stdin', __DECODE_0__(0x186));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x180)]('\x0a');
function __STRING_ARRAY__() {
  var _0xe7f30b = ['3jhZUWi', '995312azdiPg', '1174116ibUfHk', 'join', 'split', '2693136FmXLiB', '3088080pGjOfw', 'readFileSync', '49JkLkZZ', '655DfgPyJ', 'utf8', '676981aQdKkC', '1832OdaKuJ', '10saHCZi', '425576FvjPpk', 'length', '187MmPSds', 'log'];
  __STRING_ARRAY__ = function () {
    return _0xe7f30b;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var str = Arr['shift']();
  if (str == 'END\x20OF\x20INPUT') {
    break;
  }
  var arr = str[__DECODE_0__(0x180)]('\x20');
  arr['forEach'](function (v, i) {
    arr[i] = v[__DECODE_0__(0x18b)];
  });
  console[__DECODE_0__(0x17b)](arr[__DECODE_0__(0x17f)](''));
}
