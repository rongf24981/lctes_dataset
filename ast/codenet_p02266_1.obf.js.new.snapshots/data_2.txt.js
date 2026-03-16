function __DECODE_0__(EMNYKb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x194;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EMNYKb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a5)) / 0x1 * (parseInt(__DECODE_0__(0x19b)) / 0x2) + -parseInt(__DECODE_0__(0x195)) / 0x3 + parseInt(__DECODE_0__(0x19e)) / 0x4 + -parseInt(__DECODE_0__(0x199)) / 0x5 + -parseInt(__DECODE_0__(0x1a7)) / 0x6 * (-parseInt(__DECODE_0__(0x19a)) / 0x7) + parseInt(__DECODE_0__(0x198)) / 0x8 + -parseInt(__DECODE_0__(0x1a3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9dfd6);
const calc = str => {
  const areas = [];
  const depthIndexes = [];
  let sum = 0x0;
  for (let i = 0x0; i < str['length']; i++) {
    const char = str[i];
    if (char === '\x5c') {
      depthIndexes[__DECODE_0__(0x19f)](i);
      continue;
    }
    if (char === '/' && depthIndexes[__DECODE_0__(0x1a4)] > 0x0) {
      const j = depthIndexes[__DECODE_0__(0x1a1)]();
      sum += i - j;
      let currentArea = i - j;
      while (areas['length'] > 0x0 && areas[areas['length'] - 0x1][__DECODE_0__(0x196)] > j) {
        currentArea += areas[areas[__DECODE_0__(0x1a4)] - 0x1]['area'];
        areas[__DECODE_0__(0x1a1)]();
      }
      areas[__DECODE_0__(0x19f)]({
        'depth': j,
        'area': currentArea
      });
    }
  }
  console[__DECODE_0__(0x19d)](sum);
  if (areas[__DECODE_0__(0x1a4)] === 0x0) {
    console[__DECODE_0__(0x19d)](0x0);
    return;
  }
  console[__DECODE_0__(0x19d)](areas['length'] + '\x20' + areas[__DECODE_0__(0x197)](obj => obj[__DECODE_0__(0x1a6)])[__DECODE_0__(0x19c)]('\x20'));
};
let inputStr = '';
process[__DECODE_0__(0x1a0)]['on'](__DECODE_0__(0x1a2), input => {
  inputStr += String[__DECODE_0__(0x194)]`${input}`;
});
function __STRING_ARRAY__() {
  const _0x55d0c9 = ['1rfuZQj', 'area', '63882iiLeha', 'raw', '3624039GmgMzp', 'depth', 'map', '8387840MSebdr', '3022125GWntMd', '623ROzfjF', '234082GvdEAL', 'join', 'log', '2436896ghxpDl', 'push', 'stdin', 'pop', 'data', '2364876MzZbNJ', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x55d0c9;
  };
  return __STRING_ARRAY__();
}
process['stdin']['on']('end', () => {
  calc(inputStr);
});
