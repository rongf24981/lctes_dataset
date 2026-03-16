function __STRING_ARRAY__() {
  var _0x2e5a31 = ['size', '1242812CYUEvA', 'push', 'utf8', '4866864TPfcBa', 'map', '292073QuAhiE', '4brYAtM', 'join', 'floor', '695296ZwBDoa', '/dev/stdin', 'log', '866600ndgGov', '1666767GnsIpd', '3716640vXiQKs', 'toString', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x2e5a31;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(xImKfs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x194;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xImKfs, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a0)) / 0x1 + parseInt(__DECODE_0__(0x19b)) / 0x2 + -parseInt(__DECODE_0__(0x196)) / 0x3 * (parseInt(__DECODE_0__(0x1a1)) / 0x4) + -parseInt(__DECODE_0__(0x197)) / 0x5 + parseInt(__DECODE_0__(0x19e)) / 0x6 + parseInt(__DECODE_0__(0x1a4)) / 0x7 + -parseInt(__DECODE_0__(0x195)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x65bc5);
function Main(arg) {
  var N = arg[__DECODE_0__(0x199)]('\x0a')[0x0] - 0x0;
  var A = arg['split']('\x0a')[0x1][__DECODE_0__(0x199)]('\x20')[__DECODE_0__(0x19f)](v => v - 0x0);
  var tmp = new Set(A);
  var ans = [];
  ans['push'](N);
  for (var K = 0x2; K <= N; K++) {
    if (tmp['size'] < K) {
      ans['push'](0x0);
    } else {
      ans[__DECODE_0__(0x19c)](Math[__DECODE_0__(0x1a3)](tmp[__DECODE_0__(0x19a)] / K));
    }
  }
  console[__DECODE_0__(0x194)](ans[__DECODE_0__(0x1a2)]('\x0a')[__DECODE_0__(0x198)]());
  return;
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1a5), __DECODE_0__(0x19d)));
