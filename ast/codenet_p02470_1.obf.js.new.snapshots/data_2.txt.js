(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12a)) / 0x1 + -parseInt(__DECODE_0__(0x123)) / 0x2 * (parseInt(__DECODE_0__(0x12d)) / 0x3) + parseInt(__DECODE_0__(0x122)) / 0x4 + parseInt(__DECODE_0__(0x130)) / 0x5 * (parseInt(__DECODE_0__(0x127)) / 0x6) + parseInt(__DECODE_0__(0x12f)) / 0x7 * (-parseInt(__DECODE_0__(0x126)) / 0x8) + -parseInt(__DECODE_0__(0x12c)) / 0x9 * (parseInt(__DECODE_0__(0x121)) / 0xa) + -parseInt(__DECODE_0__(0x125)) / 0xb * (-parseInt(__DECODE_0__(0x124)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa9a54);
function __DECODE_0__(ZOfMON, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x120;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZOfMON, key);
}
function Main(input) {
  var n = parseInt(input, 0xa);
  var count = 0x0;
  for (i = 0x1; i < n; i++) {
    if (gcd(n, i) == 0x1) {
      count++;
    }
  }
  console[__DECODE_0__(0x129)](count);
}
function __STRING_ARRAY__() {
  var _0x2c3c1e = ['308ohLapM', '67265FvqsMz', 'min', '40KKsoeh', '1232584SWMKyW', '622jeClkk', '2244iMAJXD', '125411dYohnd', '23128KiMges', '30cQAUQJ', 'utf8', 'log', '805794eFbqUr', '/dev/stdin', '2612889qmDhSD', '12828lvjBIp', 'max'];
  __STRING_ARRAY__ = function () {
    return _0x2c3c1e;
  };
  return __STRING_ARRAY__();
}
function gcd(n, m) {
  var a;
  var b;
  var c;
  a = Math[__DECODE_0__(0x12e)](n, m);
  b = Math[__DECODE_0__(0x120)](n, m);
  c = a % b;
  if (c == 0x0) {
    return b;
  } else {
    return gcd(b, c);
  }
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x12b), __DECODE_0__(0x128)));
