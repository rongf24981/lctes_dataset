(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x127)) / 0x1 * (parseInt(__DECODE_0__(0x128)) / 0x2) + -parseInt(__DECODE_0__(0x131)) / 0x3 + -parseInt(__DECODE_0__(0x134)) / 0x4 + -parseInt(__DECODE_0__(0x135)) / 0x5 * (-parseInt(__DECODE_0__(0x12b)) / 0x6) + -parseInt(__DECODE_0__(0x12a)) / 0x7 + -parseInt(__DECODE_0__(0x136)) / 0x8 + parseInt(__DECODE_0__(0x12e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe4cba);
function __DECODE_0__(BgugLm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x127;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BgugLm, key);
}
var input = require('fs')[__DECODE_0__(0x137)]('/dev/stdin', __DECODE_0__(0x12c));
var Arr = input['trim']()[__DECODE_0__(0x130)]('\x0a');
while (!![]) {
  var AL = Arr[__DECODE_0__(0x12d)]();
  if (AL == 0x0) {
    break;
  }
  var pd = [];
  for (var i = 0x0; i < AL; i++) {
    var arr = Arr[__DECODE_0__(0x12d)]()[__DECODE_0__(0x130)]('\x20')[__DECODE_0__(0x133)](Number);
    var p = arr[0x0];
    var d = arr[0x1] + arr[0x2];
    pd[__DECODE_0__(0x12f)]([p, d]);
  }
  pd['sort'](function (a, b) {
    if (a[0x1] <= b[0x1]) {
      return 0x1;
    } else {
      return -0x1;
    }
  });
  console[__DECODE_0__(0x132)](pd[0x0][__DECODE_0__(0x129)]('\x20'));
}
function __STRING_ARRAY__() {
  var _0x39ef4d = ['map', '4009400dmRQno', '3661290tcfzFA', '10187040rljGXa', 'readFileSync', '2619BgjKpO', '1046AoWPFU', 'join', '8770272ssYcJj', '6UEuQbY', 'utf8', 'shift', '31550301sPWtgP', 'push', 'split', '3425436chueJR', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x39ef4d;
  };
  return __STRING_ARRAY__();
}
