function __DECODE_0__(cDOKom, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x98;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cDOKom, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa2)) / 0x1 + -parseInt(__DECODE_0__(0x9d)) / 0x2 + parseInt(__DECODE_0__(0xa0)) / 0x3 * (parseInt(__DECODE_0__(0x9e)) / 0x4) + -parseInt(__DECODE_0__(0xa8)) / 0x5 * (-parseInt(__DECODE_0__(0x9b)) / 0x6) + -parseInt(__DECODE_0__(0xa7)) / 0x7 + -parseInt(__DECODE_0__(0x98)) / 0x8 + -parseInt(__DECODE_0__(0xa4)) / 0x9 * (-parseInt(__DECODE_0__(0x9a)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x47eba);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0x11f3a0 = ['3130oHXXvW', '109146lMcKZa', 'length', '61240GHwtRS', '8nmHqYz', 'log', '9483oWGqmM', 'shift', '317613gxiaPa', 'split', '31635MdlMHr', 'map', 'sort', '3523702bicqSf', '15HThnjw', '119080qSFIYC', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x11f3a0;
  };
  return __STRING_ARRAY__();
}
var arr = input['trim']()[__DECODE_0__(0xa3)]('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0xa1)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var ary = [];
  while (n--) {
    var hms = arr[__DECODE_0__(0xa1)]()[__DECODE_0__(0xa3)]('\x20');
    var start = hms[0x0]['split'](':')[__DECODE_0__(0xa5)](Number);
    var end = hms[0x1][__DECODE_0__(0xa3)](':')['map'](Number);
    start = start[0x0] * 0x3c * 0x3c + start[0x1] * 0x3c + start[0x2];
    end = end[0x0] * 0x3c * 0x3c + end[0x1] * 0x3c + end[0x2];
    ary[__DECODE_0__(0x99)]([start, end]);
  }
  ary['sort'](function (a, b) {
    return a[0x0] - b[0x0];
  });
  var train = [];
  var cnt = 0x0;
  ary['forEach'](function (v) {
    if (train[__DECODE_0__(0x9c)] == 0x0) {
      cnt++;
      train[__DECODE_0__(0x99)](v[0x1]);
    } else {
      train[__DECODE_0__(0xa6)](function (a, b) {
        return a - b;
      });
      if (train[0x0] <= v[0x0]) {
        train[__DECODE_0__(0xa1)]();
        train[__DECODE_0__(0x99)](v[0x1]);
      } else {
        cnt++;
        train[__DECODE_0__(0x99)](v[0x1]);
      }
    }
  });
  console[__DECODE_0__(0x9f)](cnt);
}
