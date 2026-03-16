(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x13d)) / 0x1 * (parseInt(__DECODE_0__(0x133)) / 0x2) + parseInt(__DECODE_0__(0x13b)) / 0x3 + -parseInt(__DECODE_0__(0x130)) / 0x4 * (parseInt(__DECODE_0__(0x135)) / 0x5) + parseInt(__DECODE_0__(0x13e)) / 0x6 + -parseInt(__DECODE_0__(0x12e)) / 0x7 * (parseInt(__DECODE_0__(0x132)) / 0x8) + parseInt(__DECODE_0__(0x140)) / 0x9 * (parseInt(__DECODE_0__(0x13f)) / 0xa) + parseInt(__DECODE_0__(0x12f)) / 0xb * (-parseInt(__DECODE_0__(0x138)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe02a3);
const config = {
  'input': __DECODE_0__(0x141),
  'newline': '\x0a'
};
const line = require('fs')[__DECODE_0__(0x131)](config[__DECODE_0__(0x139)], 'utf-8')[__DECODE_0__(0x144)](config['newline']);
function __DECODE_0__(TVWBNT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TVWBNT, key);
}
let cnt = 0x0;
const isort = (arr, g) => {
  for (let i = g; i < arr['length']; i++) {
    let v = arr[i];
    let j = i - g;
    while (j >= 0x0 && arr[j] > v) {
      arr[j + g] = arr[j];
      j = j - g;
      cnt++;
    }
    arr[j + g] = v;
  }
  return arr;
};
const shellSort = arr => {
  const g = arr[__DECODE_0__(0x136)]((_, i) => 0x3 * i + 0x1)['filter'](x => x <= arr[__DECODE_0__(0x13c)])[__DECODE_0__(0x137)]();
  console['log'](g[__DECODE_0__(0x13c)]);
  console[__DECODE_0__(0x142)](g[__DECODE_0__(0x136)](x => x[__DECODE_0__(0x13a)]())[__DECODE_0__(0x134)]('\x20'));
  for (i = 0x0; i < arr[__DECODE_0__(0x13c)]; i++) {
    arr = isort(arr, g[i]);
  }
  return arr;
};
const n = parseInt(line[0x0]);
const data = line[__DECODE_0__(0x143)](0x1, n + 0x1)[__DECODE_0__(0x136)](x => parseInt(x));
const sorted = shellSort(data);
function __STRING_ARRAY__() {
  const _0x6f2501 = ['1048927wBMrwX', '28988dLpiKX', 'readFileSync', '16OBjOLC', '842234LdUGiR', 'join', '305Eivrjp', 'map', 'reverse', '132sILrXK', 'input', 'toString', '972330bbWwNW', 'length', '3xFbqvx', '940980TlLQee', '23770MZWBWB', '3240aKLbgr', '/dev/stdin', 'log', 'slice', 'split', '667933LSLbQo'];
  __STRING_ARRAY__ = function () {
    return _0x6f2501;
  };
  return __STRING_ARRAY__();
}
console['log'](cnt);
console[__DECODE_0__(0x142)](sorted['map'](x => x[__DECODE_0__(0x13a)]())[__DECODE_0__(0x134)]('\x0a'));
