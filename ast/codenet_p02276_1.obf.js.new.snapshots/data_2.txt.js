(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x118)) / 0x1 * (parseInt(__DECODE_0__(0x116)) / 0x2) + -parseInt(__DECODE_0__(0x125)) / 0x3 * (parseInt(__DECODE_0__(0x11c)) / 0x4) + parseInt(__DECODE_0__(0x11b)) / 0x5 + parseInt(__DECODE_0__(0x11f)) / 0x6 + parseInt(__DECODE_0__(0x115)) / 0x7 + parseInt(__DECODE_0__(0x123)) / 0x8 + -parseInt(__DECODE_0__(0x124)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x848d0);
const config = {
  'input': __DECODE_0__(0x11a),
  'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config[__DECODE_0__(0x126)], __DECODE_0__(0x11d))[__DECODE_0__(0x122)](config[__DECODE_0__(0x119)]);
function __STRING_ARRAY__() {
  const _0x2c20c0 = ['map', 'log', 'split', '7992uCVOxq', '14670054ozskoJ', '2151fqPQzw', 'input', '1088129CqAARF', '50afcazL', 'length', '36557tnwILD', 'newline', '/dev/stdin', '3720770LziAnL', '440jqjLZG', 'utf-8', 'toString', '2623674CRCgSn'];
  __STRING_ARRAY__ = function () {
    return _0x2c20c0;
  };
  return __STRING_ARRAY__();
}
const list = line[0x1][__DECODE_0__(0x122)]('\x20')[__DECODE_0__(0x120)](x => parseInt(x));
const partition = arr => {
  const x = arr[arr['length'] - 0x1];
  const result = [...arr];
  let i = -0x1;
  for (let j = 0x0; j < arr[__DECODE_0__(0x117)] - 0x1; j++) {
    if (result[j] <= x) {
      i++;
      const tmp = result[i];
      result[i] = result[j];
      result[j] = tmp;
    }
  }
  const tmp = result[i + 0x1];
  result[i + 0x1] = result[arr['length'] - 0x1];
  result[arr[__DECODE_0__(0x117)] - 0x1] = tmp;
  return [i + 0x1, result];
};
function __DECODE_0__(xfTDRm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x115;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xfTDRm, key);
}
const res = partition(list);
console[__DECODE_0__(0x121)](res[0x1][__DECODE_0__(0x120)]((x, i) => i === res[0x0] ? '[' + x + ']' : x[__DECODE_0__(0x11e)]())['join']('\x20'));
