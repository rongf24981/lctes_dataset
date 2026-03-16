'use strict';

function __STRING_ARRAY__() {
  const _0x2af84b = ['utf8', 'split', '2420472DNJnfv', '3249967OcjYkE', '8PQLkse', 'log', '872136eCLGWb', '18843QIoktE', '180xlANTS', '79YVdaUe', '925580RzpFNm', '21442qdEQeb', '24DEHBTU', '845009hLadpG'];
  __STRING_ARRAY__ = function () {
    return _0x2af84b;
  };
  return __STRING_ARRAY__();
}
const a0_0x187800 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x924b6f = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x924b6f(0x83)) / 0x1 * (-parseInt(_0x924b6f(0x85)) / 0x2) + parseInt(_0x924b6f(0x81)) / 0x3 + -parseInt(_0x924b6f(0x8a)) / 0x4 + -parseInt(_0x924b6f(0x84)) / 0x5 * (parseInt(_0x924b6f(0x86)) / 0x6) + parseInt(_0x924b6f(0x8b)) / 0x7 * (-parseInt(_0x924b6f(0x8c)) / 0x8) + parseInt(_0x924b6f(0x8e)) / 0x9 + parseInt(_0x924b6f(0x82)) / 0xa * (parseInt(_0x924b6f(0x87)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7fb0f);
function Main(inputs) {
  const _0x1eca18 = __DECODE_0__;
  const input = inputs[_0x1eca18(0x89)]('\x0a');
  const a = Number(input[0x0][_0x1eca18(0x89)]('\x20')[0x0]);
  const b = Number(input[0x0]['split']('\x20')[0x1]);
  const k = Number(input[0x0][_0x1eca18(0x89)]('\x20')[0x2]);
  console[_0x1eca18(0x8d)](a > k ? a - k : 0x0, a + b > k ? a + b - k : 0x0);
}
function __DECODE_0__(ufIjfZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x81;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ufIjfZ, key);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x187800(0x88)));
