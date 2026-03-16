(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x13a)) / 0x1 * (-parseInt(__DECODE_0__(0x13e)) / 0x2) + -parseInt(__DECODE_0__(0x142)) / 0x3 + parseInt(__DECODE_0__(0x13d)) / 0x4 * (parseInt(__DECODE_0__(0x143)) / 0x5) + -parseInt(__DECODE_0__(0x13b)) / 0x6 + -parseInt(__DECODE_0__(0x141)) / 0x7 + parseInt(__DECODE_0__(0x139)) / 0x8 + parseInt(__DECODE_0__(0x13f)) / 0x9 * (parseInt(__DECODE_0__(0x13c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45c9f);
function Main(input) {
  input = input[__DECODE_0__(0x138)]('\x0a');
  st = input[0x0]['split']('\x20');
  console[__DECODE_0__(0x140)](st[0x1] + st[0x0]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x144), __DECODE_0__(0x137)));
function __DECODE_0__(XFmVzI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x137;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XFmVzI, key);
}
function __STRING_ARRAY__() {
  var _0x33c876 = ['/dev/stdin', 'utf8', 'split', '3232312LzItIx', '8492cdkiMh', '72240zWfDeI', '8175970VZSVki', '218188FjnakH', '10LxBIlo', '9QEaHgt', 'log', '3533642cntPik', '1547826XofMmY', '5jAzVmH'];
  __STRING_ARRAY__ = function () {
    return _0x33c876;
  };
  return __STRING_ARRAY__();
}
