var a0_0x7d8826 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xb1b49d = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xb1b49d(0x9f)) / 0x1 + -parseInt(_0xb1b49d(0x99)) / 0x2 * (parseInt(_0xb1b49d(0xa2)) / 0x3) + -parseInt(_0xb1b49d(0x95)) / 0x4 + -parseInt(_0xb1b49d(0x9b)) / 0x5 * (parseInt(_0xb1b49d(0xa4)) / 0x6) + parseInt(_0xb1b49d(0x98)) / 0x7 + -parseInt(_0xb1b49d(0x9d)) / 0x8 * (-parseInt(_0xb1b49d(0x9c)) / 0x9) + -parseInt(_0xb1b49d(0x9e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x187bb);
function __DECODE_0__(HhVCuG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x93;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HhVCuG, key);
}
function __STRING_ARRAY__() {
  var _0x2d60c2 = ['918764PxfkJq', '626ptBvwz', 'max', '324695shrSok', '549eQyiel', '18400VcXawb', '994180dBtgGb', '143788mLXDmf', 'log', 'readFileSync', '177SVEuIK', '/dev/stdin', '18NqDAgo', 'YES', 'min', '9420yUkMXs', 'utf8', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x2d60c2;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  var _0x3fd348 = __DECODE_0__;
  s = s['trim']();
  var a = 0x0;
  var b = 0x0;
  var c = 0x0;
  var ans = _0x3fd348(0x93);
  for (var i = 0x0; i < s[_0x3fd348(0x97)]; i++) {
    if (s[i] === 'a') {
      a++;
    } else {
      if (s[i] === 'b') {
        b++;
      } else {
        c++;
      }
    }
  }
  if (Math[_0x3fd348(0x9a)](a, b, c) - Math[_0x3fd348(0x94)](a, b, c) > 0x1) {
    ans = 'NO';
  }
  console[_0x3fd348(0xa0)](ans);
}
Main(require('fs')[a0_0x7d8826(0xa1)](a0_0x7d8826(0xa3), a0_0x7d8826(0x96)));
