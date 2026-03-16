(function (stringArrayFunction, comparisonValue) {
  var _0x1a2441 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x1a2441(0x1f3)) / 0x1 + -parseInt(_0x1a2441(0x1f6)) / 0x2 + parseInt(_0x1a2441(0x1f4)) / 0x3 * (parseInt(_0x1a2441(0x1f2)) / 0x4) + -parseInt(_0x1a2441(0x1fb)) / 0x5 + parseInt(_0x1a2441(0x1ef)) / 0x6 * (parseInt(_0x1a2441(0x1f7)) / 0x7) + -parseInt(_0x1a2441(0x1fc)) / 0x8 * (parseInt(_0x1a2441(0x1f0)) / 0x9) + parseInt(_0x1a2441(0x1f8)) / 0xa * (parseInt(_0x1a2441(0x1f1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe7f60);
function __DECODE_0__(wfhlql, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wfhlql, key);
}
function Main(input) {
  var _0x3adf22 = __DECODE_0__;
  input = input[_0x3adf22(0x1fa)]('\x0a');
  var n = Number(input[0x0]);
  var d = Number(input[0x1]['split']('\x20')[0x0]);
  var x = Number(input[0x1][_0x3adf22(0x1fa)]('\x20')[0x1]);
  var array = [];
  for (var i = 0x0; i < input['length'] - 0x2; i++) {
    array[_0x3adf22(0x1f5)](Number(input[i + 0x2]));
  }
  var total = [];
  for (var j = 0x0; j < array[_0x3adf22(0x1f9)]; j++) {
    for (var k = 0x1; k < 0x64; k++) {
      if (d >= k * array[j] + 0x1) {
        total[_0x3adf22(0x1f5)](k * array[j] + 0x1);
      }
    }
  }
  console['log'](total[_0x3adf22(0x1f9)] + n + x);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function __STRING_ARRAY__() {
  var _0x249cef = ['448588eWrjgK', '527055PskubM', '6PeAWVH', 'push', '813720SXppyM', '133QfMkhK', '10ROMsjd', 'length', 'split', '7375755PdxadF', '15064yXYNsF', '266454rHbefY', '324Bfrprk', '25947911PztvSt'];
  __STRING_ARRAY__ = function () {
    return _0x249cef;
  };
  return __STRING_ARRAY__();
}
