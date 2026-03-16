function __DECODE_0__(jxQjyv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jxQjyv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x118)) / 0x1 * (parseInt(__DECODE_0__(0x119)) / 0x2) + -parseInt(__DECODE_0__(0x123)) / 0x3 * (-parseInt(__DECODE_0__(0x11c)) / 0x4) + parseInt(__DECODE_0__(0x114)) / 0x5 * (-parseInt(__DECODE_0__(0x11e)) / 0x6) + parseInt(__DECODE_0__(0x11f)) / 0x7 * (-parseInt(__DECODE_0__(0x11d)) / 0x8) + -parseInt(__DECODE_0__(0x117)) / 0x9 * (parseInt(__DECODE_0__(0x120)) / 0xa) + -parseInt(__DECODE_0__(0x121)) / 0xb + parseInt(__DECODE_0__(0x112)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe99c3);
function Main(input) {
  var N = parseInt(input[0x0], 0xa);
  var A = input[0x1][__DECODE_0__(0x116)]('\x20');
  var total = 0x0;
  for (var i = 0x0; i < N; i++) {
    A[i] = parseInt(A[i], 0xa);
    total += A[i];
  }
  var result = 0x0;
  var mae = 0x0;
  var ato = 0x0;
  var target = 0x0;
  for (var i = 0x0; i < N; i++) {
    if (mae + A[i] < total / 0x2) {
      mae += A[i];
    } else {
      if (mae + A[i] == total / 0x2) {
        console[__DECODE_0__(0x11b)]('%s', 0x0);
        return;
      } else {
        target = i;
        ato = total - mae - A[i];
        break;
      }
    }
  }
  var diff = Math[__DECODE_0__(0x122)](ato - mae);
  var result = Math[__DECODE_0__(0x122)](A[i] - diff);
  console[__DECODE_0__(0x11b)]('%s', result);
}
function __STRING_ARRAY__() {
  var _0x1e4e24 = ['574165NoKGGe', 'readFileSync', 'split', '504ekdLgd', '117NCRRQn', '4964pbmHRq', 'utf8', 'log', '324zYFmgO', '16VEPiMK', '42oeGhsM', '2661589SDqphB', '103780qVNXBM', '15625500KNRMhW', 'abs', '38664dRjTph', '38261976ejdgyp', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1e4e24;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x115)](__DECODE_0__(0x113), __DECODE_0__(0x11a))[__DECODE_0__(0x116)]('\x0a'));
