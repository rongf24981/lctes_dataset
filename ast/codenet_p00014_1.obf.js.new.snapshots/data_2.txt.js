(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x125)) / 0x1 * (parseInt(__DECODE_0__(0x127)) / 0x2) + -parseInt(__DECODE_0__(0x12c)) / 0x3 * (-parseInt(__DECODE_0__(0x121)) / 0x4) + parseInt(__DECODE_0__(0x12b)) / 0x5 + parseInt(__DECODE_0__(0x12a)) / 0x6 * (parseInt(__DECODE_0__(0x120)) / 0x7) + parseInt(__DECODE_0__(0x124)) / 0x8 + parseInt(__DECODE_0__(0x126)) / 0x9 + parseInt(__DECODE_0__(0x12e)) / 0xa * (-parseInt(__DECODE_0__(0x129)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x36cdd);
function __DECODE_0__(rvJZJQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rvJZJQ, key);
}
function __STRING_ARRAY__() {
  var _0x34eccb = ['6350AvbMNo', '3182274QeLXtE', '88ftdpZq', 'resume', '176297dHhWWM', '12UYvEuu', '933290XRqQHk', '3OqDwwV', 'stdin', '830tZtevd', 'trim', '1524929XXWerF', '1179884qbQmta', 'some', 'log', '35272FVxJpx'];
  __STRING_ARRAY__ = function () {
    return _0x34eccb;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x12d)]['on']('data', function (c) {
  (c + '')[__DECODE_0__(0x11f)]()['split']('\x0a')[__DECODE_0__(0x122)](function (n) {
    for (var d = +n, i = 0x1, a = 0x0, t; t = i++ * d, t < 0x258 ? a += t * t * d : 0x0;);
    console[__DECODE_0__(0x123)](a);
  });
})[__DECODE_0__(0x128)]();
