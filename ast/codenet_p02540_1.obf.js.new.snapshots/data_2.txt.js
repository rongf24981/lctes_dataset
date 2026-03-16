(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1bd)) / 0x1 * (-parseInt(__DECODE_0__(0x1b8)) / 0x2) + -parseInt(__DECODE_0__(0x1b1)) / 0x3 + -parseInt(__DECODE_0__(0x1ba)) / 0x4 * (parseInt(__DECODE_0__(0x1bc)) / 0x5) + parseInt(__DECODE_0__(0x1bb)) / 0x6 * (parseInt(__DECODE_0__(0x1b9)) / 0x7) + parseInt(__DECODE_0__(0x1c1)) / 0x8 + -parseInt(__DECODE_0__(0x1b7)) / 0x9 + -parseInt(__DECODE_0__(0x1be)) / 0xa * (-parseInt(__DECODE_0__(0x1b6)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x19ea7);
function __STRING_ARRAY__() {
  var _0x403690 = ['1490qFJBLk', 'map', 'push', '1003944WJdPpI', '542262UXRppn', 'split', '/dev/stdin', 'utf8', 'readFileSync', '10120BaEbjq', '1405773rEazSi', '14iacGSR', '8057AvTVRv', '20iujpOQ', '486VOcMvy', '55425qZHCLg', '20389tKCIFQ'];
  __STRING_ARRAY__ = function () {
    return _0x403690;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x1b2)]('\x0a');
  const N = parseInt(input[0x0], 0xa);
  var x = [];
  var y = [];
  for (var i = 0x1; i <= N; i++) {
    tmp = input[i][__DECODE_0__(0x1b2)]('\x20')[__DECODE_0__(0x1bf)](n => parseInt(n, 0xa));
    x[__DECODE_0__(0x1c0)](tmp[0x0]);
    y['push'](tmp[0x1]);
  }
  var counts = [];
  for (var j = 0x0; j < N; j++) {
    var count = 0x0;
    for (var k = 0x0; k < N; k++) {
      if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
        count++;
      }
    }
    counts[__DECODE_0__(0x1c0)](parseInt(count, 0xa));
  }
  for (var j = 0x0; j < N; j++) {
    var count = 0x1;
    for (var k = 0x0; k < N; k++) {
      if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
        count = count + counts[k];
      }
    }
    console['log'](count);
  }
}
function __DECODE_0__(icWPKf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(icWPKf, key);
}
Main(require('fs')[__DECODE_0__(0x1b5)](__DECODE_0__(0x1b3), __DECODE_0__(0x1b4)));
