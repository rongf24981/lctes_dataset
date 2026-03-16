(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf0)) / 0x1 * (parseInt(__DECODE_0__(0xe8)) / 0x2) + -parseInt(__DECODE_0__(0xe5)) / 0x3 + -parseInt(__DECODE_0__(0xec)) / 0x4 + -parseInt(__DECODE_0__(0xe2)) / 0x5 * (parseInt(__DECODE_0__(0xeb)) / 0x6) + -parseInt(__DECODE_0__(0xf2)) / 0x7 + -parseInt(__DECODE_0__(0xf1)) / 0x8 + parseInt(__DECODE_0__(0xed)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3371c);
function __STRING_ARRAY__() {
  var _0x349ab7 = ['2125904ccvYlL', '251937vBmMED', 'log', '422900DAwdcm', '/dev/stdin', 'map', '241881ZPJSXv', 'shift', 'split', '2KoVepV', 'trim', 'utf8', '12QKNbcW', '214316kDbPiL', '8611137uaPqdm', 'push', 'readFileSync', '140982YheKzH'];
  __STRING_ARRAY__ = function () {
    return _0x349ab7;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0xef)](__DECODE_0__(0xe3), __DECODE_0__(0xea));
function __DECODE_0__(MpPyMi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MpPyMi, key);
}
var arr = input[__DECODE_0__(0xe9)]()[__DECODE_0__(0xe7)]('\x0a');
while (!![]) {
  var MTPR = arr[__DECODE_0__(0xe6)]();
  if (MTPR == '0\x200\x200\x200') {
    break;
  }
  MTPR = MTPR[__DECODE_0__(0xe7)]('\x20')['map'](Number);
  var team = [];
  for (var i = 0x0; i < MTPR[0x1]; i++) {
    team[__DECODE_0__(0xee)]([0x0, 0x0, [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], i]);
  }
  for (var i = 0x0; i < MTPR[0x3]; i++) {
    var mtpj = arr['shift']()[__DECODE_0__(0xe7)]('\x20')[__DECODE_0__(0xe4)](Number);
    var m = mtpj[0x0];
    var t = mtpj[0x1] - 0x1;
    var p = mtpj[0x2] - 0x1;
    var j = mtpj[0x3];
    if (j == 0x0) {
      team[t][0x0]++;
      team[t][0x1] += m + team[t][0x2][p] * 0x14;
    }
    if (j != 0x0) {
      team[t][0x2][p]++;
    }
  }
  team['sort'](function (a, b) {
    if (a[0x0] == b[0x0] && a[0x1] == b[0x1]) {
      return b[0x3] - a[0x3];
    } else {
      if (a[0x0] == b[0x0]) {
        return a[0x1] - b[0x1];
      } else {
        return b[0x0] - a[0x0];
      }
    }
  });
  var ans = [];
  var same = [-0x1, -0x1];
  team['forEach'](function (v, i) {
    if (same[0x0] == v[0x0] && same[0x1] == v[0x1]) {
      ans[ans['length'] - 0x1] += '=' + (v[0x3] + 0x1);
    } else {
      ans[__DECODE_0__(0xee)](v[0x3] + 0x1);
      same = [v[0x0], v[0x1]];
    }
  });
  console[__DECODE_0__(0xf3)](ans['join'](','));
}
