function __STRING_ARRAY__() {
  var _0x41722e = ['5027885XZJsER', '650DEMTVC', 'indexOf', 'max', 'utf8', '120015jMGjZz', 'split', 'readFileSync', '670584YXFWUl', 'forEach', '2mRHWbx', '6091158YPxgpQ', '97966NgwIRw', 'min', '102185IZqQQL', '272QUBzMI', '4OpZKpP', 'push', '6493095zjUviD', 'shift', 'reduce'];
  __STRING_ARRAY__ = function () {
    return _0x41722e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ef)) / 0x1 + parseInt(__DECODE_0__(0x1eb)) / 0x2 * (parseInt(__DECODE_0__(0x1e9)) / 0x3) + -parseInt(__DECODE_0__(0x1f1)) / 0x4 * (-parseInt(__DECODE_0__(0x1f6)) / 0x5) + -parseInt(__DECODE_0__(0x1ec)) / 0x6 + -parseInt(__DECODE_0__(0x1fb)) / 0x7 * (-parseInt(__DECODE_0__(0x1f0)) / 0x8) + -parseInt(__DECODE_0__(0x1f3)) / 0x9 + -parseInt(__DECODE_0__(0x1f7)) / 0xa * (-parseInt(__DECODE_0__(0x1ed)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb8aee);
var input = require('fs')[__DECODE_0__(0x1e8)]('/dev/stdin', __DECODE_0__(0x1fa));
function __DECODE_0__(liprqY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liprqY, key);
}
var arr = input['trim']()[__DECODE_0__(0x1fc)]('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x1f4)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var yx = [];
  for (var i = 0x0; i < n; i++) {
    yx[__DECODE_0__(0x1f2)](arr[__DECODE_0__(0x1f4)]()[__DECODE_0__(0x1fc)]('\x20')['map'](Number));
  }
  var xy = [];
  var hand = [];
  for (var i = 0x0; i < n; i++) {
    xy[i] = [];
    hand[i] = [];
    for (var j = 0x0; j < n; j++) {
      xy[i][j] = yx[j][i];
      hand[i][j] = [0x0, 0x0];
    }
  }
  yx[__DECODE_0__(0x1ea)](function (v, i) {
    var min = v['reduce'](function (a, b) {
      return Math[__DECODE_0__(0x1ee)](a, b);
    });
    hand[i][v[__DECODE_0__(0x1f8)](min)][0x0] = 0x1;
  });
  xy[__DECODE_0__(0x1ea)](function (v, i) {
    var max = v[__DECODE_0__(0x1f5)](function (a, b) {
      return Math[__DECODE_0__(0x1f9)](a, b);
    });
    hand[v[__DECODE_0__(0x1f8)](max)][i][0x1] = 0x1;
  });
  var ans = function () {
    for (var i = 0x0; i < n; i++) {
      for (var j = 0x0; j < n; j++) {
        if (hand[i][j][0x0] == 0x1 && hand[i][j][0x1] == 0x1) {
          return yx[i][j];
        }
      }
    }
    return 0x0;
  }();
  console['log'](ans);
}
