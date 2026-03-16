(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1da)) / 0x1 * (-parseInt(__DECODE_0__(0x1e8)) / 0x2) + -parseInt(__DECODE_0__(0x1e1)) / 0x3 * (parseInt(__DECODE_0__(0x1ea)) / 0x4) + -parseInt(__DECODE_0__(0x1db)) / 0x5 + -parseInt(__DECODE_0__(0x1e9)) / 0x6 + -parseInt(__DECODE_0__(0x1dd)) / 0x7 + parseInt(__DECODE_0__(0x1d8)) / 0x8 + parseInt(__DECODE_0__(0x1eb)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x44fe2);
var input = require('fs')[__DECODE_0__(0x1de)](__DECODE_0__(0x1e0), __DECODE_0__(0x1e5));
var arr = input['trim']()[__DECODE_0__(0x1df)]('\x0a');
function __STRING_ARRAY__() {
  var _0x485622 = ['readFileSync', 'split', '/dev/stdin', '197865oNkpSa', 'slice', 'log', 'filter', 'utf8', 'length', 'indexOf', '2uSbFfd', '1351170VwqhjF', '28rGmcAM', '3353247XZqvYp', 'map', 'forEach', 'shift', '2519480pEuBlk', 'includes', '390928KMqexd', '152160ouWElk', 'push', '549780qnEddo'];
  __STRING_ARRAY__ = function () {
    return _0x485622;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kTHuuS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kTHuuS, key);
}
while (!![]) {
  var n = arr[__DECODE_0__(0x1d7)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var ary = arr[__DECODE_0__(0x1e2)](0x0, n);
  ary = ary[__DECODE_0__(0x1ec)](v => v[__DECODE_0__(0x1df)]('\x20')[__DECODE_0__(0x1ec)](Number)[__DECODE_0__(0x1e2)](0x1));
  var flag = !![];
  var h = [];
  for (var i = 0x0; i < n; i++) {
    h[__DECODE_0__(0x1dc)]([i]);
  }
  for (var i = 0x1; i <= 0x1e; i++) {
    var a = [];
    ary[__DECODE_0__(0x1d6)]((v, j) => {
      if (v[__DECODE_0__(0x1d9)](i)) {
        a['push'](j);
      }
    });
    var b = [];
    a['forEach'](v => b[__DECODE_0__(0x1dc)](...h[v]));
    b = b[__DECODE_0__(0x1e4)]((x, i, self) => self[__DECODE_0__(0x1e7)](x) == i);
    if (b[__DECODE_0__(0x1e6)] == n) {
      flag = ![];
      console[__DECODE_0__(0x1e3)](i);
      break;
    }
    a[__DECODE_0__(0x1d6)](v => h[v] = b);
  }
  if (flag) {
    console[__DECODE_0__(0x1e3)](-0x1);
  }
  arr = arr[__DECODE_0__(0x1e2)](n);
}
