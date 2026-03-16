function __DECODE_0__(LeBTQr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LeBTQr, key);
}
function __STRING_ARRAY__() {
  var _0x496bf4 = ['log', '1321824lbgEkx', 'replace', 'shift', 'forEach', '/dev/stdin', '5284905BSYmAs', '6350FYRGtv', 'utf8', '35jMucWN', '3134370UhHKiN', '450CzoMgy', 'push', '27720504wveJaI', '1893352FoVuZv', 'length', '1023730mpbRIE', 'trim', 'readFileSync', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x496bf4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x120)) / 0x1 + parseInt(__DECODE_0__(0x117)) / 0x2 * (-parseInt(__DECODE_0__(0x11b)) / 0x3) + -parseInt(__DECODE_0__(0x125)) / 0x4 + parseInt(__DECODE_0__(0x116)) / 0x5 + -parseInt(__DECODE_0__(0x11a)) / 0x6 + parseInt(__DECODE_0__(0x119)) / 0x7 * (-parseInt(__DECODE_0__(0x11e)) / 0x8) + parseInt(__DECODE_0__(0x11d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x92b1d);
var input = require('fs')[__DECODE_0__(0x122)](__DECODE_0__(0x115), __DECODE_0__(0x118));
var Arr = input[__DECODE_0__(0x121)]()[__DECODE_0__(0x123)]('\x0a');
var L = Arr[__DECODE_0__(0x113)]();
for (var i = 0x0; i < L; i++) {
  var str = Arr[i];
  str = str['replace'](/\-\>/g, 'A');
  str = str[__DECODE_0__(0x112)](/\<\-/g, 'Z');
  var m = str[__DECODE_0__(0x123)]('');
  var arr = [m[0x0]];
  var n = 0x1;
  m[__DECODE_0__(0x114)](function (v) {
    if (v == 'A') {
      n++;
    } else {
      if (v == 'Z') {
        n--;
      } else {
        if (n == 0x0) {
          arr['unshift'](v);
          n = 0x1;
        }
        if (n > arr[__DECODE_0__(0x11f)]) {
          arr[__DECODE_0__(0x11c)](v);
        }
      }
    }
  });
  console[__DECODE_0__(0x124)](arr['join'](''));
}
