function __DECODE_0__(mTZSxp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mTZSxp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x144)) / 0x1 + -parseInt(__DECODE_0__(0x150)) / 0x2 + parseInt(__DECODE_0__(0x14b)) / 0x3 * (-parseInt(__DECODE_0__(0x143)) / 0x4) + -parseInt(__DECODE_0__(0x14a)) / 0x5 + -parseInt(__DECODE_0__(0x142)) / 0x6 + -parseInt(__DECODE_0__(0x14f)) / 0x7 + parseInt(__DECODE_0__(0x148)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf100);
function Main(input) {
  var nums = input[__DECODE_0__(0x145)]('\x0a')[__DECODE_0__(0x146)](function (value) {
    return value - 0x0;
  });
  var N = nums[__DECODE_0__(0x14d)]();
  nums[__DECODE_0__(0x14e)](function (a, b) {
    return b - a;
  });
  var ary = new Array(N);
  var m = 0x0;
  var r = N - 0x1;
  for (var l = 0x0; l < N / 0x2; l++, r--) {
    ary[m++] = nums[l];
    ary[m++] = nums[r];
  }
  var s = 0x0;
  var s1 = 0x0;
  m = N - 0x1;
  for (var n = 0x0; n < N - 0x1; n++) {
    r = Math[__DECODE_0__(0x141)](ary[m] - ary[n]);
    s += r;
    m = n;
  }
  for (var n = 0x0; n < N - 0x1; n++) {
    r = Math['abs'](ary[n] - ary[n + 0x1]);
    s1 += r;
  }
  console[__DECODE_0__(0x147)](Math[__DECODE_0__(0x151)](s, s1));
}
function __STRING_ARRAY__() {
  var _0x1e345a = ['split', 'map', 'log', '25199288fbRWXL', 'readFileSync', '3093545gnZKNe', '17187UEJSEF', '/dev/stdin', 'shift', 'sort', '8010702AoAodk', '69906LzTGcM', 'max', 'utf8', 'abs', '4367982JpSqTc', '536TVADIq', '926412tJFNVF'];
  __STRING_ARRAY__ = function () {
    return _0x1e345a;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x149)](__DECODE_0__(0x14c), __DECODE_0__(0x140)));
