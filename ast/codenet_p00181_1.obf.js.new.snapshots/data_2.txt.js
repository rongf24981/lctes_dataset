(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7f)) / 0x1 + parseInt(__DECODE_0__(0x71)) / 0x2 + -parseInt(__DECODE_0__(0x75)) / 0x3 * (-parseInt(__DECODE_0__(0x79)) / 0x4) + parseInt(__DECODE_0__(0x81)) / 0x5 + parseInt(__DECODE_0__(0x70)) / 0x6 + parseInt(__DECODE_0__(0x6e)) / 0x7 + -parseInt(__DECODE_0__(0x76)) / 0x8 * (parseInt(__DECODE_0__(0x77)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3b91b);
function seach(x) {
  var flag = !![];
  var cnt = 0x0;
  var sum = 0x0;
  for (var i = 0x0; i < ary[__DECODE_0__(0x7a)]; i++) {
    if (x < ary[i]) {
      flag = ![];
      break;
    } else {
      if (sum + ary[i] == x) {
        sum = 0x0;
        cnt++;
      } else {
        if (sum + ary[i] > x) {
          sum = ary[i];
          cnt++;
        } else {
          if (sum + ary[i] < x) {
            sum += ary[i];
          }
        }
      }
    }
    if (cnt == m) {
      flag = ![];
      break;
    }
  }
  return flag;
}
var input = require('fs')[__DECODE_0__(0x7e)](__DECODE_0__(0x74), __DECODE_0__(0x7d));
var arr = input[__DECODE_0__(0x7c)]()[__DECODE_0__(0x80)]('\x0a');
function __STRING_ARRAY__() {
  var _0x3e9ab5 = ['1936554qkjFUm', '9610poUpuA', '0\x200', 'push', '/dev/stdin', '3BkXbZd', '27952AgoRsw', '1773JGgfaW', 'map', '270188lfVSxa', 'length', 'log', 'trim', 'utf8', 'readFileSync', '22471fwqfNl', 'split', '2210075AVaJhY', '509012HytDEx', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x3e9ab5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OnGXGz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OnGXGz, key);
}
while (!![]) {
  var mn = arr[__DECODE_0__(0x6f)]();
  if (mn == __DECODE_0__(0x72)) {
    break;
  }
  mn = mn[__DECODE_0__(0x80)]('\x20')[__DECODE_0__(0x78)](Number);
  var m = mn[0x0];
  var n = mn[0x1];
  var ary = [];
  while (n--) {
    ary[__DECODE_0__(0x73)](arr[__DECODE_0__(0x6f)]() - 0x0);
  }
  var L = 0x0;
  var R = 0x16e360;
  while (!![]) {
    var middle = Math['floor']((L + R) / 0x2);
    if (seach(middle)) {
      R = middle - 0x1;
    } else {
      L = middle + 0x1;
    }
    if (L > R) {
      break;
    }
  }
  console[__DECODE_0__(0x7b)](R + 0x1);
}
