function __DECODE_0__(PdDLtN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PdDLtN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc3)) / 0x1 + -parseInt(__DECODE_0__(0xc5)) / 0x2 * (parseInt(__DECODE_0__(0xbf)) / 0x3) + -parseInt(__DECODE_0__(0xc6)) / 0x4 * (parseInt(__DECODE_0__(0xc4)) / 0x5) + parseInt(__DECODE_0__(0xcc)) / 0x6 + parseInt(__DECODE_0__(0xca)) / 0x7 + -parseInt(__DECODE_0__(0xc0)) / 0x8 * (-parseInt(__DECODE_0__(0xbb)) / 0x9) + parseInt(__DECODE_0__(0xc9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x22d62);
process[__DECODE_0__(0xbd)][__DECODE_0__(0xcb)]();
process[__DECODE_0__(0xbd)][__DECODE_0__(0xc7)](__DECODE_0__(0xbc));
var g_input = '';
function __STRING_ARRAY__() {
  var _0x9c6f7d = ['resume', '1471356KBoUpt', 'slice', 'log', '63783nNBUoB', 'utf8', 'stdin', 'length', '147tvZGam', '8AFgzfm', 'end', 'split', '6182WruTFK', '20555KyPABW', '1898dzHlCq', '236JNQHob', 'setEncoding', 'FESTIVAL', '741700djKwVP', '693525CBvRny'];
  __STRING_ARRAY__ = function () {
    return _0x9c6f7d;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xbd)]['on']('data', function (chunk) {
  g_input += chunk;
});
process[__DECODE_0__(0xbd)]['on'](__DECODE_0__(0xc1), function () {
  Main(g_input[__DECODE_0__(0xc2)](/\r?\n/));
});
function Main(input) {
  console[__DECODE_0__(0xba)](input[0x0][__DECODE_0__(0xb9)](0x0, input[0x0][__DECODE_0__(0xbe)] - __DECODE_0__(0xc8)['length']));
  return 0x0;
}
