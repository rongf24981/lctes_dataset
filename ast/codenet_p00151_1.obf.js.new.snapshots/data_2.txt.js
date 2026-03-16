(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e3)) / 0x1 * (-parseInt(__DECODE_0__(0x1d8)) / 0x2) + parseInt(__DECODE_0__(0x1e4)) / 0x3 + parseInt(__DECODE_0__(0x1dd)) / 0x4 + parseInt(__DECODE_0__(0x1de)) / 0x5 + parseInt(__DECODE_0__(0x1d4)) / 0x6 * (-parseInt(__DECODE_0__(0x1e0)) / 0x7) + parseInt(__DECODE_0__(0x1d9)) / 0x8 * (parseInt(__DECODE_0__(0x1dc)) / 0x9) + -parseInt(__DECODE_0__(0x1da)) / 0xa * (parseInt(__DECODE_0__(0x1db)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb7305);
function __STRING_ARRAY__() {
  var _0x48109d = ['max', '49sqAWDq', '4042347wvGApE', 'split', 'utf8', '79962zwNAIg', 'readFileSync', 'log', '/dev/stdin', '53262JQicmU', '109656dEwrvN', '170fNFtWj', '755513HMlkBN', '729bzhVlz', '1308328ELPzth', '2323635IJKXdg', 'trim', '14iACzDA', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x48109d;
  };
  return __STRING_ARRAY__();
}
function count(y, x) {
  var dy = [0x0, 0x1, 0x1, 0x1];
  var dx = [0x1, -0x1, 0x0, 0x1];
  var max = 0x1;
  for (var i = 0x0; i < 0x4; i++) {
    var cnt = 0x1;
    for (var j = 0x1; j <= n; j++) {
      var yy = y + dy[i] * j;
      var xx = x + dx[i] * j;
      if (yy < 0x0 || xx < 0x0 || yy >= n || xx >= n) {
        break;
      }
      if (yx[yy][xx] != 0x1) {
        break;
      }
      cnt++;
    }
    max = Math[__DECODE_0__(0x1e2)](max, cnt);
    cnt = 0x1;
  }
  return max;
}
var input = require('fs')[__DECODE_0__(0x1d5)](__DECODE_0__(0x1d7), __DECODE_0__(0x1e6));
var Arr = input[__DECODE_0__(0x1df)]()[__DECODE_0__(0x1e5)]('\x0a');
function __DECODE_0__(SIrLqe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SIrLqe, key);
}
while (!![]) {
  var n = Arr[__DECODE_0__(0x1e1)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var yx = [];
  for (var i = 0x0; i < n; i++) {
    yx[i] = Arr['shift']()[__DECODE_0__(0x1e5)]('')['map'](Number);
  }
  var max = 0x0;
  for (var i = 0x0; i < n; i++) {
    for (var j = 0x0; j < n; j++) {
      if (yx[i][j] == 0x1) {
        max = Math['max'](max, count(i, j));
      }
    }
  }
  console[__DECODE_0__(0x1d6)](max);
}
