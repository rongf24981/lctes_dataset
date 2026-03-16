function __DECODE_0__(RLPYBU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RLPYBU, key);
}
function __STRING_ARRAY__() {
  var _0x574b6c = ['3533189NrcGGq', '120zfqzpx', '1002354BOCFaO', 'length', '9161952NeOOrM', '21505rMYqig', 'second', '6545421BougMK', '76osLAOK', '9088815dDwxDS', 'map', '/dev/stdin', 'split', '8550213Mdaykq', '8sFuZpl', 'trim', 'log', '8ZMCPYy', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x574b6c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x10f)) / 0x1 * (-parseInt(__DECODE_0__(0x112)) / 0x2) + -parseInt(__DECODE_0__(0x10c)) / 0x3 * (parseInt(__DECODE_0__(0x118)) / 0x4) + -parseInt(__DECODE_0__(0x113)) / 0x5 + -parseInt(__DECODE_0__(0x10e)) / 0x6 + parseInt(__DECODE_0__(0x117)) / 0x7 * (parseInt(__DECODE_0__(0x11b)) / 0x8) + parseInt(__DECODE_0__(0x111)) / 0x9 + -parseInt(__DECODE_0__(0x10b)) / 0xa * (-parseInt(__DECODE_0__(0x11d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xed887);
function Main(input) {
  input = input[__DECODE_0__(0x116)]('\x0a')[__DECODE_0__(0x114)](Number);
  input[__DECODE_0__(0x11c)]();
  var n = arrsum(input);
  if (n == input[__DECODE_0__(0x10d)]) {
    n = 0x1;
  }
  if (n % 0x2 == 0x1) {
    console[__DECODE_0__(0x11a)]('first');
  } else {
    console[__DECODE_0__(0x11a)](__DECODE_0__(0x110));
  }
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x115), 'utf8')[__DECODE_0__(0x119)]());
function arrsum(arr) {
  var sum = 0x0;
  for (var i = 0x0, len = arr['length']; i < len; ++i) {
    sum += arr[i];
  }
  ;
  return sum;
}
