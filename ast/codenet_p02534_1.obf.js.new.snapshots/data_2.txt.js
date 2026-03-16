(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe6)) / 0x1 * (-parseInt(__DECODE_0__(0xe5)) / 0x2) + parseInt(__DECODE_0__(0xdf)) / 0x3 + -parseInt(__DECODE_0__(0xd8)) / 0x4 + -parseInt(__DECODE_0__(0xd9)) / 0x5 + -parseInt(__DECODE_0__(0xdd)) / 0x6 * (parseInt(__DECODE_0__(0xe0)) / 0x7) + -parseInt(__DECODE_0__(0xdc)) / 0x8 * (-parseInt(__DECODE_0__(0xe2)) / 0x9) + parseInt(__DECODE_0__(0xe3)) / 0xa * (parseInt(__DECODE_0__(0xe1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x99614);
function __STRING_ARRAY__() {
  const _0x2f484b = ['7cChLAZ', '400796fqNfdS', '9HgNoaZ', '130LHJMFg', 'utf8', '72fJZDxT', '24197FLrkCp', '1370048COQRZF', '726450vWWJrZ', 'readFileSync', 'trim', '5558680XCQSCS', '5682210dxmAzE', '/dev/stdin', '70458wYmdIw'];
  __STRING_ARRAY__ = function () {
    return _0x2f484b;
  };
  return __STRING_ARRAY__();
}
const input = require('fs')[__DECODE_0__(0xda)](__DECODE_0__(0xde), __DECODE_0__(0xe4));
const lines = input['split']('\x0a');
let K = lines[0x0][__DECODE_0__(0xdb)]() - 0x0;
let ans = '';
for (let i = 0x0; i < K; i++) {
  ans += 'ACL';
}
function __DECODE_0__(QiMVDa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QiMVDa, key);
}
console['log'](ans);
