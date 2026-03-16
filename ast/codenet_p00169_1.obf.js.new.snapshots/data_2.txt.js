function __DECODE_0__(aFmPiZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFmPiZ, key);
}
function __STRING_ARRAY__() {
  var _0x342e5c = ['70420MsqVyS', '1564506FgOdIm', 'log', 'filter', '161lQltCt', '926321rRZNmq', '372wHPVTh', '2269836afCBat', 'map', 'utf8', '4518824Qrgltf', '1964EjKgNv', '25WJUhtG', 'readFileSync', '529wtpJla', '846tYRQVU', 'split', '126344htkKyI', 'shift', 'trim', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x342e5c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e3)) / 0x1 * (-parseInt(__DECODE_0__(0x1e0)) / 0x2) + parseInt(__DECODE_0__(0x1dc)) / 0x3 + -parseInt(__DECODE_0__(0x1df)) / 0x4 + parseInt(__DECODE_0__(0x1e1)) / 0x5 * (-parseInt(__DECODE_0__(0x1d6)) / 0x6) + -parseInt(__DECODE_0__(0x1d9)) / 0x7 * (parseInt(__DECODE_0__(0x1e6)) / 0x8) + -parseInt(__DECODE_0__(0x1e4)) / 0x9 * (-parseInt(__DECODE_0__(0x1d5)) / 0xa) + parseInt(__DECODE_0__(0x1da)) / 0xb * (parseInt(__DECODE_0__(0x1db)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xae0db);
var input = require('fs')[__DECODE_0__(0x1e2)]('/dev/stdin', __DECODE_0__(0x1de));
var Arr = input[__DECODE_0__(0x1d3)]()['split']('\x0a');
while (!![]) {
  var arr = Arr[__DECODE_0__(0x1e7)]()[__DECODE_0__(0x1e5)]('\x20')[__DECODE_0__(0x1dd)](Number);
  if (arr[0x0] == 0x0) {
    break;
  }
  var sum = 0x0;
  arr = arr[__DECODE_0__(0x1d8)](function (v) {
    if (v > 0xa) {
      v = 0xa;
    }
    sum += v;
    return v == 0x1;
  });
  var i = arr[__DECODE_0__(0x1d4)];
  while (i != 0x0) {
    if (sum + 0xa <= 0x15) {
      sum += 0xa;
    }
    i--;
  }
  console[__DECODE_0__(0x1d7)](sum > 0x15 ? 0x0 : sum);
}
