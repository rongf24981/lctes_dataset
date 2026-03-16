function __DECODE_0__(urnCfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(urnCfK, key);
}
function __STRING_ARRAY__() {
  var _0x21919b = ['21968892qndrNn', 'shift', '1583183gmdCyZ', '8mLmPfs', '2731353wNTZfU', '1637175tEhICM', 'log', '2ElAAyG', 'split', 'map', '/dev/stdin', '1690628pgpJes', 'push', 'hasOwnProperty', 'trim', '1644972VvCaDy', '783574DtDtgM'];
  __STRING_ARRAY__ = function () {
    return _0x21919b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc5)) / 0x1 + -parseInt(__DECODE_0__(0xcd)) / 0x2 * (parseInt(__DECODE_0__(0xca)) / 0x3) + -parseInt(__DECODE_0__(0xd1)) / 0x4 + -parseInt(__DECODE_0__(0xcb)) / 0x5 + parseInt(__DECODE_0__(0xd5)) / 0x6 + parseInt(__DECODE_0__(0xc8)) / 0x7 * (parseInt(__DECODE_0__(0xc9)) / 0x8) + parseInt(__DECODE_0__(0xc6)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x79632);
function bomb(y, x) {
  var Y = yx[y][x][0x1];
  var X = yx[y][x][0x0];
  if (ring[__DECODE_0__(0xd3)](Y + ',' + X)) {
    var flag = !![];
    for (var k in ring) {
      if (obj[__DECODE_0__(0xd3)](k)) {
        flag = ![];
      }
      obj[k] = !![];
    }
    if (flag) {
      cnt++;
    }
  } else {
    ring[Y + ',' + X] = !![];
    bomb(Y, X);
  }
}
var input = require('fs')['readFileSync'](__DECODE_0__(0xd0), 'utf8');
var arr = input[__DECODE_0__(0xd4)]()['split']('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0xc7)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var yx = [];
  for (var i = 0x0; i < n; i++) {
    var tile = arr[__DECODE_0__(0xc7)]()[__DECODE_0__(0xce)]('\x20')[__DECODE_0__(0xcf)](Number);
    var t = [];
    for (var j = 0x0; j < n; j++) {
      t[j] = [tile[__DECODE_0__(0xc7)](), tile[__DECODE_0__(0xc7)]()];
    }
    yx[__DECODE_0__(0xd2)](t);
  }
  var obj = {};
  var cnt = 0x0;
  for (var i = 0x0; i < n; i++) {
    for (var j = 0x0; j < n; j++) {
      if (obj['hasOwnProperty'](i + ',' + j)) {
        continue;
      }
      var ring = {};
      ring[i + ',' + j] = !![];
      bomb(i, j);
    }
  }
  console[__DECODE_0__(0xcc)](cnt);
}
