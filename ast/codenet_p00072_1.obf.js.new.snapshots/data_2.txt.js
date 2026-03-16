(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xdb)) / 0x1 * (parseInt(__DECODE_0__(0xe4)) / 0x2) + -parseInt(__DECODE_0__(0xd8)) / 0x3 + parseInt(__DECODE_0__(0xd5)) / 0x4 + parseInt(__DECODE_0__(0xd3)) / 0x5 * (-parseInt(__DECODE_0__(0xdf)) / 0x6) + -parseInt(__DECODE_0__(0xe1)) / 0x7 + parseInt(__DECODE_0__(0xd6)) / 0x8 * (-parseInt(__DECODE_0__(0xd7)) / 0x9) + parseInt(__DECODE_0__(0xdd)) / 0xa * (parseInt(__DECODE_0__(0xd4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc6911);
function __DECODE_0__(TQNVno, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TQNVno, key);
}
function __STRING_ARRAY__() {
  var _0x2790c0 = ['4644476DzrPso', '368XCTiDh', '25641lCIazP', '465186uThlOT', 'shift', '/dev/stdin', '227693otDcLl', 'indexOf', '419810HVFidF', 'readFileSync', '11076hhJJAz', 'split', '5079123jmLDgP', 'utf8', 'push', '4oPxWIV', 'length', 'trim', 'log', '2540FkshfQ', '539QktKzf'];
  __STRING_ARRAY__ = function () {
    return _0x2790c0;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0xde)](__DECODE_0__(0xda), __DECODE_0__(0xe2));
var Arr = input[__DECODE_0__(0xd1)]()['split']('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0xd9)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var m = Arr['shift']() - 0x0;
  var N = [];
  for (var i = 0x0; i < n; i++) {
    N[i] = [];
    for (var j = 0x0; j < n; j++) {
      N[i][j] = Infinity;
      if (i == j) {
        N[i][j] = 0x0;
      }
    }
  }
  var arr = [];
  for (var i = 0x0; i < m; i++) {
    var abc = Arr[__DECODE_0__(0xd9)]()[__DECODE_0__(0xe0)](',')['map'](Number);
    var a = abc[0x0];
    var b = abc[0x1];
    var c = abc[0x2] / 0x64;
    N[a][b] = c;
    N[b][a] = c;
  }
  var city = [0x0];
  var cost = 0x0;
  while (!![]) {
    if (city[__DECODE_0__(0xd0)] == n) {
      break;
    }
    var min = Infinity;
    var select = -0x1;
    for (var i = 0x0; i < city[__DECODE_0__(0xd0)]; i++) {
      for (var j = 0x0; j < n; j++) {
        if (city[__DECODE_0__(0xdc)](j) != -0x1) {
          continue;
        }
        if (N[city[i]][j] < min) {
          select = j;
          min = N[city[i]][j] - 0x1;
        }
      }
    }
    if (select != -0x1) {
      cost += min;
      city[__DECODE_0__(0xe3)](select);
    }
  }
  console[__DECODE_0__(0xd2)](cost);
}
