(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x72)) / 0x1 + parseInt(__DECODE_0__(0x7e)) / 0x2 * (parseInt(__DECODE_0__(0x76)) / 0x3) + parseInt(__DECODE_0__(0x71)) / 0x4 + -parseInt(__DECODE_0__(0x7a)) / 0x5 + -parseInt(__DECODE_0__(0x78)) / 0x6 + -parseInt(__DECODE_0__(0x7d)) / 0x7 * (-parseInt(__DECODE_0__(0x79)) / 0x8) + -parseInt(__DECODE_0__(0x74)) / 0x9 * (parseInt(__DECODE_0__(0x6f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3c20e);
function main(input) {
  var n = input[0x0] - 0x0;
  var list = [0x0][__DECODE_0__(0x7f)](input[0x1][__DECODE_0__(0x73)]('\x20')['map'](v => v - 0x0), [0x0]);
  var llist = [];
  llist[0x0] = 0x0;
  var rlist = [];
  rlist[n] = 0x0;
  for (var i = 0x1; i <= n; i++) {
    llist[i] = llist[i - 0x1] + Math[__DECODE_0__(0x75)](list[i] - list[i - 0x1]);
    rlist[n - i] = rlist[n - i + 0x1] + Math['abs'](list[n - i + 0x1] - list[n - i + 0x2]);
  }
  for (var i = 0x1; i <= n; i++) {
    var ans = 0x0;
    ans += llist[i - 0x1];
    ans += rlist[i] || 0x0;
    ans += Math[__DECODE_0__(0x75)](list[i - 0x1] - list[i + 0x1]);
    console[__DECODE_0__(0x7c)](ans);
  }
}
function __DECODE_0__(suGYIq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(suGYIq, key);
}
function __STRING_ARRAY__() {
  var _0x20d967 = ['1850334utOAOc', '16wfmLPh', '8510CgbHSL', 'readFileSync', 'log', '1390417rvfDVc', '532630MICRKM', 'concat', '1333180ahEWTQ', '/dev/stdin', '1277140CXbNJH', '106787XrENap', 'split', '36zQRkpS', 'abs', '3cqPLsk', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x20d967;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x7b)](__DECODE_0__(0x70), 'utf8')[__DECODE_0__(0x77)]()['split']('\x0a'));
