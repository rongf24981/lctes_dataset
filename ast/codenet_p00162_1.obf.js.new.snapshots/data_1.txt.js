var a0_0x4d6c62 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0xe95459 = ['360XkVoZm', '241315Kwydym', '46mwLVHY', '/dev/stdin', 'log', '1576855SswmiN', '34980rVXJSb', 'split', '8JSvbaF', 'map', 'replace', 'readFileSync', '1853328kZuvTB', '2532TDsdoG', '3907590MRnzsK', '4887711lltTiZ'];
  __STRING_ARRAY__ = function () {
    return _0xe95459;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x30df26 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x30df26(0x145)) / 0x1 + -parseInt(_0x30df26(0x146)) / 0x2 * (-parseInt(_0x30df26(0x141)) / 0x3) + parseInt(_0x30df26(0x14a)) / 0x4 * (-parseInt(_0x30df26(0x144)) / 0x5) + parseInt(_0x30df26(0x140)) / 0x6 + parseInt(_0x30df26(0x149)) / 0x7 + -parseInt(_0x30df26(0x14c)) / 0x8 * (-parseInt(_0x30df26(0x143)) / 0x9) + -parseInt(_0x30df26(0x142)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4d878);
function hamming() {
  var obj = {};
  for (var i = 0x1; i <= 0xf4240; i++) {
    var h = i;
    while (h % 0x2 == 0x0) {
      h /= 0x2;
    }
    while (h % 0x3 == 0x0) {
      h /= 0x3;
    }
    while (h % 0x5 == 0x0) {
      h /= 0x5;
    }
    if (h == 0x1) {
      obj[i] = !![];
    }
  }
  return obj;
}
var Numbers = hamming();
var input = require('fs')[a0_0x4d6c62(0x13f)](a0_0x4d6c62(0x147), 'utf8');
function __DECODE_0__(gedcsX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gedcsX, key);
}
var Arr = input[a0_0x4d6c62(0x13e)](/\n$/, '')[a0_0x4d6c62(0x14b)]('\x0a');
while (!![]) {
  var mn = Arr['shift']()[a0_0x4d6c62(0x14b)]('\x20')[a0_0x4d6c62(0x13d)](Number);
  if (mn[0x0] == 0x0) {
    break;
  }
  var cnt = 0x0;
  for (var i = mn[0x0]; i <= mn[0x1]; i++) {
    if (Numbers[i]) {
      cnt++;
    }
  }
  console[a0_0x4d6c62(0x148)](cnt);
}
