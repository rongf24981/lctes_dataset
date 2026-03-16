function __STRING_ARRAY__() {
  var _0x304508 = ['13475kAPRQz', '117170gOFwWO', '27eWgNKN', '2864266CNIxML', 'map', 'max', '2920MIIlac', '1432050raVLmK', 'readFileSync', '5509625XtVsVi', 'split', '3wnpGRe', '324MsTMpY', '1830076OYGEtl', '785760vPFIFH', '/dev/stdin', '%d\x20%d', 'utf8', '24FqAVVA', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x304508;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x162)) / 0x1 + -parseInt(__DECODE_0__(0x16b)) / 0x2 + parseInt(__DECODE_0__(0x15f)) / 0x3 * (-parseInt(__DECODE_0__(0x161)) / 0x4) + -parseInt(__DECODE_0__(0x169)) / 0x5 * (-parseInt(__DECODE_0__(0x160)) / 0x6) + -parseInt(__DECODE_0__(0x168)) / 0x7 * (-parseInt(__DECODE_0__(0x16e)) / 0x8) + -parseInt(__DECODE_0__(0x16a)) / 0x9 * (-parseInt(__DECODE_0__(0x16f)) / 0xa) + -parseInt(__DECODE_0__(0x171)) / 0xb * (-parseInt(__DECODE_0__(0x166)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb0c2e);
function __DECODE_0__(IttZmp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IttZmp, key);
}
function Main(s) {
  s = s[__DECODE_0__(0x15e)]('\x0a');
  var a = s[0x1]['split']('\x20')[__DECODE_0__(0x16c)](a => +a);
  const n = +s[0x0];
  var m = Math[__DECODE_0__(0x16d)](...a);
  var b = [...a][__DECODE_0__(0x167)]((a, b) => a - b);
  var c = 0x218711a00;
  for (var i = 0x0; i < n - 0x1; i++) {
    if (Math['abs'](m / 0x2 - b[i]) < c) {
      c = Math['abs'](m / 0x2 - b[i]);
    } else {
      break;
    }
  }
  console['log'](__DECODE_0__(0x164), m, b[i - 0x1]);
}
Main(require('fs')[__DECODE_0__(0x170)](__DECODE_0__(0x163), __DECODE_0__(0x165)));
