var a0_0x474fa4 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2315d7 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2315d7(0xf3)) / 0x1 * (-parseInt(_0x2315d7(0xf5)) / 0x2) + parseInt(_0x2315d7(0xf9)) / 0x3 + -parseInt(_0x2315d7(0xfa)) / 0x4 + -parseInt(_0x2315d7(0xf2)) / 0x5 + parseInt(_0x2315d7(0xef)) / 0x6 + -parseInt(_0x2315d7(0xf4)) / 0x7 * (parseInt(_0x2315d7(0xed)) / 0x8) + parseInt(_0x2315d7(0xf0)) / 0x9;
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
  var _0x4dd41d = __DECODE_0__;
  var aP = Object[_0x4dd41d(0xfb)](a);
  var bP = Object[_0x4dd41d(0xfb)](b);
  if (aP[_0x4dd41d(0xf6)] != bP[_0x4dd41d(0xf6)]) {
    return ![];
  }
  for (var i = 0x0; i < aP[_0x4dd41d(0xf6)]; i++) {
    if (a[aP[i]] !== b[aP[i]]) {
      return ![];
    }
  }
  return !![];
}
function pi(text) {
  return parseInt(text, 0xa);
}
var six = [0x6, 0x5, 0x4, 0x3, 0x2, 0x1][a0_0x474fa4(0xea)](_ => Math['pow'](0x6, _));
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
var nine = [0x5, 0x4, 0x3, 0x2, 0x1][a0_0x474fa4(0xea)](_ => Math[a0_0x474fa4(0xf8)](0x9, _));
function count(i) {
  var _0x15eadc = a0_0x474fa4;
  if (i < 0x6) {
    return i;
  }
  if (i < 0x9) {
    return 0x1 + (i - 0x6);
  }
  return Math[_0x15eadc(0xee)](count(i - six[_0x15eadc(0xec)](_ => _ <= i)) + 0x1, count(i - nine['find'](_ => _ <= i)) + 0x1);
}
function main(input) {
  var _0x56b15f = a0_0x474fa4;
  var i = pi(input);
  console[_0x56b15f(0xf1)](count(i));
}
main(require('fs')['readFileSync'](a0_0x474fa4(0xf7), a0_0x474fa4(0xeb)));
