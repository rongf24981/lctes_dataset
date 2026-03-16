function __STRING_ARRAY__() {
  var _0x4e95a7 = ['abs', 'split', '3737237AgMIPu', '4911876nVkTxJ', 'readFileSync', '14515200ISxpeX', 'max', '/dev/stdin', '8FbUxNE', 'length', 'map', '3050490tmeUPd', 'min', '18611vsNZRB', '861693YGVuZB', '8AmdWxM', '1673984qNnlxo', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4e95a7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x153)) / 0x1 * (-parseInt(__DECODE_0__(0x155)) / 0x2) + -parseInt(__DECODE_0__(0x154)) / 0x3 + parseInt(__DECODE_0__(0x156)) / 0x4 + -parseInt(__DECODE_0__(0x151)) / 0x5 + -parseInt(__DECODE_0__(0x15b)) / 0x6 + parseInt(__DECODE_0__(0x15a)) / 0x7 * (parseInt(__DECODE_0__(0x14e)) / 0x8) + parseInt(__DECODE_0__(0x14b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbd270);
function Main(input) {
  input = input[__DECODE_0__(0x159)]('\x0a');
  if (input[input[__DECODE_0__(0x14f)] - 0x1] === '') {
    input['pop']();
  }
  const N = input[0x0]['split']('\x20')[0x0] - 0x0;
  const K = input[0x0]['split']('\x20')[0x1] - 0x0;
  const x = input[0x1][__DECODE_0__(0x159)]('\x20')[__DECODE_0__(0x150)](e => {
    return e - 0x0;
  });
  var pointer = x['findIndex'](e => {
    return e => 0x0;
  }) - K;
  if (pointer < 0x0) {
    pointer = 0x0;
  }
  var temp;
  var ret = Infinity;
  for (var i = 0x0; i < K; i++) {
    if (pointer + i + K - 0x1 >= x['length']) {
      break;
    }
    if (x[pointer + i] * x[pointer + i + K - 0x1] < 0x0) {
      temp = Math[__DECODE_0__(0x152)](-x[pointer + i], x[pointer + i + K - 0x1]) - x[pointer + i] + x[pointer + i + K - 0x1];
    } else {
      temp = Math[__DECODE_0__(0x14c)](Math[__DECODE_0__(0x158)](x[pointer + i]), Math[__DECODE_0__(0x158)](x[pointer + i + K - 0x1]));
    }
    ret = Math[__DECODE_0__(0x152)](ret, temp);
  }
  console[__DECODE_0__(0x157)](ret);
}
function __DECODE_0__(BdVPvN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BdVPvN, key);
}
Main(require('fs')[__DECODE_0__(0x14a)](__DECODE_0__(0x14d), 'utf8'));
