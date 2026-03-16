(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a8)) / 0x1 * (parseInt(__DECODE_0__(0x1ac)) / 0x2) + parseInt(__DECODE_0__(0x1a6)) / 0x3 + -parseInt(__DECODE_0__(0x1b1)) / 0x4 + -parseInt(__DECODE_0__(0x1a5)) / 0x5 * (parseInt(__DECODE_0__(0x1ad)) / 0x6) + -parseInt(__DECODE_0__(0x1b2)) / 0x7 + parseInt(__DECODE_0__(0x1ab)) / 0x8 * (parseInt(__DECODE_0__(0x1ae)) / 0x9) + parseInt(__DECODE_0__(0x1aa)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7a441);
function __DECODE_0__(etwuZe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etwuZe, key);
}
var input = require('fs')[__DECODE_0__(0x1a3)](__DECODE_0__(0x1a0), __DECODE_0__(0x1a7));
var arr = input[__DECODE_0__(0x1a4)]()[__DECODE_0__(0x1b3)]('\x0a');
function __STRING_ARRAY__() {
  var _0x334cfa = ['shift', '25765870oEYMeb', '15680TbuqHU', '2IYHHgQ', '5789904VzqNZx', '2916rUTUuj', 'log', 'map', '3314260dkIczX', '6057002VQJBTn', 'split', '/dev/stdin', 'push', 'length', 'readFileSync', 'trim', '5ehOTNT', '476625NQvpjW', 'utf8', '210866wUWZil'];
  __STRING_ARRAY__ = function () {
    return _0x334cfa;
  };
  return __STRING_ARRAY__();
}
var t = arr[__DECODE_0__(0x1a9)]() - 0x0;
while (t--) {
  var [n, k] = arr[__DECODE_0__(0x1a9)]()[__DECODE_0__(0x1b3)]('\x20')[__DECODE_0__(0x1b0)](Number);
  var x = arr[__DECODE_0__(0x1a9)]()[__DECODE_0__(0x1b3)]('\x20')[__DECODE_0__(0x1b0)](Number);
  var d = x[x[__DECODE_0__(0x1a2)] - 0x1] - x[0x0];
  var a = [];
  for (var i = 0x0; i < x[__DECODE_0__(0x1a2)] - 0x1; i++) {
    a[__DECODE_0__(0x1a1)](x[i + 0x1] - x[i]);
  }
  a['sort']((a, b) => b - a);
  var sum = 0x0;
  for (var i = 0x0; i < k - 0x1; i++) {
    if (i > a[__DECODE_0__(0x1a2)] - 0x1) {
      break;
    }
    sum += a[i];
  }
  console[__DECODE_0__(0x1af)](d - sum);
}
