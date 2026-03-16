(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf3)) / 0x1 * (-parseInt(__DECODE_0__(0xf5)) / 0x2) + parseInt(__DECODE_0__(0xf9)) / 0x3 + -parseInt(__DECODE_0__(0xfa)) / 0x4 + -parseInt(__DECODE_0__(0xf2)) / 0x5 + parseInt(__DECODE_0__(0xef)) / 0x6 + -parseInt(__DECODE_0__(0xf4)) / 0x7 * (parseInt(__DECODE_0__(0xed)) / 0x8) + parseInt(__DECODE_0__(0xf0)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2f152);
function equal(a, b) {
  var aP = Object[__DECODE_0__(0xfb)](a);
  var bP = Object[__DECODE_0__(0xfb)](b);
  if (aP[__DECODE_0__(0xf6)] != bP[__DECODE_0__(0xf6)]) {
    return ![];
  }
  for (var i = 0x0; i < aP[__DECODE_0__(0xf6)]; i++) {
    if (a[aP[i]] !== b[aP[i]]) {
      return ![];
    }
  }
  return !![];
}
function pi(text) {
  return parseInt(text, 0xa);
}
var six = [0x6, 0x5, 0x4, 0x3, 0x2, 0x1][__DECODE_0__(0xea)](_ => Math['pow'](0x6, _));
function __STRING_ARRAY__() {
  var _0x4e58e1 = ['min', '1218726AyCsHW', '2246517CuclIM', 'log', '1180125QsgGAN', '12778tWRLNO', '7jmvLuU', '30JcNvfd', 'length', '/dev/stdin', 'pow', '240039JPxBlN', '325456xQmKQu', 'getOwnPropertyNames', 'map', 'utf8', 'find', '1713424PRtzpK'];
  __STRING_ARRAY__ = function () {
    return _0x4e58e1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZaYPEl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xea;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZaYPEl, key);
}
var nine = [0x5, 0x4, 0x3, 0x2, 0x1][__DECODE_0__(0xea)](_ => Math[__DECODE_0__(0xf8)](0x9, _));
function count(i) {
  if (i < 0x6) {
    return i;
  }
  if (i < 0x9) {
    return 0x1 + (i - 0x6);
  }
  return Math[__DECODE_0__(0xee)](count(i - six[__DECODE_0__(0xec)](_ => _ <= i)) + 0x1, count(i - nine['find'](_ => _ <= i)) + 0x1);
}
function main(input) {
  var i = pi(input);
  console[__DECODE_0__(0xf1)](count(i));
}
main(require('fs')['readFileSync'](__DECODE_0__(0xf7), __DECODE_0__(0xeb)));
