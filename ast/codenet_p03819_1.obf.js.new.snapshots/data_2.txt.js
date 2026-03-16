(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11c)) / 0x1 * (-parseInt(__DECODE_0__(0x10e)) / 0x2) + -parseInt(__DECODE_0__(0x110)) / 0x3 * (-parseInt(__DECODE_0__(0x113)) / 0x4) + parseInt(__DECODE_0__(0x116)) / 0x5 + -parseInt(__DECODE_0__(0x119)) / 0x6 + parseInt(__DECODE_0__(0x10c)) / 0x7 * (-parseInt(__DECODE_0__(0x10d)) / 0x8) + -parseInt(__DECODE_0__(0x111)) / 0x9 + parseInt(__DECODE_0__(0x117)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb07af);
function Main(input) {
  input = input['split']('\x0a');
  var N = input[0x0]['split']('\x20')[0x0] - 0x0;
  var M = input[0x0]['split']('\x20')[0x1] - 0x0;
  var answer = new Array(M + 0x1);
  answer[__DECODE_0__(0x11d)](0x0);
  var line;
  for (var i = 0x1; i < input[__DECODE_0__(0x118)]; i++) {
    line = input[i][__DECODE_0__(0x112)]('\x20');
    line[0x1] -= 0x0;
    line[0x0] -= 0x0;
    for (var j = 0x1; j <= M; j++) {
      if (!(line[0x1] - line[0x0] < j - 0x1 && line[0x1] % j >= line[0x0] % j && line[0x0] % j > 0x0)) {
        answer[j]++;
      }
    }
  }
  answer[__DECODE_0__(0x115)]();
  console[__DECODE_0__(0x114)](answer[__DECODE_0__(0x11b)]('\x0a'));
}
Main(require('fs')[__DECODE_0__(0x11a)]('/dev/stdin', __DECODE_0__(0x10f)));
function __DECODE_0__(YFkrgu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YFkrgu, key);
}
function __STRING_ARRAY__() {
  var _0xcf3a78 = ['join', '5ZiKHKo', 'fill', '123977bZekkb', '192IywsUA', '352894vnaUpq', 'utf8', '2943ftGorU', '12958857KXDyzm', 'split', '2916sewgvN', 'log', 'shift', '2884325UGyxFg', '17321020GLJjjF', 'length', '7911306awJboG', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xcf3a78;
  };
  return __STRING_ARRAY__();
}
