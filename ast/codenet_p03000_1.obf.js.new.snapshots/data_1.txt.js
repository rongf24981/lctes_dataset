var a0_0x20ab33 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4d1729 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4d1729(0x83)) / 0x1 * (parseInt(_0x4d1729(0x8c)) / 0x2) + parseInt(_0x4d1729(0x87)) / 0x3 + parseInt(_0x4d1729(0x84)) / 0x4 + parseInt(_0x4d1729(0x88)) / 0x5 * (-parseInt(_0x4d1729(0x82)) / 0x6) + -parseInt(_0x4d1729(0x80)) / 0x7 * (parseInt(_0x4d1729(0x85)) / 0x8) + parseInt(_0x4d1729(0x8a)) / 0x9 + -parseInt(_0x4d1729(0x89)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x843d2);
function __STRING_ARRAY__() {
  var _0xaaaaea = ['utf8', '1403277yWQtQL', '8045RDUOZD', '2615350dfZgOA', '3518226mpNClJ', 'log', '2085380VLvcfH', '2829323pxRWNb', 'split', '3048XDrtMd', '1hhJPSU', '2110288aolFEN', '16vKjSDV'];
  __STRING_ARRAY__ = function () {
    return _0xaaaaea;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var _0x215e04 = __DECODE_0__;
  lines = input[_0x215e04(0x81)]('\x0a');
  firstLine = lines[0x0][_0x215e04(0x81)]('\x20');
  N = +firstLine[0x0];
  X = +firstLine[0x1];
  secondLine = lines[0x1][_0x215e04(0x81)]('\x20');
  distanceTravelled = 0x0;
  numBounces = 0x1;
  for (i = 0x0; i < N; i++) {
    distanceTravelled += +secondLine[i];
    if (distanceTravelled <= X) {
      numBounces += 0x1;
    }
  }
  console[_0x215e04(0x8b)](numBounces);
}
function __DECODE_0__(ZFBXio, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x80;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZFBXio, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x20ab33(0x86)));
