function __DECODE_0__(ILCqJw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x122;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ILCqJw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x132)) / 0x1 * (-parseInt(__DECODE_0__(0x12e)) / 0x2) + parseInt(__DECODE_0__(0x12f)) / 0x3 + parseInt(__DECODE_0__(0x122)) / 0x4 * (-parseInt(__DECODE_0__(0x12d)) / 0x5) + parseInt(__DECODE_0__(0x123)) / 0x6 * (-parseInt(__DECODE_0__(0x130)) / 0x7) + parseInt(__DECODE_0__(0x128)) / 0x8 + -parseInt(__DECODE_0__(0x12b)) / 0x9 * (parseInt(__DECODE_0__(0x12c)) / 0xa) + -parseInt(__DECODE_0__(0x125)) / 0xb * (parseInt(__DECODE_0__(0x12a)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7628e);
function Main(input) {
  input = input[__DECODE_0__(0x131)]('\x0a');
  var n = parseInt(input[0x0], 0xa);
  var q = parseInt(input[0x2], 0xa);
  input[0x1] = input[0x1][__DECODE_0__(0x131)]('\x20');
  input[0x3] = input[0x3][__DECODE_0__(0x131)]('\x20');
  var s = Array(n);
  var t = Array(q);
  for (var i = 0x0; i < n; i++) {
    s[i] = parseInt(input[0x1][i], 0xa);
  }
  for (var i = 0x0; i < q; i++) {
    t[i] = parseInt(input[0x3][i], 0xa);
  }
  var count = 0x0;
  for (var i = 0x0; i < q; i++) {
    var j;
    for (j = 0x0; j < n; j++) {
      if (s[j] == t[i]) {
        break;
      }
    }
    if (j < n) {
      count++;
    }
  }
  console[__DECODE_0__(0x124)](count);
}
function __STRING_ARRAY__() {
  var _0x3dadf2 = ['readFileSync', '/dev/stdin', '6435224tFtZuq', 'utf8', '180168BnGDTy', '1431HKIVpH', '21030ZrnnYi', '735yLsVSd', '753418gfUzSG', '507297wYwRUt', '2809184sJcfEi', 'split', '2hrpLKd', '2772UPLvZT', '6BxqPrQ', 'log', '297WmmDWA'];
  __STRING_ARRAY__ = function () {
    return _0x3dadf2;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x126)](__DECODE_0__(0x127), __DECODE_0__(0x129)));
