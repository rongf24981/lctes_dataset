function __DECODE_0__(BZjBQI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x190;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BZjBQI, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x192)) / 0x1 * (parseInt(__DECODE_0__(0x197)) / 0x2) + -parseInt(__DECODE_0__(0x196)) / 0x3 * (parseInt(__DECODE_0__(0x19c)) / 0x4) + parseInt(__DECODE_0__(0x199)) / 0x5 + parseInt(__DECODE_0__(0x19a)) / 0x6 * (-parseInt(__DECODE_0__(0x195)) / 0x7) + parseInt(__DECODE_0__(0x1a1)) / 0x8 * (parseInt(__DECODE_0__(0x190)) / 0x9) + parseInt(__DECODE_0__(0x1a0)) / 0xa * (-parseInt(__DECODE_0__(0x19b)) / 0xb) + parseInt(__DECODE_0__(0x198)) / 0xc * (parseInt(__DECODE_0__(0x19e)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42463);
const input = require('fs')[__DECODE_0__(0x19d)](__DECODE_0__(0x1a2), __DECODE_0__(0x193));
let cin = input[__DECODE_0__(0x194)](/ |\n/);
let cid = 0x0;
const next = () => cin[cid++];
const nexts = n => cin[__DECODE_0__(0x19f)](cid, cid += n)[__DECODE_0__(0x191)](i => parseInt(i));
const [H1, M1, H2, M2, K] = nexts(0x5);
const time = H2 * 0x3c + M2 - (H1 * 0x3c + M1) - K;
function __STRING_ARRAY__() {
  const _0x3b8c47 = ['1209803nzCPvN', '10359QVMBTa', '94YyzDFr', '92316tyAnCs', '1430475qXBDYY', '12oYgZLr', '1241383WOlARb', '172pENMEx', 'readFileSync', '1443mPdahe', 'slice', '20LFihod', '1032dxMQUj', '/dev/stdin', 'log', '24822krNLTH', 'map', '10734qyiBFZ', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x3b8c47;
  };
  return __STRING_ARRAY__();
}
time > 0x0 ? console[__DECODE_0__(0x1a3)](time) : console[__DECODE_0__(0x1a3)](0x0);
