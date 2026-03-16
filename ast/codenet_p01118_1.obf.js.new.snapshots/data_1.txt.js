function __DECODE_0__(jDazwm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jDazwm, key);
}
var a0_0x504db4 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xb870d9 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0xb870d9(0x122)) / 0x1 + parseInt(_0xb870d9(0x113)) / 0x2 + parseInt(_0xb870d9(0x112)) / 0x3 * (-parseInt(_0xb870d9(0x11c)) / 0x4) + parseInt(_0xb870d9(0x116)) / 0x5 + -parseInt(_0xb870d9(0x11e)) / 0x6 * (parseInt(_0xb870d9(0x11d)) / 0x7) + parseInt(_0xb870d9(0x119)) / 0x8 + parseInt(_0xb870d9(0x120)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe09db);
var input = require('fs')[a0_0x504db4(0x11b)](a0_0x504db4(0x114), a0_0x504db4(0x117));
var arr = input['trim']()[a0_0x504db4(0x11f)]('\x0a');
while (!![]) {
  var [h, w] = arr[a0_0x504db4(0x11a)]()[a0_0x504db4(0x11f)]('\x20')['map'](Number);
  if (h == 0x0 && w == 0x0) {
    break;
  }
  var k = {};
  for (var i = 0x0; i < h; i++) {
    var r = arr[a0_0x504db4(0x11a)]()[a0_0x504db4(0x11f)]('');
    for (var j = 0x0; j < w; j++) {
      k[r[j]] = [i, j];
    }
  }
  var [s, sum, y, x] = [arr['shift']()[a0_0x504db4(0x11f)](''), 0x0, 0x0, 0x0];
  s[a0_0x504db4(0x118)](v => {
    var _0x2a6a0e = a0_0x504db4;
    sum += Math[_0x2a6a0e(0x115)](y - k[v][0x0]) + Math[_0x2a6a0e(0x115)](x - k[v][0x1]) + 0x1;
    [y, x] = [k[v][0x0], k[v][0x1]];
  });
  console[a0_0x504db4(0x121)](sum);
}
function __STRING_ARRAY__() {
  var _0x1d45e8 = ['5037005vUodXK', 'utf8', 'forEach', '2768760iuqQHD', 'shift', 'readFileSync', '4300ugAxPx', '12614791vrYrse', '6ZPYxRw', 'split', '18999441vrujtp', 'log', '353728qjCTVO', '3387UaEOeV', '1649996qpxBRY', '/dev/stdin', 'abs'];
  __STRING_ARRAY__ = function () {
    return _0x1d45e8;
  };
  return __STRING_ARRAY__();
}
