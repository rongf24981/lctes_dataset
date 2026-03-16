(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x110)) / 0x1 * (parseInt(__DECODE_0__(0x115)) / 0x2) + -parseInt(__DECODE_0__(0x112)) / 0x3 + parseInt(__DECODE_0__(0x10e)) / 0x4 + -parseInt(__DECODE_0__(0x111)) / 0x5 + -parseInt(__DECODE_0__(0x116)) / 0x6 + -parseInt(__DECODE_0__(0x117)) / 0x7 + parseInt(__DECODE_0__(0x10d)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d348);
function __DECODE_0__(xgZlWi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xgZlWi, key);
}
function lcs(x, y) {
  var m = x[__DECODE_0__(0x114)];
  var n = y[__DECODE_0__(0x114)];
  for (var i = 0x1; i <= m; i++) {
    c[i][0x0] = 0x0;
  }
  for (var j = 0x1; j <= n; j++) {
    c[0x0][j] = 0x0;
  }
  for (var i = 0x1; i <= m; i++) {
    for (var j = 0x1; j <= n; j++) {
      if (x[i] == y[j]) {
        c[i][j] = c[i - 0x1][j - 0x1] + 0x1;
      } else {
        if (c[i - 0x1][j] >= c[i][j - 0x1]) {
          c[i][j] = c[i - 0x1][j];
        } else {
          c[i][j] = c[i][j - 0x1];
        }
      }
    }
  }
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x10f), __DECODE_0__(0x118))[__DECODE_0__(0x113)]();
var lines = input[__DECODE_0__(0x119)]('\x0a');
var n = +lines[__DECODE_0__(0x11b)]() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
  var a = lines['shift']();
  var b = lines['shift']();
  var c = [[0x0]];
  for (var i = 0x1; i <= a[__DECODE_0__(0x114)]; i++) {
    var arr = [-0x1];
    c[__DECODE_0__(0x11a)](arr);
  }
  lcs(a, b);
  console['log'](c[a[__DECODE_0__(0x114)]][b['length']]);
}
function __STRING_ARRAY__() {
  var _0x42a8ff = ['split', 'push', 'shift', '17128744QDKWPh', '435988jNSfVx', '/dev/stdin', '1ctJTEy', '3426545Nbodte', '1554174EdnXVv', 'trim', 'length', '472588KZZvcw', '4566150GVHtTE', '981568SfxEAU', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x42a8ff;
  };
  return __STRING_ARRAY__();
}
