(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf9)) / 0x1 * (parseInt(__DECODE_0__(0xfe)) / 0x2) + -parseInt(__DECODE_0__(0x100)) / 0x3 + -parseInt(__DECODE_0__(0x107)) / 0x4 * (-parseInt(__DECODE_0__(0xf6)) / 0x5) + parseInt(__DECODE_0__(0x101)) / 0x6 * (-parseInt(__DECODE_0__(0xf8)) / 0x7) + -parseInt(__DECODE_0__(0xff)) / 0x8 + -parseInt(__DECODE_0__(0xfa)) / 0x9 + -parseInt(__DECODE_0__(0xfb)) / 0xa * (-parseInt(__DECODE_0__(0x105)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6c6cd);
var input = require('fs')[__DECODE_0__(0x106)](__DECODE_0__(0x103), __DECODE_0__(0xfd));
var arr = input[__DECODE_0__(0xfc)]()[__DECODE_0__(0x102)]('');
function __STRING_ARRAY__() {
  var _0x441a8c = ['8xqkdTJ', 'forEach', '2127340uanVgR', 'replace', '1680PCGTRA', '163veTOxV', '263880CkUwGT', '4410820eKZYSj', 'trim', 'utf8', '7996IYcqEX', '6360232CYDtIq', '1985988OyziVE', '11358Kwnxjd', 'split', '/dev/stdin', 'log', '22IapdWT', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x441a8c;
  };
  return __STRING_ARRAY__();
}
var x = '';
function __DECODE_0__(KMncTO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KMncTO, key);
}
arr[__DECODE_0__(0xf5)](function (v) {
  if (v == '0') {
    x += 'w';
  }
  if (v == '1') {
    x += '';
  }
  if (v == '2') {
    x += 'k';
  }
  if (v == '3') {
    x += 's';
  }
  if (v == '4') {
    x += 't';
  }
  if (v == '5') {
    x += 'n';
  }
  if (v == '6') {
    x += 'h';
  }
  if (v == '7') {
    x += 'm';
  }
  if (v == '8') {
    x += 'y';
  }
  if (v == '9') {
    x += 'r';
  }
  if (v == 'T') {
    x += 'a';
  }
  if (v == 'L') {
    x += 'i';
  }
  if (v == 'U') {
    x += 'u';
  }
  if (v == 'R') {
    x += 'e';
  }
  if (v == 'D') {
    x += 'o';
  }
});
x = x[__DECODE_0__(0xf7)](/wu/g, 'nn');
console[__DECODE_0__(0x104)](x);
