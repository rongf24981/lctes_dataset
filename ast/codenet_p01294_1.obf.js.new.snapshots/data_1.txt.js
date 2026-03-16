var a0_0x40675a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xfba8a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xfba8a(0xcc)) / 0x1 * (parseInt(_0xfba8a(0xd5)) / 0x2) + -parseInt(_0xfba8a(0xd6)) / 0x3 * (-parseInt(_0xfba8a(0xdd)) / 0x4) + -parseInt(_0xfba8a(0xc7)) / 0x5 + parseInt(_0xfba8a(0xcd)) / 0x6 + parseInt(_0xfba8a(0xcf)) / 0x7 + -parseInt(_0xfba8a(0xcb)) / 0x8 + -parseInt(_0xfba8a(0xd4)) / 0x9;
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
var input = require('fs')[a0_0x40675a(0xc9)](a0_0x40675a(0xd8), a0_0x40675a(0xdc));
var arr = input[a0_0x40675a(0xd7)]()[a0_0x40675a(0xdb)]('\x0a');
while (!![]) {
  var [n, d] = arr[a0_0x40675a(0xd3)]()[a0_0x40675a(0xdb)]('\x20')[a0_0x40675a(0xd1)](Number);
  if (n == 0x0 && d == 0x0) {
    break;
  }
  var S = [];
  var C = [];
  for (var i = 0x0; i < n; i++) {
    var mc = arr[i]['split']('\x20');
    mc[a0_0x40675a(0xd3)]();
    var c = mc[a0_0x40675a(0xd1)](Number)[a0_0x40675a(0xc8)]();
    var sum = c[a0_0x40675a(0xca)] != 0x0 ? c[a0_0x40675a(0xda)]((a, b) => a + b) : 0x0;
    S[i] = sum;
    C[i] = c;
  }
  while (!![]) {
    var f = ![];
    for (var i = 0x0; i < S[a0_0x40675a(0xca)]; i++) {
      if (S[i] == 0x0) {
        continue;
      }
      S[i] -= C[i][0x0];
      if (Math[a0_0x40675a(0xd9)](...S) - Math[a0_0x40675a(0xce)](...S) <= d) {
        C[i][a0_0x40675a(0xd3)]();
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
  var sum = S[a0_0x40675a(0xda)]((a, b) => a + b);
  if (sum == 0x0) {
    console[a0_0x40675a(0xd0)](a0_0x40675a(0xd2));
  } else {
    console[a0_0x40675a(0xd0)]('No');
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
