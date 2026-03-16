function __DECODE_0__(bLzNaG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bLzNaG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x15e)) / 0x1 + parseInt(__DECODE_0__(0x15d)) / 0x2 * (parseInt(__DECODE_0__(0x16c)) / 0x3) + -parseInt(__DECODE_0__(0x164)) / 0x4 * (-parseInt(__DECODE_0__(0x161)) / 0x5) + -parseInt(__DECODE_0__(0x168)) / 0x6 * (parseInt(__DECODE_0__(0x169)) / 0x7) + parseInt(__DECODE_0__(0x15c)) / 0x8 * (-parseInt(__DECODE_0__(0x16b)) / 0x9) + parseInt(__DECODE_0__(0x160)) / 0xa + parseInt(__DECODE_0__(0x16d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x246d3);
var input = require('fs')[__DECODE_0__(0x165)](__DECODE_0__(0x166), __DECODE_0__(0x163));
var arr = input['trim']()['split']('\x0a');
var n = arr[__DECODE_0__(0x162)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x276cc9 = ['utf8', '88NcyxTH', 'readFileSync', '/dev/stdin', 'map', '317964VobRsB', '35grTaMC', 'trim', '275067aoELnQ', '551505NkmYmw', '3946261ZNTcKP', '32olUNqd', '2NHxmmi', '288435igReam', 'split', '758480MeILmT', '46915vQyfRg', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x276cc9;
  };
  return __STRING_ARRAY__();
}
var a = arr[__DECODE_0__(0x162)]()[__DECODE_0__(0x15f)]('\x20')['map'](Number);
var q = arr[__DECODE_0__(0x162)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
  var [b, e, k] = arr[i]['split']('\x20')[__DECODE_0__(0x167)](Number);
  var cnt = 0x0;
  for (var j = b; j < e; j++) {
    if (a[j] == k) {
      cnt++;
    }
  }
  s += cnt + '\x0a';
}
console['log'](s[__DECODE_0__(0x16a)]());
