'use strict';

const a0_0x2b96af = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x5c27b2 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x5c27b2(0x81)) / 0x1 * (parseInt(_0x5c27b2(0x74)) / 0x2) + -parseInt(_0x5c27b2(0x83)) / 0x3 * (parseInt(_0x5c27b2(0x7b)) / 0x4) + parseInt(_0x5c27b2(0x86)) / 0x5 + parseInt(_0x5c27b2(0x75)) / 0x6 * (parseInt(_0x5c27b2(0x85)) / 0x7) + -parseInt(_0x5c27b2(0x76)) / 0x8 * (parseInt(_0x5c27b2(0x82)) / 0x9) + parseInt(_0x5c27b2(0x73)) / 0xa + parseInt(_0x5c27b2(0x77)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x40e4b);
function __STRING_ARRAY__() {
  const _0x53a869 = ['utf8', '4BHCcTd', 'readFileSync', 'map', 'log', 'filter', '/dev/stdin', '1cIuHIW', '9TPTleH', '31821nYhWVC', 'trim', '1392615anWmkc', '494375NYkJad', '807380zwnBvR', '407788FmCNdS', '12CwSyJv', '1248112cXrjFp', '646965TxNCyA', 'split', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x53a869;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(JtbEEO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x73;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JtbEEO, key);
}
function Main(input) {
  const _0x47426c = __DECODE_0__;
  const tmp = input[_0x47426c(0x84)]()['split']('\x0a');
  const [H, W, M] = tmp['shift']()[_0x47426c(0x78)]('\x20')[_0x47426c(0x7d)](v => Number(v));
  const hw = tmp[_0x47426c(0x7d)](v => v['split']('\x20')[_0x47426c(0x7d)](v => Number(v)));
  let result = 0x0;
  for (let i = 0x1; i <= H; i++) {
    const harr = hw[_0x47426c(0x7f)](v => v[0x0] !== i);
    const hlen = hw[_0x47426c(0x79)] - harr[_0x47426c(0x79)];
    for (let j = 0x1; j <= W; j++) {
      const warr = harr['filter'](v => v[0x1] === j);
      if (result < hlen + warr[_0x47426c(0x79)]) {
        result = hlen + warr[_0x47426c(0x79)];
      }
    }
  }
  console[_0x47426c(0x7e)](result);
  return;
}
Main(require('fs')[a0_0x2b96af(0x7c)](a0_0x2b96af(0x80), a0_0x2b96af(0x7a)));
