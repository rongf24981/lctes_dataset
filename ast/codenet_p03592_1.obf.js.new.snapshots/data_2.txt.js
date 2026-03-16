(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1f3)) / 0x1 + -parseInt(__DECODE_0__(0x1f6)) / 0x2 + parseInt(__DECODE_0__(0x1f8)) / 0x3 * (-parseInt(__DECODE_0__(0x1fd)) / 0x4) + parseInt(__DECODE_0__(0x1f5)) / 0x5 * (parseInt(__DECODE_0__(0x1f1)) / 0x6) + parseInt(__DECODE_0__(0x1f4)) / 0x7 * (-parseInt(__DECODE_0__(0x1fc)) / 0x8) + -parseInt(__DECODE_0__(0x1f2)) / 0x9 + parseInt(__DECODE_0__(0x1fa)) / 0xa * (parseInt(__DECODE_0__(0x1ff)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc0e28);
function Main(input) {
  const Param = input[__DECODE_0__(0x1fb)]('\x20');
  const N = i(Param[0x0]);
  const M = i(Param[0x1]);
  const K = i(Param[0x2]);
  for (var n = 0x0; n < N; n++) {
    for (var m = 0x0; m < M; m++) {
      var b = calcBlack(n, m, N, M);
      if (b == K) {
        return console[__DECODE_0__(0x1fe)]('Yes');
      }
    }
  }
  console[__DECODE_0__(0x1fe)]('No');
}
function __DECODE_0__(vujwjc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vujwjc, key);
}
function calcBlack(n, m, N, M) {
  return N * n - m * n + (M * m - n * m);
}
function __STRING_ARRAY__() {
  const _0x5e174b = ['56340hpcAbm', '2470238KvaZDp', 'readFileSync', '3MofqhJ', 'utf8', '70VRvNIT', 'split', '216DXsZQE', '1390852EXGZzN', 'log', '3754289zAkHKC', '690UIntDx', '8846739yiqYjr', '910273WCrdlW', '321307GfFigT'];
  __STRING_ARRAY__ = function () {
    return _0x5e174b;
  };
  return __STRING_ARRAY__();
}
function i(x) {
  return parseInt(x, 0xa);
}
Main(require('fs')[__DECODE_0__(0x1f7)]('/dev/stdin', __DECODE_0__(0x1f9)));
