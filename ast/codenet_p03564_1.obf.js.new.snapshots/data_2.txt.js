function __STRING_ARRAY__() {
  var _0x4b9166 = ['20643CniPlD', '99670xPsDgY', '1577862qhBhBM', 'setEncoding', 'stdin', '36386UIeNhO', '6827712fCmWZH', '738168FYijxp', '/dev/stdin', 'utf8', 'split', '15LiwCzD', '681064CJFSoG'];
  __STRING_ARRAY__ = function () {
    return _0x4b9166;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x97)) / 0x1 + parseInt(__DECODE_0__(0x99)) / 0x2 + -parseInt(__DECODE_0__(0x98)) / 0x3 + -parseInt(__DECODE_0__(0x92)) / 0x4 + -parseInt(__DECODE_0__(0x96)) / 0x5 * (-parseInt(__DECODE_0__(0x9a)) / 0x6) + parseInt(__DECODE_0__(0x9d)) / 0x7 + -parseInt(__DECODE_0__(0x9e)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7538d);
function __DECODE_0__(Qalmje, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x92;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Qalmje, key);
}
process['stdin']['resume']();
process[__DECODE_0__(0x9c)][__DECODE_0__(0x9b)](__DECODE_0__(0x94));
function Main(input) {
  var tmp = input[__DECODE_0__(0x95)]('\x0a');
  var line0 = tmp[0x0]['split']('\x20');
  var line1 = tmp[0x1][__DECODE_0__(0x95)]('\x20');
  var n = Number(line0[0x0]);
  var k = Number(line1[0x0]);
  var ans = 0x1;
  for (var i = 0x1; i <= n; i++) {
    if (ans < k) {
      ans *= 0x2;
    } else {
      ans += k;
    }
  }
  console['log'](ans);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x93), __DECODE_0__(0x94)));
