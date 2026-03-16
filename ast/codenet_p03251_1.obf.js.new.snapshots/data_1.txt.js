'use strict';

const a0_0x1dda6c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x5f26ae = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x5f26ae(0x132)) / 0x1 * (-parseInt(_0x5f26ae(0x136)) / 0x2) + parseInt(_0x5f26ae(0x135)) / 0x3 + parseInt(_0x5f26ae(0x133)) / 0x4 + parseInt(_0x5f26ae(0x13a)) / 0x5 + parseInt(_0x5f26ae(0x137)) / 0x6 + -parseInt(_0x5f26ae(0x139)) / 0x7 * (parseInt(_0x5f26ae(0x12f)) / 0x8) + parseInt(_0x5f26ae(0x138)) / 0x9 * (-parseInt(_0x5f26ae(0x12c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb1504);
function __DECODE_0__(gsKuja, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gsKuja, key);
}
const main = input => {
  const _0x1beaff = __DECODE_0__;
  const num = input[0x0][_0x1beaff(0x130)]('\x20')[_0x1beaff(0x12a)](val => parseInt(val));
  const N = num[0x0];
  const M = num[0x1];
  const X = num[0x2];
  const Y = num[0x3];
  const x = input[0x1][_0x1beaff(0x130)]('\x20')[_0x1beaff(0x12a)](val => parseInt(val));
  const y = input[0x2][_0x1beaff(0x130)]('\x20')[_0x1beaff(0x12a)](val => parseInt(val));
  const xMax = Math['max'](...x);
  const yMin = Math[_0x1beaff(0x12b)](...y);
  let ans = 0x0;
  for (let z = X + 0x1; z <= Y; z++) {
    if (xMax < z && yMin >= z) {
      ans = 0x1;
      break;
    }
  }
  console[_0x1beaff(0x131)](ans == 0x1 ? _0x1beaff(0x12e) : _0x1beaff(0x13b));
};
main(require('fs')[a0_0x1dda6c(0x134)](a0_0x1dda6c(0x12d), 'utf8')[a0_0x1dda6c(0x130)]('\x0a'));
function __STRING_ARRAY__() {
  const _0x1604bc = ['split', 'log', '1226cwEwWs', '1377196bXzJKv', 'readFileSync', '1340265AvBbbU', '208KLfttl', '4306392rZWELZ', '5721867TtShPU', '9369367HKojkW', '6596190QHPyij', 'War', 'map', 'min', '10Tobghl', '/dev/stdin', 'No\x20War', '8PfIiFu'];
  __STRING_ARRAY__ = function () {
    return _0x1604bc;
  };
  return __STRING_ARRAY__();
}
