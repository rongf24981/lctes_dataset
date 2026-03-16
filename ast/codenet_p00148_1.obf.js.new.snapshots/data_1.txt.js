const a0_0x296cee = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x37f76f = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x37f76f(0x198)) / 0x1 + -parseInt(_0x37f76f(0x19e)) / 0x2 * (-parseInt(_0x37f76f(0x19f)) / 0x3) + -parseInt(_0x37f76f(0x197)) / 0x4 * (-parseInt(_0x37f76f(0x195)) / 0x5) + -parseInt(_0x37f76f(0x199)) / 0x6 * (-parseInt(_0x37f76f(0x19b)) / 0x7) + -parseInt(_0x37f76f(0x19a)) / 0x8 * (-parseInt(_0x37f76f(0x18e)) / 0x9) + parseInt(_0x37f76f(0x193)) / 0xa + parseInt(_0x37f76f(0x191)) / 0xb * (-parseInt(_0x37f76f(0x192)) / 0xc);
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
let input = require('fs')[a0_0x296cee(0x19c)](a0_0x296cee(0x19d), a0_0x296cee(0x194));
let Arr = input['trim']()[a0_0x296cee(0x18f)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x296cee(0x190)]; ++i) {
  let n = Arr[i];
  var ans = n % 0x27;
  if (ans == 0x0) {
    ans = 0x27;
  }
  if (ans < 0xa) {
    ans = '0' + ans;
  }
  console[a0_0x296cee(0x196)]('3C' + ans);
}
