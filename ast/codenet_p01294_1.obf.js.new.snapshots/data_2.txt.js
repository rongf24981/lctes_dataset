(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xcc)) / 0x1 * (parseInt(__DECODE_0__(0xd5)) / 0x2) + -parseInt(__DECODE_0__(0xd6)) / 0x3 * (-parseInt(__DECODE_0__(0xdd)) / 0x4) + -parseInt(__DECODE_0__(0xc7)) / 0x5 + parseInt(__DECODE_0__(0xcd)) / 0x6 + parseInt(__DECODE_0__(0xcf)) / 0x7 + -parseInt(__DECODE_0__(0xcb)) / 0x8 + -parseInt(__DECODE_0__(0xd4)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x37257);
var input = require('fs')[__DECODE_0__(0xc9)](__DECODE_0__(0xd8), __DECODE_0__(0xdc));
var arr = input[__DECODE_0__(0xd7)]()[__DECODE_0__(0xdb)]('\x0a');
while (!![]) {
  var [n, d] = arr[__DECODE_0__(0xd3)]()[__DECODE_0__(0xdb)]('\x20')[__DECODE_0__(0xd1)](Number);
  if (n == 0x0 && d == 0x0) {
    break;
  }
  var S = [];
  var C = [];
  for (var i = 0x0; i < n; i++) {
    var mc = arr[i]['split']('\x20');
    mc[__DECODE_0__(0xd3)]();
    var c = mc[__DECODE_0__(0xd1)](Number)[__DECODE_0__(0xc8)]();
    var sum = c[__DECODE_0__(0xca)] != 0x0 ? c[__DECODE_0__(0xda)]((a, b) => a + b) : 0x0;
    S[i] = sum;
    C[i] = c;
  }
  while (!![]) {
    var f = ![];
    for (var i = 0x0; i < S[__DECODE_0__(0xca)]; i++) {
      if (S[i] == 0x0) {
        continue;
      }
      S[i] -= C[i][0x0];
      if (Math[__DECODE_0__(0xd9)](...S) - Math[__DECODE_0__(0xce)](...S) <= d) {
        C[i][__DECODE_0__(0xd3)]();
        f = !![];
        break;
      } else {
        S[i] += C[i][0x0];
      }
    }
    if (f == ![]) {
      break;
    }
  }
  var sum = S[__DECODE_0__(0xda)]((a, b) => a + b);
  if (sum == 0x0) {
    console[__DECODE_0__(0xd0)](__DECODE_0__(0xd2));
  } else {
    console[__DECODE_0__(0xd0)]('No');
  }
  arr = arr['slice'](n);
}
function __DECODE_0__(uYunQC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uYunQC, key);
}
function __STRING_ARRAY__() {
  var _0x51c9b7 = ['trim', '/dev/stdin', 'max', 'reduce', 'split', 'utf8', '882584YOVkSK', '100155BdTaoX', 'reverse', 'readFileSync', 'length', '3175152PopSzP', '246bCelxD', '2512056MpgBQX', 'min', '2727921PGJueF', 'log', 'map', 'Yes', 'shift', '4935015mPZnMA', '1318REFoFy', '3hTxaeG'];
  __STRING_ARRAY__ = function () {
    return _0x51c9b7;
  };
  return __STRING_ARRAY__();
}
