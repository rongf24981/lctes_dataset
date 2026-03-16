var a0_0x20c9ab = __DECODE_0__;
function __DECODE_0__(MmTicJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MmTicJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x1e296b = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1e296b(0x10a)) / 0x1 * (parseInt(_0x1e296b(0x10b)) / 0x2) + -parseInt(_0x1e296b(0x10f)) / 0x3 + -parseInt(_0x1e296b(0x109)) / 0x4 * (parseInt(_0x1e296b(0x102)) / 0x5) + -parseInt(_0x1e296b(0x113)) / 0x6 * (-parseInt(_0x1e296b(0x116)) / 0x7) + -parseInt(_0x1e296b(0x106)) / 0x8 + -parseInt(_0x1e296b(0x10e)) / 0x9 * (parseInt(_0x1e296b(0x101)) / 0xa) + -parseInt(_0x1e296b(0x112)) / 0xb * (-parseInt(_0x1e296b(0x118)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45940);
function Puzzle() {
  var _0x3d54e6 = __DECODE_0__;
  var obj = {};
  var arrA = _0x3d54e6(0x11a)[_0x3d54e6(0x105)](',');
  var arrB = _0x3d54e6(0x104)['split'](',');
  var i;
  var j;
  var k;
  var l;
  var m;
  for (i = 0x0; i < 0x10; i++) {
    for (j = 0x0; j < 0x10; j++) {
      for (k = 0x0; k < 0x10; k++) {
        for (l = 0x0; l < 0x10; l++) {
          for (m = 0x0; m < 0x9; m++) {
            var str = arrA[i] + arrA[j] + arrA[k] + arrA[l] + arrB[m];
            str = str['split']('')[_0x3d54e6(0x110)](Number)[_0x3d54e6(0x115)](function (a, b) {
              return a - b;
            })['join']('');
            obj[str] = !![];
          }
        }
      }
    }
  }
  return obj;
}
var P = Puzzle();
var input = require('fs')[a0_0x20c9ab(0x103)]('/dev/stdin', a0_0x20c9ab(0x107));
var Arr = input[a0_0x20c9ab(0x119)]()[a0_0x20c9ab(0x105)]('\x0a');
function __STRING_ARRAY__() {
  var _0x48ce25 = ['13662wiWIvc', 'length', 'test', '45fMLAKh', '536172sXxoPf', 'map', 'hasOwnProperty', '188815DQZwwf', '6tBVjID', 'shift', 'sort', '1281714DNxjkV', 'join', '612XUblSH', 'trim', '123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999', 'log', '827500ibmxSW', '20bYwnGo', 'readFileSync', '11,22,33,44,55,66,77,88,99', 'split', '578768phDQjM', 'utf8', 'push', '170184pFdkSo', '9SpsMAP'];
  __STRING_ARRAY__ = function () {
    return _0x48ce25;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  if (Arr[a0_0x20c9ab(0x10c)] == 0x0) {
    break;
  }
  var str = Arr[a0_0x20c9ab(0x114)]();
  var ans = [];
  for (var i = 0x1; i <= 0x9; i++) {
    var arr = str[a0_0x20c9ab(0x105)]('')['map'](Number);
    arr[a0_0x20c9ab(0x108)](i);
    arr[a0_0x20c9ab(0x115)](function (a, b) {
      return a - b;
    });
    var v = arr[a0_0x20c9ab(0x117)]('');
    if (/(.)\1\1\1\1/[a0_0x20c9ab(0x10d)](v)) {
      continue;
    }
    if (P[a0_0x20c9ab(0x111)](v)) {
      ans['push'](i);
    }
  }
  console[a0_0x20c9ab(0x100)](ans['length'] == 0x0 ? '0' : ans[a0_0x20c9ab(0x117)]('\x20'));
}
