(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf0)) / 0x1 + parseInt(__DECODE_0__(0xfc)) / 0x2 + -parseInt(__DECODE_0__(0xf6)) / 0x3 * (-parseInt(__DECODE_0__(0x100)) / 0x4) + parseInt(__DECODE_0__(0xfa)) / 0x5 * (parseInt(__DECODE_0__(0x102)) / 0x6) + parseInt(__DECODE_0__(0xf4)) / 0x7 * (parseInt(__DECODE_0__(0xf3)) / 0x8) + parseInt(__DECODE_0__(0x104)) / 0x9 * (-parseInt(__DECODE_0__(0xfe)) / 0xa) + parseInt(__DECODE_0__(0xff)) / 0xb * (-parseInt(__DECODE_0__(0x103)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x441b0);
function initOfficialHouse(bMax, fMax, rMax) {
  var o = Array(bMax);
  for (var b = 0x0; b < bMax; b++) {
    o[b] = Array(fMax);
    for (var f = 0x0; f < fMax; f++) {
      o[b][f] = Array(rMax);
      for (var r = 0x0; r < rMax; r++) {
        o[b][f][r] = 0x0;
      }
    }
  }
  return o;
}
function toString(o) {
  return o['map'](function (b) {
    return b['map'](function (f) {
      return '\x20' + f[__DECODE_0__(0xef)]('\x20');
    })[__DECODE_0__(0xef)]('\x0a');
  })[__DECODE_0__(0xef)](__DECODE_0__(0xf7));
}
function __STRING_ARRAY__() {
  var _0x398af4 = ['split', '170DsQVQC', '11WPXzzB', '446612aJvwOZ', 'utf8', '6GTRMSq', '8572632kkGKDm', '148779JcejRq', 'join', '353664IrITfE', 'log', 'map', '24Ycejje', '372477DzfriC', 'forEach', '6BAJkup', '\x0a####################\x0a', 'trim', '/dev/stdin', '2542505Ijncqs', 'shift', '58538YcehVi'];
  __STRING_ARRAY__ = function () {
    return _0x398af4;
  };
  return __STRING_ARRAY__();
}
const chunk = require('fs')['readFileSync'](__DECODE_0__(0xf9), __DECODE_0__(0x101));
var lines = chunk[__DECODE_0__(0xf8)]()['split']('\x0a');
lines[__DECODE_0__(0xfb)]();
var o = initOfficialHouse(0x4, 0x3, 0xa);
lines[__DECODE_0__(0xf5)](function (line) {
  var bfrv = line[__DECODE_0__(0xfd)]('\x20')[__DECODE_0__(0xf2)](Number);
  var b = bfrv[0x0];
  var f = bfrv[0x1];
  var r = bfrv[0x2];
  var v = bfrv[0x3];
  o[b - 0x1][f - 0x1][r - 0x1] += v;
});
function __DECODE_0__(WzbBBv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WzbBBv, key);
}
console[__DECODE_0__(0xf1)](toString(o));
