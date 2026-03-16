function __STRING_ARRAY__() {
  const _0xd0911c = ['7274370OEuHRv', 'log', '234222FYNJCv', '1096CcTnaE', '22232080sJZBiF', 'map', 'stdin', 'data', 'end', '2427250yitiwi', '42OXoVlt', 'split', '68odZevx', '78636lpGMKg', '117774veVlrj', '1492914MmNLRo'];
  __STRING_ARRAY__ = function () {
    return _0xd0911c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x128)) / 0x1 + parseInt(__DECODE_0__(0x122)) / 0x2 + -parseInt(__DECODE_0__(0x126)) / 0x3 * (-parseInt(__DECODE_0__(0x125)) / 0x4) + parseInt(__DECODE_0__(0x129)) / 0x5 + -parseInt(__DECODE_0__(0x12b)) / 0x6 * (parseInt(__DECODE_0__(0x123)) / 0x7) + parseInt(__DECODE_0__(0x11c)) / 0x8 * (parseInt(__DECODE_0__(0x127)) / 0x9) + -parseInt(__DECODE_0__(0x11d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe987d);
const processData = lines => {
  let [n, m] = lines[0x0][__DECODE_0__(0x124)]('\x20')[__DECODE_0__(0x11e)](x => +x);
  if (n % 0x2 === 0x1) {
    let end = n - 0x1;
    let start = 0x1;
    while (m) {
      console[__DECODE_0__(0x12a)](start++ + '\x20' + end--);
      m--;
    }
  } else {
    let end = n / 0x2 + 0x1;
    let start = n / 0x2;
    while (m) {
      console[__DECODE_0__(0x12a)](start-- + '\x20' + end++);
      m--;
    }
  }
};
let i = '';
function __DECODE_0__(cMpfAi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cMpfAi, key);
}
process[__DECODE_0__(0x11f)]['on'](__DECODE_0__(0x120), c => i += c);
process[__DECODE_0__(0x11f)]['on'](__DECODE_0__(0x121), () => {
  const {
    EOL: EOL
  } = require('os');
  const lines = i[__DECODE_0__(0x124)](EOL);
  processData(lines);
});
