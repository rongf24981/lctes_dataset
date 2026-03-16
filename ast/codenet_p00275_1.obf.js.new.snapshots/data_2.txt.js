function __STRING_ARRAY__() {
  var _0x452858 = ['423binlrU', '30FfTiYz', '1647729rJSMqo', '1722CsjnxY', 'trim', '117736felbYc', 'join', 'length', 'split', '330362PAubJb', '441784hfjkki', 'shift', 'sort', '440328wKDohy', 'log', 'utf8', '42qAqpGa', 'readFileSync', '80990ltwNhH'];
  __STRING_ARRAY__ = function () {
    return _0x452858;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe9)) / 0x1 + -parseInt(__DECODE_0__(0xe3)) / 0x2 * (-parseInt(__DECODE_0__(0xe0)) / 0x3) + -parseInt(__DECODE_0__(0xe5)) / 0x4 + -parseInt(__DECODE_0__(0xdf)) / 0x5 * (parseInt(__DECODE_0__(0xf0)) / 0x6) + -parseInt(__DECODE_0__(0xed)) / 0x7 + parseInt(__DECODE_0__(0xea)) / 0x8 + parseInt(__DECODE_0__(0xe2)) / 0x9 * (parseInt(__DECODE_0__(0xe1)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2e555);
function __DECODE_0__(LuWzAt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LuWzAt, key);
}
var input = require('fs')[__DECODE_0__(0xf1)]('/dev/stdin', __DECODE_0__(0xef));
var Arr = input[__DECODE_0__(0xe4)]()[__DECODE_0__(0xe8)]('\x0a');
while (!![]) {
  var N = Arr[__DECODE_0__(0xeb)]() - 0x0;
  if (N == 0x0) {
    break;
  }
  var n = [];
  var p = 0x0;
  for (var i = 0x0; i < N; i++) {
    n[i] = 0x0;
  }
  var str = Arr[__DECODE_0__(0xeb)]();
  for (var i = 0x0; i < str[__DECODE_0__(0xe7)]; i++) {
    var v = str[i];
    var j = i % N;
    if (v == 'M') {
      n[j]++;
    }
    if (v == 'S') {
      p += n[j] + 0x1;
      n[j] = 0x0;
    }
    if (v == 'L') {
      n[j] += p + 0x1;
      p = 0x0;
    }
  }
  n[__DECODE_0__(0xec)](function (a, b) {
    return a - b;
  });
  console[__DECODE_0__(0xee)](n[__DECODE_0__(0xe6)]('\x20') + '\x20' + p);
}
