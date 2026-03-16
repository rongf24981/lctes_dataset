var a0_0xa32834 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x499c1f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x499c1f(0x146)) / 0x1 + -parseInt(_0x499c1f(0x13b)) / 0x2 * (parseInt(_0x499c1f(0x148)) / 0x3) + -parseInt(_0x499c1f(0x14f)) / 0x4 * (-parseInt(_0x499c1f(0x14b)) / 0x5) + -parseInt(_0x499c1f(0x14d)) / 0x6 + -parseInt(_0x499c1f(0x149)) / 0x7 + parseInt(_0x499c1f(0x141)) / 0x8 * (-parseInt(_0x499c1f(0x14c)) / 0x9) + parseInt(_0x499c1f(0x147)) / 0xa * (parseInt(_0x499c1f(0x144)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaf152);
function __DECODE_0__(yftcGM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yftcGM, key);
}
function warshall() {
  var _0x33c8ba = __DECODE_0__;
  for (var k = 0x0; k < n; k++) {
    for (var i = 0x0; i < n; i++) {
      for (var j = 0x0; j < n; j++) {
        C[i][j] = Math[_0x33c8ba(0x14a)](C[i][j], C[i][k] + C[k][j]);
      }
    }
  }
}
var input = require('fs')[a0_0xa32834(0x13e)](a0_0xa32834(0x142), a0_0xa32834(0x13c));
var Arr = input[a0_0xa32834(0x14e)]()[a0_0xa32834(0x13d)]('\x0a');
function __STRING_ARRAY__() {
  var _0x5c8b71 = ['utf8', 'split', 'readFileSync', 'map', 'shift', '8rmcPiO', '/dev/stdin', 'log', '7887EyqRic', 'max', '435620sDdRfh', '41550mXAzTj', '351423GalZGs', '8680322mpSpke', 'min', '5140390TewiFx', '2194767kPqkHZ', '4709046BrAhjf', 'trim', '4ZPkqOX', 'join', '10DwyTyv'];
  __STRING_ARRAY__ = function () {
    return _0x5c8b71;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = 0xa;
  var m = Arr[a0_0xa32834(0x140)]() - 0x0;
  if (m == 0x0) {
    break;
  }
  var C = [];
  for (var i = 0x0; i < n; i++) {
    C[i] = [];
    for (var j = 0x0; j < n; j++) {
      C[i][j] = i === j ? 0x0 : Infinity;
    }
  }
  var max = 0x0;
  for (var i = 0x0; i < m; i++) {
    var A = Arr[a0_0xa32834(0x140)]()['split']('\x20')[a0_0xa32834(0x13f)](Number);
    max = Math[a0_0xa32834(0x145)](max, A[0x0], A[0x1]);
    C[A[0x0]][A[0x1]] = A[0x2];
    C[A[0x1]][A[0x0]] = A[0x2];
  }
  warshall();
  var min = ['', Infinity];
  for (var i = max; i >= 0x0; i--) {
    var arr = C[i]['slice'](0x0, max + 0x1);
    var sum = arr['reduce'](function (a, b) {
      return a + b;
    });
    min[0x1] = Math['min'](min[0x1], sum);
    if (min[0x1] == sum) {
      min = [i, sum];
    }
  }
  console[a0_0xa32834(0x143)](min[a0_0xa32834(0x13a)]('\x20'));
}
