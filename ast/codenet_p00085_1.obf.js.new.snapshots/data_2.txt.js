(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ae)) / 0x1 + parseInt(__DECODE_0__(0x1b2)) / 0x2 * (parseInt(__DECODE_0__(0x1a9)) / 0x3) + parseInt(__DECODE_0__(0x1b0)) / 0x4 * (parseInt(__DECODE_0__(0x1ab)) / 0x5) + parseInt(__DECODE_0__(0x1a7)) / 0x6 * (parseInt(__DECODE_0__(0x1b8)) / 0x7) + -parseInt(__DECODE_0__(0x1a8)) / 0x8 + -parseInt(__DECODE_0__(0x1b3)) / 0x9 * (parseInt(__DECODE_0__(0x1aa)) / 0xa) + -parseInt(__DECODE_0__(0x1b6)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9bec5);
var input = require('fs')[__DECODE_0__(0x1b7)](__DECODE_0__(0x1af), __DECODE_0__(0x1ac));
function __STRING_ARRAY__() {
  var _0x551a43 = ['335349BBAAix', 'length', 'trim', '1410464fSdKOp', 'readFileSync', '7tFyAUJ', '5993346xpgMBs', '1499976WCMCAJ', '18OBqJHC', '220MnzMEv', '1570365ejrWow', 'utf8', 'split', '1099287zSIQGa', '/dev/stdin', '8bzdzQO', 'map', '415458BtIEyH'];
  __STRING_ARRAY__ = function () {
    return _0x551a43;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x1b5)]()[__DECODE_0__(0x1ad)]('\x0a');
function __DECODE_0__(ZGGzgH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZGGzgH, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x1b4)]; i++) {
  if (Arr[i] == '0\x200') {
    break;
  }
  var arr = Arr[i][__DECODE_0__(0x1ad)]('\x20')[__DECODE_0__(0x1b1)](Number);
  var N = arr[0x0];
  var m = arr[0x1];
  var n = {};
  for (var j = 0x0; j < N; j++) {
    n[j] = null;
  }
  var x = 0x0;
  for (var k = 0x0; k < N; k++) {
    var y = 0x0;
    do {
      x++;
      if (x == N) {
        x = 0x0;
      }
      if (n[x] === null) {
        y++;
      }
    } while (y != m);
    n[x] = k;
  }
  console['log'](x);
}
