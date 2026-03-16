(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9e)) / 0x1 * (-parseInt(__DECODE_0__(0xa0)) / 0x2) + -parseInt(__DECODE_0__(0x99)) / 0x3 + -parseInt(__DECODE_0__(0x9b)) / 0x4 * (-parseInt(__DECODE_0__(0xa1)) / 0x5) + parseInt(__DECODE_0__(0x9d)) / 0x6 * (parseInt(__DECODE_0__(0x96)) / 0x7) + parseInt(__DECODE_0__(0xa6)) / 0x8 + -parseInt(__DECODE_0__(0xa3)) / 0x9 * (parseInt(__DECODE_0__(0x9f)) / 0xa) + -parseInt(__DECODE_0__(0xa2)) / 0xb * (parseInt(__DECODE_0__(0x9c)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe45d9);
var input = require('fs')['readFileSync'](__DECODE_0__(0xa5), 'utf8');
function __STRING_ARRAY__() {
  var _0x12ba15 = ['map', '0\x200', '3052PJmcLX', 'split', 'sqrt', '5576280YplNZi', 'shift', '8QepSUw', '544596msqVDi', '11874szYTWp', '129QZjVef', '2833080QAiKfA', '16662SgVbNg', '1743145xcfdxC', '22OsiefO', '45JOUbfE', 'join', '/dev/stdin', '13333200OWUWPQ'];
  __STRING_ARRAY__ = function () {
    return _0x12ba15;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(eIfjeO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x94;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eIfjeO, key);
}
var arr = input['trim']()[__DECODE_0__(0x97)]('\x0a');
while (!![]) {
  var pn = arr[__DECODE_0__(0x9a)]()['split']('\x20')[__DECODE_0__(0x94)](Number);
  if (pn[__DECODE_0__(0xa4)]('\x20') == __DECODE_0__(0x95)) {
    break;
  }
  var p = Math[__DECODE_0__(0x98)](pn[0x0]);
  var n = pn[0x1];
  var max = 0x0;
  var min = Infinity;
  var ans = [];
  for (var i = 0x1; i <= n; i++) {
    for (var j = 0x1; j <= n; j++) {
      var v = i / j;
      if (p > v && max < v) {
        max = v;
        ans[0x1] = i + '/' + j;
      } else {
        if (p < v && min > v) {
          min = v;
          ans[0x0] = i + '/' + j;
        }
      }
    }
  }
  console['log'](ans[__DECODE_0__(0xa4)]('\x20'));
}
