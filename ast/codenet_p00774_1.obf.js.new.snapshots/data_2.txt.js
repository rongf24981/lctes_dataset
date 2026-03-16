(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc2)) / 0x1 + -parseInt(__DECODE_0__(0xb6)) / 0x2 * (parseInt(__DECODE_0__(0xc7)) / 0x3) + -parseInt(__DECODE_0__(0xbb)) / 0x4 + -parseInt(__DECODE_0__(0xb9)) / 0x5 * (parseInt(__DECODE_0__(0xc6)) / 0x6) + -parseInt(__DECODE_0__(0xca)) / 0x7 * (parseInt(__DECODE_0__(0xb7)) / 0x8) + -parseInt(__DECODE_0__(0xcc)) / 0x9 * (parseInt(__DECODE_0__(0xc0)) / 0xa) + -parseInt(__DECODE_0__(0xb8)) / 0xb * (-parseInt(__DECODE_0__(0xc9)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x24d73);
function stoneRemove() {
  yx[__DECODE_0__(0xc5)](function (v, i) {
    var str = v[__DECODE_0__(0xcb)]('')['replace'](/([1-9])\1{2,}/, function (x) {
      point += (x[0x0] - 0x0) * x[__DECODE_0__(0xba)];
      return x[__DECODE_0__(0xc8)](/./g, '0');
    });
    yx[i] = str[__DECODE_0__(0xbf)]('')['map'](Number);
  });
  var flag = !![];
  while (flag) {
    flag = ![];
    for (var i = 0x0; i < H - 0x1; i++) {
      for (var j = 0x0; j < 0x5; j++) {
        if (yx[i][j] != 0x0 && yx[i + 0x1][j] == 0x0) {
          yx[i + 0x1][j] = yx[i][j];
          yx[i][j] = 0x0;
          flag = !![];
        }
      }
    }
  }
}
function __STRING_ARRAY__() {
  var _0x4f8b17 = ['replace', '14460vVVEei', '49rkVbhO', 'join', '9tTcPbr', '2VudTqc', '264224yAneZs', '10890xRojAx', '5GqfRyv', 'length', '651032ztrvIT', 'trim', 'utf8', '/dev/stdin', 'split', '2810020qHmRRo', 'map', '255863rQpkOg', 'log', 'shift', 'forEach', '488646IMCbvx', '89373tolWvK'];
  __STRING_ARRAY__ = function () {
    return _0x4f8b17;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xbe), __DECODE_0__(0xbd));
function __DECODE_0__(YGXzaI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGXzaI, key);
}
var arr = input[__DECODE_0__(0xbc)]()[__DECODE_0__(0xbf)]('\x0a');
while (!![]) {
  var h = arr[__DECODE_0__(0xc4)]() - 0x0;
  if (h == 0x0) {
    break;
  }
  var H = h;
  var yx = [];
  while (h--) {
    yx['push'](arr[__DECODE_0__(0xc4)]()[__DECODE_0__(0xbf)]('\x20')[__DECODE_0__(0xc1)](Number));
  }
  var point = 0x0;
  var p = point;
  while (!![]) {
    stoneRemove();
    if (p == point) {
      break;
    }
    p = point;
  }
  console[__DECODE_0__(0xc3)](point);
}
