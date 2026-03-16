(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x85)) / 0x1 * (-parseInt(__DECODE_0__(0x92)) / 0x2) + -parseInt(__DECODE_0__(0x86)) / 0x3 + parseInt(__DECODE_0__(0x8c)) / 0x4 + -parseInt(__DECODE_0__(0x89)) / 0x5 * (parseInt(__DECODE_0__(0x8d)) / 0x6) + -parseInt(__DECODE_0__(0x94)) / 0x7 + parseInt(__DECODE_0__(0x81)) / 0x8 * (parseInt(__DECODE_0__(0x80)) / 0x9) + -parseInt(__DECODE_0__(0x84)) / 0xa * (-parseInt(__DECODE_0__(0x82)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbda95);
function bomb(y, x) {
  var dy = [-0x1, -0x1, -0x1, 0x0, 0x0, 0x1, 0x1, 0x1];
  var dx = [-0x1, 0x0, 0x1, -0x1, 0x1, -0x1, 0x0, 0x1];
  for (var i = 0x0; i < 0x8; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0x0 || yy >= H || xx < 0x0 || xx >= W) {
      continue;
    }
    if (yx[yy][xx] == 'a') {
      yx[yy][xx] = cnt;
      bomb(yy, xx);
    }
  }
}
function __STRING_ARRAY__() {
  var _0x11b73e = ['log', 'utf8', '274uuTGau', 'readFileSync', '10586254TUrAuf', '13059117nhYvSl', '8APAcAD', '209VbzgIi', 'push', '10250TWgrDc', '9157yJVuYo', '2439606TVtBaR', 'trim', 'shift', '5mNHDYs', 'replace', '/dev/stdin', '1754360TcLjVd', '367260XTZTrL', 'map', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x11b73e;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x93)](__DECODE_0__(0x8b), __DECODE_0__(0x91));
var Arr = input[__DECODE_0__(0x87)]()[__DECODE_0__(0x8f)]('\x0a');
function __DECODE_0__(FKciFz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x80;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FKciFz, key);
}
while (!![]) {
  var WH = Arr[__DECODE_0__(0x88)]()[__DECODE_0__(0x8f)]('\x20')[__DECODE_0__(0x8e)](Number);
  var W = WH[0x0];
  var H = WH[0x1];
  if (W == 0x0 && H == 0x0) {
    break;
  }
  var yx = [];
  var Y;
  var X;
  for (var i = 0x0; i < H; i++) {
    var str = Arr['shift']();
    str = str[__DECODE_0__(0x8a)](/1/g, 'a');
    var arr = str[__DECODE_0__(0x8f)]('\x20');
    yx[__DECODE_0__(0x83)](arr);
  }
  var cnt = 0x0;
  for (var i = 0x0; i < H; i++) {
    for (var j = 0x0; j < W; j++) {
      if (yx[i][j] == 'a') {
        cnt++;
        yx[i][j] = cnt;
        bomb(i, j);
      }
    }
  }
  console[__DECODE_0__(0x90)](cnt);
}
