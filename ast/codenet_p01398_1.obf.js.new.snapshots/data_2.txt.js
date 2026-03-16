(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb2)) / 0x1 + parseInt(__DECODE_0__(0xa8)) / 0x2 + parseInt(__DECODE_0__(0xad)) / 0x3 + parseInt(__DECODE_0__(0xa6)) / 0x4 + parseInt(__DECODE_0__(0xb8)) / 0x5 * (parseInt(__DECODE_0__(0xa5)) / 0x6) + -parseInt(__DECODE_0__(0xaf)) / 0x7 + parseInt(__DECODE_0__(0xb4)) / 0x8 * (-parseInt(__DECODE_0__(0xb6)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x80e52);
var objStr = {};
var objNum = {};
var abc = __DECODE_0__(0xa3)['split']('');
function __STRING_ARRAY__() {
  var _0x427690 = ['shift', '5032285zQJRay', 'abcdefghijklmnopqrstuvwxyz', 'push', '6fjeUhq', '1981732YPZyne', 'reverse', '1569100KtJdGC', 'utf8', 'forEach', '/dev/stdin', 'map', '2708529lOteru', 'split', '1455055UwFlbR', 'readFileSync', 'trim', '869665WTuucD', 'length', '11384qEtcca', 'join', '10017CKUNgH'];
  __STRING_ARRAY__ = function () {
    return _0x427690;
  };
  return __STRING_ARRAY__();
}
abc[__DECODE_0__(0xaa)](function (v, i) {
  objStr[v] = i;
  objNum[i] = v;
});
var input = require('fs')[__DECODE_0__(0xb0)](__DECODE_0__(0xab), __DECODE_0__(0xa9));
function __DECODE_0__(UScmox, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UScmox, key);
}
var Arr = input[__DECODE_0__(0xb1)]()['split']('\x0a');
while (!![]) {
  var N = Arr[__DECODE_0__(0xb7)]() - 0x0;
  if (N == 0x0) {
    break;
  }
  var str = Arr[__DECODE_0__(0xb7)]();
  var AB = [];
  for (var i = 0x0; i < N; i++) {
    var ab = Arr[__DECODE_0__(0xb7)]()[__DECODE_0__(0xae)]('\x20')[__DECODE_0__(0xac)](Number);
    AB[__DECODE_0__(0xa4)](ab);
  }
  AB[__DECODE_0__(0xa7)]();
  var s = str[__DECODE_0__(0xae)]('');
  for (var i = 0x0; i < N; i++) {
    var ab = AB[i];
    var plus = ab[0x1] - ab[0x0];
    var m1 = s[ab[0x0] - 0x1];
    var m2 = s[ab[0x1] - 0x1];
    var n1 = objStr[m1] + plus;
    var n2 = objStr[m2] + plus;
    s[ab[0x0] - 0x1] = objNum[n2 % abc[__DECODE_0__(0xb3)]];
    s[ab[0x1] - 0x1] = objNum[n1 % abc['length']];
  }
  console['log'](s[__DECODE_0__(0xb5)](''));
}
