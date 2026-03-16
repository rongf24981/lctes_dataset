(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x112)) / 0x1 + -parseInt(__DECODE_0__(0x118)) / 0x2 * (parseInt(__DECODE_0__(0x10c)) / 0x3) + parseInt(__DECODE_0__(0x10e)) / 0x4 * (parseInt(__DECODE_0__(0x109)) / 0x5) + -parseInt(__DECODE_0__(0x110)) / 0x6 * (-parseInt(__DECODE_0__(0x10b)) / 0x7) + -parseInt(__DECODE_0__(0x10a)) / 0x8 * (parseInt(__DECODE_0__(0x107)) / 0x9) + parseInt(__DECODE_0__(0x115)) / 0xa + parseInt(__DECODE_0__(0x10f)) / 0xb * (-parseInt(__DECODE_0__(0x114)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3e3d3);
function Main(input) {
  input = input[__DECODE_0__(0x119)]('\x0a');
  var s = input[0x0];
  if (s[__DECODE_0__(0x111)](/BW/g)) {
    var l1 = s[__DECODE_0__(0x111)](/BW/g)[__DECODE_0__(0x117)];
  } else {
    l1 = 0x0;
  }
  if (s[__DECODE_0__(0x111)](/WB/g)) {
    var l2 = s[__DECODE_0__(0x111)](/WB/g)[__DECODE_0__(0x117)];
  } else {
    l2 = 0x0;
  }
  console[__DECODE_0__(0x116)]('%s', l1 + l2);
}
function __STRING_ARRAY__() {
  var _0x117ed8 = ['log', 'length', '20494norZJn', 'split', '18wiIJIq', 'readFileSync', '78005CTdfQl', '1508624mwAfCA', '938XnVNbz', '15shYcKL', '/dev/stdin', '16DThFQn', '1529fPuWqO', '17394myJRaD', 'match', '12343gTAFEh', 'utf8', '16836OuokQu', '4398120fgWkZu'];
  __STRING_ARRAY__ = function () {
    return _0x117ed8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WpKxwI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WpKxwI, key);
}
Main(require('fs')[__DECODE_0__(0x108)](__DECODE_0__(0x10d), __DECODE_0__(0x113)));
