function __DECODE_0__(nRrFoD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nRrFoD, key);
}
function __STRING_ARRAY__() {
  var _0x241114 = ['1873151pWNOFh', 'utf8', '4418970wrOGkh', '2347473GQbduZ', '22530BlAfCq', 'pow', 'split', '10yNMnDs', '38OIFkLj', '269918GpJblS', '12367854jQdvQG', '6quQmPc', '38818806fPLcUO', '40EMrOLx', 'isInteger', '60jpmQUZ', 'log', '8LxvINs'];
  __STRING_ARRAY__ = function () {
    return _0x241114;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b2)) / 0x1 * (-parseInt(__DECODE_0__(0x1b6)) / 0x2) + -parseInt(__DECODE_0__(0x1b1)) / 0x3 * (-parseInt(__DECODE_0__(0x1ad)) / 0x4) + -parseInt(__DECODE_0__(0x1b0)) / 0x5 * (parseInt(__DECODE_0__(0x1a7)) / 0x6) + parseInt(__DECODE_0__(0x1ae)) / 0x7 * (parseInt(__DECODE_0__(0x1a9)) / 0x8) + parseInt(__DECODE_0__(0x1a6)) / 0x9 * (parseInt(__DECODE_0__(0x1b5)) / 0xa) + parseInt(__DECODE_0__(0x1b7)) / 0xb * (parseInt(__DECODE_0__(0x1ab)) / 0xc) + -parseInt(__DECODE_0__(0x1a8)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe9e69);
function Main(input) {
  input = input[__DECODE_0__(0x1b4)]('\x20');
  ans = input[0x0] / input[0x1];
  num = 0x0;
  var a = Number[__DECODE_0__(0x1aa)](ans);
  if (a === !![]) {
    ans = -0x1;
  } else {
    while (!![]) {
      num++;
      cal = input[0x0] * num / input[0x1];
      var b = Number['isInteger'](cal);
      if (b === !![]) {
        ans = input[0x0] * (num - 0x1);
        break;
      }
      if (input[0x0] > Math['pow'](0xa, 0x9) | input[0x1] > Math['pow'](0xa, 0x9) | input[0x0] * (num - 0x1) > Math[__DECODE_0__(0x1b3)](0xa, 0x12)) {
        ans = -0x1;
        break;
      }
    }
  }
  console[__DECODE_0__(0x1ac)](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1af)));
