(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x117)) / 0x1 * (parseInt(__DECODE_0__(0x110)) / 0x2) + parseInt(__DECODE_0__(0x112)) / 0x3 * (-parseInt(__DECODE_0__(0x10a)) / 0x4) + -parseInt(__DECODE_0__(0x11b)) / 0x5 + parseInt(__DECODE_0__(0x11c)) / 0x6 * (parseInt(__DECODE_0__(0x111)) / 0x7) + -parseInt(__DECODE_0__(0x10c)) / 0x8 + parseInt(__DECODE_0__(0x116)) / 0x9 + -parseInt(__DECODE_0__(0x115)) / 0xa * (-parseInt(__DECODE_0__(0x10e)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x322e5);
function __STRING_ARRAY__() {
  var _0x3cd9f8 = ['10XqYTpj', '1178937ebUdNO', '37ZmHcIu', 'log', 'split', 'push', '922920IOrFWu', '3450HhEutL', '260376gZrwxA', '/dev/stdin', '2874456wBoTVD', 'sort', '11014069SvbmHh', 'join', '17542oqUspP', '875FZiQCe', '6cbfTxi', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x3cd9f8;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x114)](__DECODE_0__(0x10b), __DECODE_0__(0x113));
var arr = input['trim']()[__DECODE_0__(0x119)]('\x0a');
function __DECODE_0__(QlvyyK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QlvyyK, key);
}
while (!![]) {
  var n = arr['shift']() - 0x0;
  if (n === 0x0) {
    break;
  }
  var ary = [];
  for (var i = 0x0; i < n; i++) {
    ary[__DECODE_0__(0x11a)](arr['shift']()[__DECODE_0__(0x119)]('\x20')['map'](Number));
  }
  ary[__DECODE_0__(0x10d)](function (a, b) {
    if (a[0x2] == b[0x2] && a[0x3] == b[0x3]) {
      return a[0x0] - b[0x0];
    } else {
      if (a[0x2] == b[0x2]) {
        return a[0x3] - b[0x3];
      } else {
        return b[0x2] - a[0x2];
      }
    }
  });
  var ans = [];
  var U = [];
  for (var i = 0x0; i <= 0x3e8; i++) {
    U[i] = 0x0;
  }
  ary['forEach'](function (v, i) {
    var id = v[0x0];
    var u = v[0x1];
    if (i < 0xa) {
      if (U[u] < 0x3) {
        ans[__DECODE_0__(0x11a)](id);
        U[u]++;
      }
    } else {
      if (i < 0x14) {
        if (U[u] < 0x2) {
          ans[__DECODE_0__(0x11a)](id);
          U[u]++;
        }
      } else {
        if (i < 0x1a) {
          if (U[u] == 0x0) {
            ans[__DECODE_0__(0x11a)](id);
            U[u]++;
          }
        }
      }
    }
  });
  console[__DECODE_0__(0x118)](ans[__DECODE_0__(0x10f)]('\x0a'));
}
