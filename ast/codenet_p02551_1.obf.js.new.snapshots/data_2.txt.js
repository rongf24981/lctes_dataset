(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x188)) / 0x1 + -parseInt(__DECODE_0__(0x180)) / 0x2 + -parseInt(__DECODE_0__(0x186)) / 0x3 + parseInt(__DECODE_0__(0x182)) / 0x4 * (-parseInt(__DECODE_0__(0x185)) / 0x5) + parseInt(__DECODE_0__(0x184)) / 0x6 + -parseInt(__DECODE_0__(0x17e)) / 0x7 + parseInt(__DECODE_0__(0x183)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x22fb1);
function Main(input) {
  input = input[__DECODE_0__(0x187)]('\x0a');
  tmp = input[0x0][__DECODE_0__(0x187)]('\x20');
  var N = parseInt(tmp[0x0]);
  var Q = parseInt(tmp[0x1]);
  var minRows = Array(N - 0x2);
  var minCols = Array(N - 0x2);
  minRows[__DECODE_0__(0x181)](N - 0x2);
  minCols[__DECODE_0__(0x181)](N - 0x2);
  var result = BigInt((N - 0x2) * (N - 0x2));
  for (var i = 0x0; i < Q; i++) {
    var query = input[i + 0x1][__DECODE_0__(0x187)]('\x20');
    var q_1 = parseInt(query[0x0]);
    var q_2 = parseInt(query[0x1]);
    var myArray = minRows;
    var myArray2 = minCols;
    var index = q_2 - 0x2;
    var closest = minCols[index];
    if (q_1 == 0x1) {
      myArray = minCols;
      myArray2 = minRows;
      closest = minRows[index];
    }
    result -= BigInt(closest);
    for (var j = 0x0; j < closest; j++) {
      if (myArray[j] > index) {
        myArray[j] = index;
      }
    }
    myArray2[index] = 0x0;
  }
  console[__DECODE_0__(0x17f)]('%d', Number(result));
}
function __DECODE_0__(UOerly, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UOerly, key);
}
Main(require('fs')[__DECODE_0__(0x17d)]('/dev/stdin', 'utf8'));
function __STRING_ARRAY__() {
  var _0x43aea6 = ['fill', '26416FfsLDT', '4356136SnouGA', '1018146JcrJVc', '140TWUgVm', '771636oSyohc', 'split', '102779phVcps', 'readFileSync', '60634RJdhsp', 'log', '34724EvUgXN'];
  __STRING_ARRAY__ = function () {
    return _0x43aea6;
  };
  return __STRING_ARRAY__();
}
