function __STRING_ARRAY__() {
  var _0x8726d2 = ['27368XXqwTJ', '/dev/stdin', '27655116GzPlvC', '308GCVFPo', '1025451QBfPRH', '2001310WMlRGT', '11oYsVde', '2pRWhkY', '647403XhINtP', '8720172cVFGUQ', '12TJWNCv', '5PZVHns', 'readFileSync', 'utf8', '5803962xNbOAN'];
  __STRING_ARRAY__ = function () {
    return _0x8726d2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x151)) / 0x1 * (parseInt(__DECODE_0__(0x150)) / 0x2) + -parseInt(__DECODE_0__(0x14d)) / 0x3 * (-parseInt(__DECODE_0__(0x153)) / 0x4) + parseInt(__DECODE_0__(0x154)) / 0x5 * (-parseInt(__DECODE_0__(0x148)) / 0x6) + -parseInt(__DECODE_0__(0x14c)) / 0x7 * (-parseInt(__DECODE_0__(0x149)) / 0x8) + -parseInt(__DECODE_0__(0x152)) / 0x9 + -parseInt(__DECODE_0__(0x14e)) / 0xa + -parseInt(__DECODE_0__(0x14f)) / 0xb * (-parseInt(__DECODE_0__(0x14b)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaa1df);
function __DECODE_0__(IEFHGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x147;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IEFHGH, key);
}
function keta(num) {
  for (var i = 0x1; i <= 0x6; i++) {
    if (num < 0xa ** i) {
      return i % 0x2;
    }
  }
}
function Main(input) {
  var ans = 0x0;
  var cnt = 0x1;
  while (cnt <= input) {
    ans += keta(cnt);
    cnt++;
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x155)](__DECODE_0__(0x14a), __DECODE_0__(0x147)));
