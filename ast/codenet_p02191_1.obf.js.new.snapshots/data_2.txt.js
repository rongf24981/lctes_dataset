function __DECODE_0__(RbAyas, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RbAyas, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x108)) / 0x1 * (parseInt(__DECODE_0__(0x107)) / 0x2) + parseInt(__DECODE_0__(0xf6)) / 0x3 * (-parseInt(__DECODE_0__(0xfc)) / 0x4) + -parseInt(__DECODE_0__(0x10a)) / 0x5 + -parseInt(__DECODE_0__(0xfb)) / 0x6 + -parseInt(__DECODE_0__(0x102)) / 0x7 + parseInt(__DECODE_0__(0x103)) / 0x8 + parseInt(__DECODE_0__(0xfa)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3027a);
var input = require('fs')[__DECODE_0__(0xff)](__DECODE_0__(0x101), __DECODE_0__(0xf9));
var arr = input['trim']()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x288c3b = ['push', 'floor', 'utf8', '6103206MGSHxw', '932214xiPrzK', '4DlGJUQ', 'forEach', 'split', 'readFileSync', 'map', '/dev/stdin', '1111215QFykxQ', '2851072mQIAoU', 'ookii', 'length', 'join', '2026HpwUZf', '38MuKajw', 'shift', '1097605zHHxru', 'izyou', '795441zzJJfx'];
  __STRING_ARRAY__ = function () {
    return _0x288c3b;
  };
  return __STRING_ARRAY__();
}
var [n, q] = arr[__DECODE_0__(0x109)]()[__DECODE_0__(0xfe)]('\x20')[__DECODE_0__(0x100)](Number);
var ary = arr[__DECODE_0__(0x109)]()[__DECODE_0__(0xfe)]('\x20')[__DECODE_0__(0x100)](Number);
ary['sort']((a, b) => a - b);
function tansaku(x, str) {
  var first = -0x1;
  var last = ary[__DECODE_0__(0x105)];
  while (last - first > 0x1) {
    var mid = first + Math[__DECODE_0__(0xf8)]((last - first) / 0x2);
    if (ary[mid] < x) {
      first = mid;
    } else {
      if (str == __DECODE_0__(0x104) && ary[mid] == x) {
        first = mid;
      } else {
        last = mid;
      }
    }
  }
  return last;
}
var ans = [];
arr[__DECODE_0__(0xfd)](v => {
  var [l, r] = v[__DECODE_0__(0xfe)]('\x20')[__DECODE_0__(0x100)](Number);
  ans[__DECODE_0__(0xf7)](tansaku(r, 'ookii') - tansaku(l, __DECODE_0__(0xf5)));
});
console['log'](ans[__DECODE_0__(0x106)]('\x0a'));
