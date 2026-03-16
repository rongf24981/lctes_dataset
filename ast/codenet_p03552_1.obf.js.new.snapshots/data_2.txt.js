(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x9f)) / 0x1 + parseInt(__DECODE_0__(0x96)) / 0x2 * (parseInt(__DECODE_0__(0xa1)) / 0x3) + -parseInt(__DECODE_0__(0xa7)) / 0x4 * (-parseInt(__DECODE_0__(0xa2)) / 0x5) + parseInt(__DECODE_0__(0x9c)) / 0x6 * (parseInt(__DECODE_0__(0x9e)) / 0x7) + parseInt(__DECODE_0__(0x99)) / 0x8 + parseInt(__DECODE_0__(0xa4)) / 0x9 + -parseInt(__DECODE_0__(0xa8)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1c6bc);
function Main(input) {
  input = input['split']('\x0a');
  if (input[input[__DECODE_0__(0xa6)] - 0x1] === '') {
    input[__DECODE_0__(0xa0)]();
  }
  const N = input[0x0][__DECODE_0__(0x97)]('\x20')[0x0] - 0x0;
  const Z = input[0x0][__DECODE_0__(0x97)]('\x20')[0x1] - 0x0;
  const W = input[0x0][__DECODE_0__(0x97)]('\x20')[0x2] - 0x0;
  const a = input[0x1][__DECODE_0__(0x97)]('\x20')[__DECODE_0__(0x98)](e => {
    return e - 0x0;
  });
  if (a[__DECODE_0__(0xa6)] === 0x1) {
    console[__DECODE_0__(0xa5)](Math[__DECODE_0__(0xa3)](W - a[0x0]));
    return;
  }
  var x;
  var y;
  x = new Array(N);
  y = new Array(N);
  for (var i = N - 0x1; i >= 0x0; i--) {
    if (i === N - 0x1) {
      y[i] = Math[__DECODE_0__(0xa3)](a[N - 0x1] - a[N - 0x2]);
      x[i] = Math[__DECODE_0__(0xa3)](a[N - 0x1] - a[N - 0x2]);
      continue;
    }
    y[i] = Math[__DECODE_0__(0x9a)](...x[__DECODE_0__(0x93)](i + 0x1), i !== 0x0 ? Math[__DECODE_0__(0xa3)](a[i - 0x1] - a[N - 0x1]) : Math[__DECODE_0__(0xa3)](Z - a[N - 0x1]));
    x[i] = Math[__DECODE_0__(0x95)](...y[__DECODE_0__(0x93)](i + 0x1), i !== 0x0 ? Math[__DECODE_0__(0xa3)](a[i - 0x1] - a[N - 0x1]) : Math['abs'](W - a[N - 0x1]));
  }
  console[__DECODE_0__(0xa5)](Math['max'](...x));
}
Main(require('fs')[__DECODE_0__(0x94)](__DECODE_0__(0x9d), __DECODE_0__(0x9b)));
function __DECODE_0__(zrNOCO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x93;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zrNOCO, key);
}
function __STRING_ARRAY__() {
  const _0x2b3667 = ['650304eBPQtQ', 'log', 'length', '8VNCIIL', '999180QsXKlp', 'slice', 'readFileSync', 'max', '370dcVFMI', 'split', 'map', '377648fDlGGJ', 'min', 'utf8', '6wLtzOM', '/dev/stdin', '830998eDUsoj', '227357GbhsbD', 'pop', '699iBrgRN', '406015GPVpfl', 'abs'];
  __STRING_ARRAY__ = function () {
    return _0x2b3667;
  };
  return __STRING_ARRAY__();
}
