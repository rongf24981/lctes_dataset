function __DECODE_0__(rdKvTb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x150;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rdKvTb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x157)) / 0x1 * (-parseInt(__DECODE_0__(0x152)) / 0x2) + parseInt(__DECODE_0__(0x150)) / 0x3 * (parseInt(__DECODE_0__(0x15f)) / 0x4) + parseInt(__DECODE_0__(0x160)) / 0x5 + -parseInt(__DECODE_0__(0x15d)) / 0x6 + parseInt(__DECODE_0__(0x15c)) / 0x7 * (-parseInt(__DECODE_0__(0x161)) / 0x8) + parseInt(__DECODE_0__(0x154)) / 0x9 + parseInt(__DECODE_0__(0x15a)) / 0xa * (-parseInt(__DECODE_0__(0x159)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x83bd8);
function warshall() {
  for (var k = 0x0; k < n; k++) {
    for (var i = 0x0; i < n; i++) {
      for (var j = 0x0; j < n; j++) {
        C[i][j] = Math[__DECODE_0__(0x155)](C[i][j], C[i][k] + C[k][j]);
      }
    }
  }
}
var input = require('fs')[__DECODE_0__(0x151)](__DECODE_0__(0x156), __DECODE_0__(0x153));
var Arr = input['trim']()[__DECODE_0__(0x158)]('\x0a');
var n = Arr[__DECODE_0__(0x15e)]() - 0x0;
var m = Arr[__DECODE_0__(0x15e)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x1f01c6 = ['min', '/dev/stdin', '22324AvHhqw', 'split', '2563cbAthS', '52730JPsBcP', 'map', '3986857gVHcJa', '4350732jzemoC', 'shift', '12NxbMHb', '5136320SvYdIn', '8nKpWcr', 'log', '1024689rWNUfV', 'readFileSync', '2nxCjEH', 'utf8', '8897517qgJQmS'];
  __STRING_ARRAY__ = function () {
    return _0x1f01c6;
  };
  return __STRING_ARRAY__();
}
var C = [];
for (var i = 0x0; i < n; i++) {
  C[i] = [];
  for (var j = 0x0; j < n; j++) {
    C[i][j] = i === j ? 0x0 : Infinity;
  }
}
for (var i = 0x0; i < m; i++) {
  var A = Arr[__DECODE_0__(0x15e)]()[__DECODE_0__(0x158)](',')[__DECODE_0__(0x15b)](Number);
  C[A[0x0] - 0x1][A[0x1] - 0x1] = A[0x2];
  C[A[0x1] - 0x1][A[0x0] - 0x1] = A[0x3];
}
warshall();
var last = Arr[__DECODE_0__(0x15e)]()['split'](',')['map'](Number);
var cost = C[last[0x0] - 0x1][last[0x1] - 0x1] + C[last[0x1] - 0x1][last[0x0] - 0x1] + last[0x3];
console[__DECODE_0__(0x162)](last[0x2] - cost);
