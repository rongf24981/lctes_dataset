function __STRING_ARRAY__() {
  var _0x1d2f2f = ['26bFZqGM', '946885cwyNCy', 'log', 'readFileSync', 'Yes', '54690fNKeVZ', 'length', '29790YJvqGd', 'utf8', '9YwJxYA', '31920afmgxY', 'split', '5651992HEaYuO', '3846924zWvdOO', '434SguadW', '2288GIHjwM', '203217NwBKGz'];
  __STRING_ARRAY__ = function () {
    return _0x1d2f2f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IiUNjC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IiUNjC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x117)) / 0x1 * (-parseInt(__DECODE_0__(0x110)) / 0x2) + parseInt(__DECODE_0__(0x10f)) / 0x3 + parseInt(__DECODE_0__(0x11d)) / 0x4 + -parseInt(__DECODE_0__(0x111)) / 0x5 + parseInt(__DECODE_0__(0x115)) / 0x6 * (-parseInt(__DECODE_0__(0x11e)) / 0x7) + -parseInt(__DECODE_0__(0x11c)) / 0x8 * (parseInt(__DECODE_0__(0x119)) / 0x9) + -parseInt(__DECODE_0__(0x11a)) / 0xa * (-parseInt(__DECODE_0__(0x10e)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x97496);
function Main(input) {
  var input = input[__DECODE_0__(0x11b)]('\x0a');
  var string = input[0x0];
  var c;
  var f;
  var Cfound = 0x0;
  for (var i = 0x0; i < string[__DECODE_0__(0x116)]; i++) {
    if (string[i] == 'C' && !Cfound) {
      c = i;
      Cfound++;
    }
    ;
    if (Cfound && string[i] == 'F') {
      f = i;
      return console['log'](__DECODE_0__(0x114));
    }
  }
  ;
  return console[__DECODE_0__(0x112)]('No');
}
Main(require('fs')[__DECODE_0__(0x113)]('/dev/stdin', __DECODE_0__(0x118)));
