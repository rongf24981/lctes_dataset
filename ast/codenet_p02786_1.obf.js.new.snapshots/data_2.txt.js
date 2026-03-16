(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x153)) / 0x1 + parseInt(__DECODE_0__(0x158)) / 0x2 * (-parseInt(__DECODE_0__(0x151)) / 0x3) + -parseInt(__DECODE_0__(0x155)) / 0x4 * (-parseInt(__DECODE_0__(0x157)) / 0x5) + parseInt(__DECODE_0__(0x150)) / 0x6 + -parseInt(__DECODE_0__(0x15a)) / 0x7 + parseInt(__DECODE_0__(0x152)) / 0x8 + parseInt(__DECODE_0__(0x14f)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x68786);
inp = require('fs')['readFileSync'](__DECODE_0__(0x156), 'utf8')['trim']()['split']('\x0a');
function __DECODE_0__(iWzamO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iWzamO, key);
}
H = inp[__DECODE_0__(0x159)]() * 0x1;
function __STRING_ARRAY__() {
  var _0x566eb4 = ['1017518SFDaeJ', 'shift', '3546088XQUfyy', '7331148zYhkuG', '2409018tGlFLL', '3yeWCGt', '2186488TTMDay', '80707QOVeOQ', 'pow', '236UrQmPC', '/dev/stdin', '2930cqzaor'];
  __STRING_ARRAY__ = function () {
    return _0x566eb4;
  };
  return __STRING_ARRAY__();
}
c = 0x1;
h = 0x2;
while (H >= h) {
  h *= 0x2;
  c++;
}
console['log'](Math[__DECODE_0__(0x154)](0x2, c) - 0x1);
