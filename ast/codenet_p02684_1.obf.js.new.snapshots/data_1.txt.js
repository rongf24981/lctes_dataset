function __STRING_ARRAY__() {
  const _0x5bba4d = ['utf8', '/dev/stdin', '4410kGYbmb', '54yooGLb', '392364vjqpvk', 'split', 'size', '1234268nOsmQi', 'set', '8FsqpUt', '187690dyDesC', '1083048Syuebm', '422992rXuEcK', '162BHZiKr', 'log', '3263491HRRddf'];
  __STRING_ARRAY__ = function () {
    return _0x5bba4d;
  };
  return __STRING_ARRAY__();
}
const a0_0x5e9e0d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1790e7 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x1790e7(0x77)) / 0x1 + -parseInt(_0x1790e7(0x7f)) / 0x2 + parseInt(_0x1790e7(0x76)) / 0x3 + -parseInt(_0x1790e7(0x82)) / 0x4 + parseInt(_0x1790e7(0x75)) / 0x5 * (parseInt(_0x1790e7(0x7e)) / 0x6) + parseInt(_0x1790e7(0x7a)) / 0x7 * (parseInt(_0x1790e7(0x74)) / 0x8) + parseInt(_0x1790e7(0x78)) / 0x9 * (parseInt(_0x1790e7(0x7d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3be14);
function main(input) {
  const _0x4725c4 = __DECODE_0__;
  const lines = input['trim']()['split']('\x0a');
  let [n, k] = lines[0x0][_0x4725c4(0x80)]('\x20');
  n = +n;
  k = BigInt(k);
  const towns = lines[0x1][_0x4725c4(0x80)]('\x20')['map'](Number);
  const visited = new Map();
  let pos = 0x1;
  while (k > 0x0) {
    const i = visited['get'](pos);
    if (!i) {
      visited[_0x4725c4(0x83)](pos, BigInt(visited[_0x4725c4(0x81)]));
      pos = towns[pos - 0x1];
      k--;
    } else {
      const cycle = BigInt(visited[_0x4725c4(0x81)]) - i;
      const rest = k % cycle;
      for (let [key, value] of visited) {
        if (value == i + rest) {
          pos = key;
          break;
        }
      }
      k = 0x0;
    }
  }
  console[_0x4725c4(0x79)](pos);
}
function __DECODE_0__(KdgRXe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x74;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KdgRXe, key);
}
main(require('fs')['readFileSync'](a0_0x5e9e0d(0x7c), a0_0x5e9e0d(0x7b)));
