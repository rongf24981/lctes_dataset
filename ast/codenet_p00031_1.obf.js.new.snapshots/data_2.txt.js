(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x188)) / 0x1 + -parseInt(__DECODE_0__(0x17e)) / 0x2 * (parseInt(__DECODE_0__(0x17b)) / 0x3) + -parseInt(__DECODE_0__(0x184)) / 0x4 * (-parseInt(__DECODE_0__(0x183)) / 0x5) + parseInt(__DECODE_0__(0x187)) / 0x6 * (parseInt(__DECODE_0__(0x17d)) / 0x7) + parseInt(__DECODE_0__(0x18a)) / 0x8 + -parseInt(__DECODE_0__(0x179)) / 0x9 * (-parseInt(__DECODE_0__(0x185)) / 0xa) + parseInt(__DECODE_0__(0x18b)) / 0xb * (-parseInt(__DECODE_0__(0x18c)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x597b3);
function __DECODE_0__(UCzxVo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x179;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UCzxVo, key);
}
(function (input) {
  var p = input[__DECODE_0__(0x18d)](/\n$/, '')[__DECODE_0__(0x17a)]('\x0a')['map'](Number);
  var n = p['length'];
  for (var i = 0x0; i < n; i++) {
    var g = p[__DECODE_0__(0x189)]();
    var s = [];
    g[__DECODE_0__(0x186)](0x2)[__DECODE_0__(0x17a)]('')['reverse']()['map'](function (e, i) {
      if (e == 0x1) {
        s[__DECODE_0__(0x17f)](Math[__DECODE_0__(0x180)](0x2, i));
      }
    });
    console[__DECODE_0__(0x17c)](s['join']('\x20'));
  }
})(require('fs')[__DECODE_0__(0x181)](__DECODE_0__(0x182), 'utf8'));
function __STRING_ARRAY__() {
  var _0x128ab7 = ['12PcGqTb', 'replace', '18jDwiqw', 'split', '562251TrtXkt', 'log', '175gyGRTu', '6GIlUjA', 'push', 'pow', 'readFileSync', '/dev/stdin', '65045SWbUvl', '136DWKRkU', '3361050GUNbzB', 'toString', '95286jWZsTo', '461100DFlWtt', 'shift', '2639216dzEIYa', '15111547AXjkGs'];
  __STRING_ARRAY__ = function () {
    return _0x128ab7;
  };
  return __STRING_ARRAY__();
}
