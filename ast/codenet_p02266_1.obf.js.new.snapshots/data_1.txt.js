function __DECODE_0__(EMNYKb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x194;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EMNYKb, key);
}
const a0_0x1eb4f9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x4b1f65 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x4b1f65(0x1a5)) / 0x1 * (parseInt(_0x4b1f65(0x19b)) / 0x2) + -parseInt(_0x4b1f65(0x195)) / 0x3 + parseInt(_0x4b1f65(0x19e)) / 0x4 + -parseInt(_0x4b1f65(0x199)) / 0x5 + -parseInt(_0x4b1f65(0x1a7)) / 0x6 * (-parseInt(_0x4b1f65(0x19a)) / 0x7) + parseInt(_0x4b1f65(0x198)) / 0x8 + -parseInt(_0x4b1f65(0x1a3)) / 0x9;
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
  const _0x2e638b = __DECODE_0__;
  const areas = [];
  const depthIndexes = [];
  let sum = 0x0;
  for (let i = 0x0; i < str['length']; i++) {
    const char = str[i];
    if (char === '\x5c') {
      depthIndexes[_0x2e638b(0x19f)](i);
      continue;
    }
    if (char === '/' && depthIndexes[_0x2e638b(0x1a4)] > 0x0) {
      const j = depthIndexes[_0x2e638b(0x1a1)]();
      sum += i - j;
      let currentArea = i - j;
      while (areas['length'] > 0x0 && areas[areas['length'] - 0x1][_0x2e638b(0x196)] > j) {
        currentArea += areas[areas[_0x2e638b(0x1a4)] - 0x1]['area'];
        areas[_0x2e638b(0x1a1)]();
      }
      areas[_0x2e638b(0x19f)]({
        'depth': j,
        'area': currentArea
      });
    }
  }
  console[_0x2e638b(0x19d)](sum);
  if (areas[_0x2e638b(0x1a4)] === 0x0) {
    console[_0x2e638b(0x19d)](0x0);
    return;
  }
  console[_0x2e638b(0x19d)](areas['length'] + '\x20' + areas[_0x2e638b(0x197)](obj => obj[_0x2e638b(0x1a6)])[_0x2e638b(0x19c)]('\x20'));
};
let inputStr = '';
process[a0_0x1eb4f9(0x1a0)]['on'](a0_0x1eb4f9(0x1a2), input => {
  const _0x4f2634 = a0_0x1eb4f9;
  inputStr += String[_0x4f2634(0x194)]`${input}`;
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
