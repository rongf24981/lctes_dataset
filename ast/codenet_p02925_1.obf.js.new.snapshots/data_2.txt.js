'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1b3)) / 0x1 * (parseInt(__DECODE_0__(0x1ab)) / 0x2) + parseInt(__DECODE_0__(0x1b2)) / 0x3 * (-parseInt(__DECODE_0__(0x1b1)) / 0x4) + -parseInt(__DECODE_0__(0x1aa)) / 0x5 + -parseInt(__DECODE_0__(0x1b6)) / 0x6 + -parseInt(__DECODE_0__(0x1ae)) / 0x7 + parseInt(__DECODE_0__(0x1ad)) / 0x8 + -parseInt(__DECODE_0__(0x1a7)) / 0x9 * (-parseInt(__DECODE_0__(0x1af)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcd33f);
function main(stdin) {
  const input = stdin['split']('\x0a');
  const N = Number(input['shift']());
  const params = input[__DECODE_0__(0x1b4)](p => p[__DECODE_0__(0x1ac)]('\x20')['map'](v => parseInt(v, 0xa)));
  console[__DECODE_0__(0x1b8)](solve(params));
}
function __DECODE_0__(MGTTtq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MGTTtq, key);
}
function solve(params) {
  const l = params[__DECODE_0__(0x1b0)];
  function matching() {
    let matched = ![];
    for (let i = 0x0; i < l; ++i) {
      const op = params[i][cur[i]] - 0x1;
      if (isNaN(op)) {
        continue;
      }
      if (params[op][cur[op]] - 0x1 === i) {
        matched = !![];
        ++cur[i];
        ++cur[op];
      }
    }
    return matched;
  }
  function isNotCompleted() {
    return cur[__DECODE_0__(0x1a8)](v => v < l - 0x1);
  }
  const cur = [];
  for (let i = 0x0; i < l; ++i) {
    cur[i] = 0x0;
  }
  let day = 0x1;
  while (isNotCompleted()) {
    const res = matching();
    if (res === ![]) {
      return -0x1;
    }
    ++day;
  }
  return day;
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1a9), __DECODE_0__(0x1b7))[__DECODE_0__(0x1b5)]());
function __STRING_ARRAY__() {
  const _0x54330b = ['some', '/dev/stdin', '5301790VIbxEv', '446KGBZkc', 'split', '13149912CCThUi', '6804462xaFELL', '50GzHbbJ', 'length', '184612JzVfmH', '18hntMCj', '302KItoSF', 'map', 'trim', '9017202mVGCIJ', 'utf8', 'log', '5294943OSAhEc'];
  __STRING_ARRAY__ = function () {
    return _0x54330b;
  };
  return __STRING_ARRAY__();
}
