(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x198)) / 0x1 + -parseInt(__DECODE_0__(0x19e)) / 0x2 * (-parseInt(__DECODE_0__(0x19f)) / 0x3) + -parseInt(__DECODE_0__(0x197)) / 0x4 * (-parseInt(__DECODE_0__(0x195)) / 0x5) + -parseInt(__DECODE_0__(0x199)) / 0x6 * (-parseInt(__DECODE_0__(0x19b)) / 0x7) + -parseInt(__DECODE_0__(0x19a)) / 0x8 * (-parseInt(__DECODE_0__(0x18e)) / 0x9) + parseInt(__DECODE_0__(0x193)) / 0xa + parseInt(__DECODE_0__(0x191)) / 0xb * (-parseInt(__DECODE_0__(0x192)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x45864);
function __DECODE_0__(Qhgtsa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Qhgtsa, key);
}
function __STRING_ARRAY__() {
  const _0x29d0d1 = ['18261iZUHWj', 'split', 'length', '69553mgCFJW', '1524efNFfo', '3004430mOnuND', 'utf8', '2491030JppiBY', 'log', '4jQCMrz', '538079bRdUUm', '6IvMcTR', '1080ozNFQF', '2697583ghxCzk', 'readFileSync', '/dev/stdin', '11582CIShWu', '87OQnxPp'];
  __STRING_ARRAY__ = function () {
    return _0x29d0d1;
  };
  return __STRING_ARRAY__();
}
let input = require('fs')[__DECODE_0__(0x19c)](__DECODE_0__(0x19d), __DECODE_0__(0x194));
let Arr = input['trim']()[__DECODE_0__(0x18f)]('\x0a');
for (var i = 0x0; i < Arr[__DECODE_0__(0x190)]; ++i) {
  let n = Arr[i];
  var ans = n % 0x27;
  if (ans == 0x0) {
    ans = 0x27;
  }
  if (ans < 0xa) {
    ans = '0' + ans;
  }
  console[__DECODE_0__(0x196)]('3C' + ans);
}
