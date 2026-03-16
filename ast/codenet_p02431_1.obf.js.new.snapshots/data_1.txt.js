var a0_0x3d63d8 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x7dd6a5 = ['15798OMWNLU', '2970pkOBvB', '1329455QtXvOW', '509146JDcGmc', 'push', 'trim', '370614NLRZhj', 'split', 'pop', '2051SELGYT', '/dev/stdin', '1740dpLota', '6JQNUbU', '20yWInFQ', '4hmvoEa', '713246wuPmre', '10920ecpEHQ', 'log', 'utf8', '39975QCAjkK'];
  __STRING_ARRAY__ = function () {
    return _0x7dd6a5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x50845a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x50845a(0x169)) / 0x1 + parseInt(_0x50845a(0x15e)) / 0x2 * (parseInt(_0x50845a(0x15b)) / 0x3) + -parseInt(_0x50845a(0x15d)) / 0x4 * (-parseInt(_0x50845a(0x165)) / 0x5) + -parseInt(_0x50845a(0x163)) / 0x6 * (-parseInt(_0x50845a(0x158)) / 0x7) + -parseInt(_0x50845a(0x15f)) / 0x8 * (parseInt(_0x50845a(0x164)) / 0x9) + -parseInt(_0x50845a(0x15c)) / 0xa * (-parseInt(_0x50845a(0x166)) / 0xb) + -parseInt(_0x50845a(0x15a)) / 0xc * (parseInt(_0x50845a(0x162)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8caef);
var input = require('fs')['readFileSync'](a0_0x3d63d8(0x159), a0_0x3d63d8(0x161));
var arr = input['trim']()[a0_0x3d63d8(0x16a)]('\x0a');
var Q = arr[0x0] - 0x0;
function __DECODE_0__(qMgGgO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qMgGgO, key);
}
var a = [];
var s = '';
for (var i = 0x1; i <= Q; i++) {
  var q = arr[i][a0_0x3d63d8(0x16a)]('\x20');
  if (q[0x0] == '0') {
    a[a0_0x3d63d8(0x167)](q[0x1] - 0x0);
  } else {
    if (q[0x0] == '1') {
      s += a[q[0x1]] - 0x0 + '\x0a';
    } else {
      a[a0_0x3d63d8(0x157)]();
    }
  }
}
console[a0_0x3d63d8(0x160)](s[a0_0x3d63d8(0x168)]());
