function __DECODE_0__(RsUyRz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x84;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RsUyRz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x85)) / 0x1 + parseInt(__DECODE_0__(0x94)) / 0x2 + parseInt(__DECODE_0__(0x8e)) / 0x3 * (-parseInt(__DECODE_0__(0x93)) / 0x4) + -parseInt(__DECODE_0__(0x90)) / 0x5 * (-parseInt(__DECODE_0__(0x89)) / 0x6) + parseInt(__DECODE_0__(0x88)) / 0x7 + parseInt(__DECODE_0__(0x95)) / 0x8 * (parseInt(__DECODE_0__(0x8c)) / 0x9) + -parseInt(__DECODE_0__(0x84)) / 0xa * (parseInt(__DECODE_0__(0x96)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2d17);
function Main(input) {
  if (input[__DECODE_0__(0x86)](0x0, 0x4) == __DECODE_0__(0x8a)) {
    console[__DECODE_0__(0x87)](__DECODE_0__(0x91));
  } else {
    console[__DECODE_0__(0x87)]('No');
  }
}
Main(require('fs')[__DECODE_0__(0x8d)](__DECODE_0__(0x92), __DECODE_0__(0x8f))[__DECODE_0__(0x8b)]());
function __STRING_ARRAY__() {
  var _0x46e71d = ['3126waVfsh', 'YAKI', 'trim', '1776897elgYxG', 'readFileSync', '1556259xkKwch', 'utf8', '16455tMEiha', 'Yes', '/dev/stdin', '4IZQKLI', '3486594hmLBpH', '16xWDGzt', '44HLflSQ', '8553440phvBfw', '254998LGmDXA', 'substr', 'log', '5788580gPqheS'];
  __STRING_ARRAY__ = function () {
    return _0x46e71d;
  };
  return __STRING_ARRAY__();
}
