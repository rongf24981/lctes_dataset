(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e0)) / 0x1 * (parseInt(__DECODE_0__(0x1ee)) / 0x2) + parseInt(__DECODE_0__(0x1e1)) / 0x3 * (-parseInt(__DECODE_0__(0x1dd)) / 0x4) + parseInt(__DECODE_0__(0x1de)) / 0x5 * (-parseInt(__DECODE_0__(0x1e9)) / 0x6) + -parseInt(__DECODE_0__(0x1e8)) / 0x7 + -parseInt(__DECODE_0__(0x1f1)) / 0x8 * (parseInt(__DECODE_0__(0x1ed)) / 0x9) + parseInt(__DECODE_0__(0x1e7)) / 0xa + parseInt(__DECODE_0__(0x1e3)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82426);
function __DECODE_0__(tRHpyV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1dd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tRHpyV, key);
}
var abc = __DECODE_0__(0x1e5)['split']('');
var input = require('fs')[__DECODE_0__(0x1ea)](__DECODE_0__(0x1eb), __DECODE_0__(0x1ec));
var Arr = input['trim']()[__DECODE_0__(0x1f0)]('\x0a');
function __STRING_ARRAY__() {
  var _0x3049fa = ['indexOf', 'split', '16XDFuoU', '58948QdOOOD', '14055VJdCnP', 'join', '450161lRjNZA', '141HKkJDR', 'map', '22536514aAjaGe', 'shift', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'length', '2110730kIgdUd', '154882tRMwha', '258xxUEQy', 'readFileSync', '/dev/stdin', 'utf8', '1982277IFrXis', '2vOEXOM'];
  __STRING_ARRAY__ = function () {
    return _0x3049fa;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = Arr['shift']() - 0x0;
  if (n == 0x0) {
    break;
  }
  var k = Arr[__DECODE_0__(0x1e4)]()[__DECODE_0__(0x1f0)]('\x20')[__DECODE_0__(0x1e2)](Number);
  var arr = Arr[__DECODE_0__(0x1e4)]()['split']('');
  var j = 0x0;
  for (var i = 0x0; i < arr[__DECODE_0__(0x1e6)]; i++) {
    var num = abc[__DECODE_0__(0x1ef)](arr[i]) - k[i % k[__DECODE_0__(0x1e6)]];
    if (num < 0x0) {
      num += abc['length'];
    }
    arr[i] = abc[num];
  }
  console['log'](arr[__DECODE_0__(0x1df)](''));
}
