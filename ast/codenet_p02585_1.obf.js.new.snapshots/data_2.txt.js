function __DECODE_0__(muQMHz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(muQMHz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xeb)) / 0x1 * (parseInt(__DECODE_0__(0xe9)) / 0x2) + -parseInt(__DECODE_0__(0xf0)) / 0x3 + parseInt(__DECODE_0__(0xe4)) / 0x4 + parseInt(__DECODE_0__(0xe6)) / 0x5 * (parseInt(__DECODE_0__(0xe3)) / 0x6) + -parseInt(__DECODE_0__(0xe8)) / 0x7 + parseInt(__DECODE_0__(0xde)) / 0x8 + -parseInt(__DECODE_0__(0xe2)) / 0x9 * (parseInt(__DECODE_0__(0xf1)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbebf4);
const main = input => {
  input = input[__DECODE_0__(0xed)]()[__DECODE_0__(0xec)]('\x0a');
  const [n, k] = input[0x0]['split']('\x20')[__DECODE_0__(0xea)](Number);
  const directions = input[0x1][__DECODE_0__(0xec)]('\x20')[__DECODE_0__(0xea)](v => Number(v) - 0x1);
  const scoreList = input[0x2][__DECODE_0__(0xec)]('\x20')['map'](Number);
  const ans = [new Array(n)[__DECODE_0__(0xe0)](0x0)];
  for (let i = 0x0; i < k; i++) {
    ans[__DECODE_0__(0xe1)]([]);
  }
  for (let i = 0x0; i < k; i++) {
    for (let x = 0x0; x < n; x++) {
      const score = ans[i][x];
      ans[i + 0x1][directions[x]] = score + scoreList[directions[x]];
    }
  }
  let max = -Infinity;
  for (let i = 0x1; i < ans['length']; i++) {
    max = Math[__DECODE_0__(0xdf)](max, Math[__DECODE_0__(0xdf)](...ans[i]));
  }
  return console[__DECODE_0__(0xe7)](max);
};
process['env'][__DECODE_0__(0xef)] ? test() : main(require('fs')['readFileSync'](__DECODE_0__(0xe5), __DECODE_0__(0xee)));
function __STRING_ARRAY__() {
  const _0x2822ab = ['5330312tNUpss', '/dev/stdin', '405bgnEQE', 'log', '4745174YZJkKQ', '94538GepQem', 'map', '26WzwMuj', 'split', 'trim', 'utf8', 'MYTEST', '1129164ENujWv', '160NOztmg', '221480MOFOaF', 'max', 'fill', 'push', '427275KFWpex', '438HnVGGD'];
  __STRING_ARRAY__ = function () {
    return _0x2822ab;
  };
  return __STRING_ARRAY__();
}
