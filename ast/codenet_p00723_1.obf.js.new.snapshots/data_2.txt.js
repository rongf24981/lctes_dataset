function __STRING_ARRAY__() {
  var _0x43b87d = ['keys', '18rgPLNS', 'trim', '15521YICrqq', 'utf8', 'reverse', 'push', '1224456oxdPmg', '199892lBDBFk', 'shift', '5AuBumn', '1566882IKcwuR', '840399khCazq', '/dev/stdin', 'length', 'join', 'split', '1000489grxZgB', '420688GYAFEs'];
  __STRING_ARRAY__ = function () {
    return _0x43b87d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a6)) / 0x1 + parseInt(__DECODE_0__(0x1a2)) / 0x2 + -parseInt(__DECODE_0__(0x1af)) / 0x3 + parseInt(__DECODE_0__(0x1ab)) / 0x4 + -parseInt(__DECODE_0__(0x1ad)) / 0x5 * (parseInt(__DECODE_0__(0x1ae)) / 0x6) + parseInt(__DECODE_0__(0x1b4)) / 0x7 + parseInt(__DECODE_0__(0x1aa)) / 0x8 * (parseInt(__DECODE_0__(0x1a4)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x253ed);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1b0), __DECODE_0__(0x1a7));
function __DECODE_0__(uzSXMr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uzSXMr, key);
}
var Arr = input[__DECODE_0__(0x1a5)]()[__DECODE_0__(0x1b3)]('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
  var str = Arr[__DECODE_0__(0x1ac)]();
  var arr = [];
  for (var i = 0x1; i < str[__DECODE_0__(0x1b1)]; i++) {
    arr[__DECODE_0__(0x1a9)]([str['slice'](0x0, i), str['slice'](i, str[__DECODE_0__(0x1b1)])]);
  }
  var obj = {};
  for (var i = 0x0; i < arr[__DECODE_0__(0x1b1)]; i++) {
    var A = arr[i][0x0];
    var B = arr[i][0x1];
    var a = A[__DECODE_0__(0x1b3)]('')['reverse']()[__DECODE_0__(0x1b2)]('');
    var b = B[__DECODE_0__(0x1b3)]('')[__DECODE_0__(0x1a8)]()[__DECODE_0__(0x1b2)]('');
    obj[A + B] = !![];
    obj[A + b] = !![];
    obj[a + B] = !![];
    obj[a + b] = !![];
    obj[B + A] = !![];
    obj[B + a] = !![];
    obj[b + A] = !![];
    obj[b + a] = !![];
  }
  console['log'](Object[__DECODE_0__(0x1a3)](obj)[__DECODE_0__(0x1b1)]);
}
