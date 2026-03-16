(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x83)) / 0x1 * (parseInt(__DECODE_0__(0x8c)) / 0x2) + parseInt(__DECODE_0__(0x87)) / 0x3 + parseInt(__DECODE_0__(0x84)) / 0x4 + parseInt(__DECODE_0__(0x88)) / 0x5 * (-parseInt(__DECODE_0__(0x82)) / 0x6) + -parseInt(__DECODE_0__(0x80)) / 0x7 * (parseInt(__DECODE_0__(0x85)) / 0x8) + parseInt(__DECODE_0__(0x8a)) / 0x9 + -parseInt(__DECODE_0__(0x89)) / 0xa;
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
  lines = input[__DECODE_0__(0x81)]('\x0a');
  firstLine = lines[0x0][__DECODE_0__(0x81)]('\x20');
  N = +firstLine[0x0];
  X = +firstLine[0x1];
  secondLine = lines[0x1][__DECODE_0__(0x81)]('\x20');
  distanceTravelled = 0x0;
  numBounces = 0x1;
  for (i = 0x0; i < N; i++) {
    distanceTravelled += +secondLine[i];
    if (distanceTravelled <= X) {
      numBounces += 0x1;
    }
  }
  console[__DECODE_0__(0x8b)](numBounces);
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
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x86)));
