function __DECODE_0__(qHPjIH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qHPjIH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1db)) / 0x1 * (parseInt(__DECODE_0__(0x1d8)) / 0x2) + -parseInt(__DECODE_0__(0x1df)) / 0x3 * (-parseInt(__DECODE_0__(0x1e4)) / 0x4) + parseInt(__DECODE_0__(0x1e6)) / 0x5 + parseInt(__DECODE_0__(0x1dc)) / 0x6 * (parseInt(__DECODE_0__(0x1ea)) / 0x7) + parseInt(__DECODE_0__(0x1e3)) / 0x8 * (-parseInt(__DECODE_0__(0x1de)) / 0x9) + -parseInt(__DECODE_0__(0x1e5)) / 0xa + -parseInt(__DECODE_0__(0x1da)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5b97f);
function __STRING_ARRAY__() {
  var _0x11cee9 = ['194slQAQn', 'resume', '7128671SXsFhc', '5528tguQuu', '2035938LsVKPa', 'slice', '1072044JGAxTo', '1378887ospwvW', 'overflow', 'log', 'shift', '16zzWITp', '4IsRWGF', '6865870XNNufG', '3064395auoJZs', 'stdin', 'data', 'reverse', '7WCbCyn', 'concat', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x11cee9;
  };
  return __STRING_ARRAY__();
}
function pad(n) {
  while (n[__DECODE_0__(0x1d7)] < 0x7) {
    n = '0' + n;
  }
  return n;
}
function divide(s) {
  var a = [];
  var i = 0x0;
  var l = s[__DECODE_0__(0x1d7)];
  var d = 0x7;
  for (; (a[i] = s['slice']((i + 0x1) * -d, l + i * -d))[__DECODE_0__(0x1d7)] > d - 0x1; i++);
  return a;
}
function unite(a) {
  return a[__DECODE_0__(0x1d6)]()[__DECODE_0__(0x1e9)]()['join']('')['replace'](/^0*/, '');
}
function largeSum(n, m) {
  for (var h = 0x0, o = [], i = 0x0, l = Math['max'](n[__DECODE_0__(0x1d7)], m[__DECODE_0__(0x1d7)]); i < l || h != 0x0; i++) {
    var a = ((parseInt(n[i], 0xa) || 0x0) + (parseInt(m[i], 0xa) || 0x0) + +h)['toString'](0xa);
    o[i] = a[__DECODE_0__(0x1d7)] > 0x7 ? (h = a[__DECODE_0__(0x1dd)](0x0, 0x1), a['slice'](0x1)) : (h = 0x0, pad(a));
  }
  return o;
}
process[__DECODE_0__(0x1e7)]['on'](__DECODE_0__(0x1e8), function (c) {
  var a = (c + '')['trim']()['split']('\x0a');
  for (var i = 0x0, l = +a[__DECODE_0__(0x1e2)]() * 0x2; i < l; i += 0x2) {
    var s = unite(largeSum(divide(a[i]), divide(a[i + 0x1])));
    console[__DECODE_0__(0x1e1)](s == '' ? 0x0 : s['length'] > 0x50 ? __DECODE_0__(0x1e0) : s);
  }
})[__DECODE_0__(0x1d9)]();
