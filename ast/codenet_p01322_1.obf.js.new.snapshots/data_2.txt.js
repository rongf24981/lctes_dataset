function __DECODE_0__(TqCmeP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x152;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TqCmeP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x15a)) / 0x1 + parseInt(__DECODE_0__(0x158)) / 0x2 * (parseInt(__DECODE_0__(0x15c)) / 0x3) + -parseInt(__DECODE_0__(0x156)) / 0x4 + -parseInt(__DECODE_0__(0x160)) / 0x5 + parseInt(__DECODE_0__(0x15d)) / 0x6 * (-parseInt(__DECODE_0__(0x157)) / 0x7) + -parseInt(__DECODE_0__(0x15f)) / 0x8 + parseInt(__DECODE_0__(0x159)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe45c4);
function __STRING_ARRAY__() {
  var _0x5db87f = ['/dev/stdin', 'trim', '7081884oFDrbh', '301istBad', '1385944SnADpz', '24099147yKeYMC', '1676641FRmYgo', 'slice', '6RUFrRP', '38358QNQxsx', 'log', '13675152llGrvC', '5250700bDohIW', 'split', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x5db87f;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x154), 'utf8');
var Arr = input[__DECODE_0__(0x155)]()['split']('\x0a');
while (!![]) {
  var nm = Arr['shift']()[__DECODE_0__(0x152)]('\x20')[__DECODE_0__(0x153)](Number);
  var n = nm[0x0];
  var m = nm[0x1];
  if (n == 0x0) {
    break;
  }
  var obj = {};
  for (var i = 0x0; i < n; i++) {
    var arr = Arr['shift']()[__DECODE_0__(0x152)]('\x20');
    var v = arr[0x0]['replace'](/\*/g, '');
    obj[v] = arr[0x1] - 0x0;
  }
  var sum = 0x0;
  for (var i = 0x0; i < m; i++) {
    var v = Arr['shift']();
    for (var k in obj) {
      if (k == v[__DECODE_0__(0x15b)](-0x1 * k['length'])) {
        sum += obj[k];
      }
    }
  }
  console[__DECODE_0__(0x15e)](sum);
}
