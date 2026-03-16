(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x89)) / 0x1 + -parseInt(__DECODE_0__(0x82)) / 0x2 * (-parseInt(__DECODE_0__(0x81)) / 0x3) + parseInt(__DECODE_0__(0x90)) / 0x4 + -parseInt(__DECODE_0__(0x8d)) / 0x5 + parseInt(__DECODE_0__(0x85)) / 0x6 * (parseInt(__DECODE_0__(0x92)) / 0x7) + parseInt(__DECODE_0__(0x8c)) / 0x8 + -parseInt(__DECODE_0__(0x87)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x83554);
process[__DECODE_0__(0x80)][__DECODE_0__(0x83)]();
process[__DECODE_0__(0x80)][__DECODE_0__(0x8a)](__DECODE_0__(0x8f));
function __STRING_ARRAY__() {
  const _0x578839 = ['28dWKZVK', 'log', 'stdin', '27EiTUxw', '45282DkDMpr', 'resume', 'line', '1314714RWCfBN', 'split', '6604704lqTITx', 'push', '547560jjBoLt', 'setEncoding', 'filter', '151168viUrxW', '2217810JGeXkE', 'close', 'utf8', '274628yxPxhw', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x578839;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BkEkZR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BkEkZR, key);
}
const lines = [];
const reader = require('readline')['createInterface']({
  'input': process['stdin'],
  'output': process['stdout']
});
reader['on'](__DECODE_0__(0x84), line => {
  lines[__DECODE_0__(0x88)](line);
});
reader['on'](__DECODE_0__(0x8e), () => {
  const inputLength = Number(lines[0x0]);
  const inputString = lines[0x1];
  const inputArray = inputString[__DECODE_0__(0x86)]('');
  const rArray = inputArray['filter'](element => element === 'R');
  const gArray = inputArray['filter'](element => element === 'G');
  const bArray = inputArray[__DECODE_0__(0x8b)](element => element === 'B');
  let sum = 0x0;
  for (let i = 0x1; i < Number(inputLength) + 0x1; i++) {
    for (let j = i + 0x1; j < Number(inputLength) + 0x1; j++) {
      const k = j + j - i;
      if (k <= inputLength && inputArray[i - 0x1] !== inputArray[j - 0x1] && inputArray[j - 0x1] !== inputArray[k - 0x1] && inputArray[i - 0x1] !== inputArray[k - 0x1]) {
        sum = sum + 0x1;
      }
    }
  }
  console[__DECODE_0__(0x7f)](rArray[__DECODE_0__(0x91)] * gArray[__DECODE_0__(0x91)] * bArray[__DECODE_0__(0x91)] - sum);
});
