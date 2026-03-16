'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x148)) / 0x1 * (parseInt(__DECODE_0__(0x149)) / 0x2) + -parseInt(__DECODE_0__(0x140)) / 0x3 + -parseInt(__DECODE_0__(0x13d)) / 0x4 + -parseInt(__DECODE_0__(0x139)) / 0x5 + -parseInt(__DECODE_0__(0x144)) / 0x6 * (parseInt(__DECODE_0__(0x13b)) / 0x7) + -parseInt(__DECODE_0__(0x13e)) / 0x8 * (-parseInt(__DECODE_0__(0x145)) / 0x9) + -parseInt(__DECODE_0__(0x146)) / 0xa * (-parseInt(__DECODE_0__(0x143)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x906d3);
function __DECODE_0__(ujlYtz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x136;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ujlYtz, key);
}
function __STRING_ARRAY__() {
  const _0x45c9f9 = ['/dev/stdin', 'substring', '110Otdodc', '78BGvJsU', '4020885ojVWYm', '1906360DPkSCg', 'utf8', '9JkBlrS', '231926UguTLT', 'map', 'log', 'repeat', '4978685ADEhTB', 'filter', '153783riLcLv', 'split', '2178836nodYDq', '8zJDBEL', 'length', '2937534WAaGkI'];
  __STRING_ARRAY__ = function () {
    return _0x45c9f9;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const inputs = input[__DECODE_0__(0x13c)]('\x0a')[__DECODE_0__(0x13a)](x => x !== '');
  const n = inputs[0x0];
  const a = inputs[0x1]['split']('\x20')[__DECODE_0__(0x136)](x => Number(x));
  let result = 0x1;
  while (testN(result, a) === ![]) {
    result = result + 0x1;
  }
  console[__DECODE_0__(0x137)](result);
  function testN(n, a) {
    let current = '0'['repeat'](a[0x0]);
    for (let i = 0x1; i < a[__DECODE_0__(0x13f)]; i++) {
      if (a[i - 0x1] < a[i]) {
        current = current + '0'[__DECODE_0__(0x138)](a[i] - a[i - 0x1]);
      } else {
        current = parseInt(current[__DECODE_0__(0x142)](0x0, a[i]), n) + 0x1;
        if (isNaN(current)) {
          return ![];
        }
        current = '' + current;
        if (current['length'] > a[i]) {
          return ![];
        } else {
          current = '0'[__DECODE_0__(0x138)](a[i] - current[__DECODE_0__(0x13f)]) + current;
        }
      }
    }
    return !![];
  }
}
main(require('fs')['readFileSync'](__DECODE_0__(0x141), __DECODE_0__(0x147)));
