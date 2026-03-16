(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b0)) / 0x1 * (-parseInt(__DECODE_0__(0x1ad)) / 0x2) + -parseInt(__DECODE_0__(0x1af)) / 0x3 * (parseInt(__DECODE_0__(0x1b3)) / 0x4) + -parseInt(__DECODE_0__(0x1bd)) / 0x5 + -parseInt(__DECODE_0__(0x1b1)) / 0x6 * (-parseInt(__DECODE_0__(0x1b6)) / 0x7) + parseInt(__DECODE_0__(0x1bc)) / 0x8 + -parseInt(__DECODE_0__(0x1bb)) / 0x9 + -parseInt(__DECODE_0__(0x1b9)) / 0xa * (-parseInt(__DECODE_0__(0x1b5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x35686);
function __STRING_ARRAY__() {
  const _0x3b7449 = ['901AtTwik', '13194sBmUpv', 'stdin', '20564uUAwWw', 'split', '1056tCsvuv', '1043eHieLG', 'map', 'max', '26900tnVaMJ', 'log', '3644343SettBD', '823192wOOotf', '1170875QCOFEZ', '866LSLToM', 'end', '129XpxNeh'];
  __STRING_ARRAY__ = function () {
    return _0x3b7449;
  };
  return __STRING_ARRAY__();
}
const processData = lines => {
  const [n, m] = lines[0x0][__DECODE_0__(0x1b4)]('\x20')[__DECODE_0__(0x1b7)](x => +x);
  let friendships = {};
  for (let i = 0x0; i < m; i++) {
    const f = lines[i + 0x1][__DECODE_0__(0x1b4)]('\x20')[__DECODE_0__(0x1b7)](x => +x);
    let friendItem = friendships[f[0x0]] || friendships[f[0x1]] || {};
    friendships[f[0x0]] = friendItem;
    friendships[f[0x1]] = friendItem;
    friendItem[f[0x0]] = !![];
    friendItem[f[0x1]] = !![];
  }
  let maxCount = 0x1;
  for (let p in friendships) {
    let count = 0x0;
    for (let t2 in friendships[p]) {
      count++;
    }
    maxCount = Math[__DECODE_0__(0x1b8)](maxCount, count);
  }
  console[__DECODE_0__(0x1ba)](maxCount);
};
let i = '';
function __DECODE_0__(dIzKOt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ad;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dIzKOt, key);
}
process[__DECODE_0__(0x1b2)]['on']('data', c => i += c);
process[__DECODE_0__(0x1b2)]['on'](__DECODE_0__(0x1ae), () => {
  const {
    EOL: EOL
  } = require('os');
  const lines = i['split'](EOL);
  processData(lines);
});
