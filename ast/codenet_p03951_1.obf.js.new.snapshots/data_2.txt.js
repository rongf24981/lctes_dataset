function __DECODE_0__(zfAIBp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zfAIBp, key);
}
function __STRING_ARRAY__() {
  var _0x4ca21d = ['split', '1142260oQyBxQ', 'length', 'substr', 'min', 'utf8', '4188860dSyiqW', '3824760vDdGrP', '412fVgXjO', '9cbPkat', '5173msdHqy', 'trim', '33467210sXIyoJ', 'readFileSync', '/dev/stdin', '12QYMAbx', '721203pHwRGo', 'log', '987705aldwVV'];
  __STRING_ARRAY__ = function () {
    return _0x4ca21d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x119)) / 0x1 * (parseInt(__DECODE_0__(0x117)) / 0x2) + -parseInt(__DECODE_0__(0x121)) / 0x3 + -parseInt(__DECODE_0__(0x123)) / 0x4 + -parseInt(__DECODE_0__(0x115)) / 0x5 + parseInt(__DECODE_0__(0x11e)) / 0x6 * (parseInt(__DECODE_0__(0x11f)) / 0x7) + parseInt(__DECODE_0__(0x116)) / 0x8 * (-parseInt(__DECODE_0__(0x118)) / 0x9) + parseInt(__DECODE_0__(0x11b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x87dba);
function Main(input) {
  input = input[__DECODE_0__(0x122)]('\x0a');
  var n = Number(input[0x0]);
  var ans = 0x0;
  for (var i = Math[__DECODE_0__(0x126)](input[0x1][__DECODE_0__(0x124)], input[0x2][__DECODE_0__(0x124)]); i != 0x0; i--) {
    if (input[0x1]['substr'](-0x1 * i) == input[0x2]['substr'](0x0, i) && input[0x1][__DECODE_0__(0x124)] + input[0x2][__DECODE_0__(0x124)] - i >= n) {
      ans = i;
      break;
    }
  }
  console[__DECODE_0__(0x120)]((input[0x1][__DECODE_0__(0x125)](0x0, input[0x1][__DECODE_0__(0x124)] - ans) + input[0x2])[__DECODE_0__(0x124)]);
}
Main(require('fs')[__DECODE_0__(0x11c)](__DECODE_0__(0x11d), __DECODE_0__(0x114))[__DECODE_0__(0x11a)]());
