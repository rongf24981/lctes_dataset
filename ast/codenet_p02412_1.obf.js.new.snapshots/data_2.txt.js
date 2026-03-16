(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a2)) / 0x1 + -parseInt(__DECODE_0__(0x1a7)) / 0x2 + parseInt(__DECODE_0__(0x1a3)) / 0x3 * (-parseInt(__DECODE_0__(0x1a0)) / 0x4) + parseInt(__DECODE_0__(0x1a9)) / 0x5 + parseInt(__DECODE_0__(0x19f)) / 0x6 * (parseInt(__DECODE_0__(0x19e)) / 0x7) + -parseInt(__DECODE_0__(0x1a6)) / 0x8 + -parseInt(__DECODE_0__(0x1aa)) / 0x9 * (-parseInt(__DECODE_0__(0x1a5)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x59637);
function __DECODE_0__(yaEYlB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yaEYlB, key);
}
const input = require('fs')[__DECODE_0__(0x1a8)](__DECODE_0__(0x1a4), 'utf8')['split'](/\n/);
for (let i = 0x0; i < input['length']; i++) {
  let [n, x] = input[i][__DECODE_0__(0x19d)]('\x20')[__DECODE_0__(0x1a1)](Number);
  if (n === 0x0 && x === 0x0) {
    break;
  }
  let count = 0x0;
  for (let j = 0x1; j <= n; j++) {
    for (let k = 0x1; k <= n; k++) {
      if (j === k) {
        break;
      }
      for (let l = 0x1; l <= n; l++) {
        if (j === l || k === l || j === k) {
          break;
        }
        if (j + k + l === x) {
          count++;
        }
      }
    }
  }
  console['log'](count);
}
function __STRING_ARRAY__() {
  const _0x38265b = ['464595NunHrI', '153wFBcru', 'split', '22897nWlMyu', '414rwCltk', '122160AvKDyx', 'map', '484310SaBkXe', '48PduKHr', '/dev/stdin', '499390oPManv', '1606336ZlAiRt', '1192648pHhPKk', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x38265b;
  };
  return __STRING_ARRAY__();
}
