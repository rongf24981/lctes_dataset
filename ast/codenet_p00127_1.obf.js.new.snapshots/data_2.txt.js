(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x6e)) / 0x1 + -parseInt(__DECODE_0__(0x66)) / 0x2 * (parseInt(__DECODE_0__(0x69)) / 0x3) + -parseInt(__DECODE_0__(0x6f)) / 0x4 + parseInt(__DECODE_0__(0x75)) / 0x5 * (-parseInt(__DECODE_0__(0x65)) / 0x6) + -parseInt(__DECODE_0__(0x72)) / 0x7 * (-parseInt(__DECODE_0__(0x71)) / 0x8) + parseInt(__DECODE_0__(0x76)) / 0x9 * (parseInt(__DECODE_0__(0x6d)) / 0xa) + parseInt(__DECODE_0__(0x6c)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b39d);
var table = {};
table[0xb] = 'a';
table[0xc] = 'b';
table[0xd] = 'c';
function __STRING_ARRAY__() {
  var _0x48dfd4 = ['1468398xfTuif', 'split', 'log', '17858962mbmQAb', '3914530DbcdEm', '275117qIfbvM', '64832cmHYkP', 'replace', '8PXSikv', '1051659cqejwX', 'hasOwnProperty', 'match', '2995tadior', '18iXqBJU', '/dev/stdin', '7830UkwXzy', '4PpjpDh', 'forEach', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x48dfd4;
  };
  return __STRING_ARRAY__();
}
table[0xe] = 'd';
table[0xf] = 'e';
table[0x15] = 'f';
table[0x16] = 'g';
table[0x17] = 'h';
table[0x18] = 'i';
table[0x19] = 'j';
table[0x1f] = 'k';
table[0x20] = 'l';
table[0x21] = 'm';
table[0x22] = 'n';
table[0x23] = 'o';
table[0x29] = 'p';
table[0x2a] = 'q';
table[0x2b] = 'r';
table[0x2c] = 's';
table[0x2d] = 't';
table[0x33] = 'u';
table[0x34] = 'v';
table[0x35] = 'w';
table[0x36] = 'x';
table[0x37] = 'y';
table[0x3d] = 'z';
table[0x3e] = '.';
table[0x3f] = '?';
function __DECODE_0__(VInpKs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x65;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VInpKs, key);
}
table[0x40] = '!';
table[0x41] = '\x20';
var input = require('fs')['readFileSync'](__DECODE_0__(0x77), __DECODE_0__(0x68));
var Arr = input[__DECODE_0__(0x70)](/\n$/, '')[__DECODE_0__(0x6a)]('\x0a');
Arr[__DECODE_0__(0x67)](function (str) {
  str = str[__DECODE_0__(0x70)](/\d\d/g, function (s) {
    if (table[__DECODE_0__(0x73)](s)) {
      s = table[s];
    }
    return s;
  });
  if (str[__DECODE_0__(0x74)](/\d/)) {
    str = 'NA';
  }
  console[__DECODE_0__(0x6b)](str);
});
