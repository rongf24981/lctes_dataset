function __DECODE_0__(OnVRtv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OnVRtv, key);
}
function __STRING_ARRAY__() {
  const _0x371e47 = ['6NuHNsU', '12010784OVhZBB', '3303sCfxBU', '4512361JBhfXE', '27597573hxRPLH', 'log', 'push', 'apply', 'utf8', 'max', 'concat', '1854560tiduSo', '/dev/stdin', 'split', 'filter', 'slice', '1908PnzRZA', 'map', 'shift', '32060RwaVdC', 'length', '2118492ZWlSLA'];
  __STRING_ARRAY__ = function () {
    return _0x371e47;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xac)) / 0x1 + -parseInt(__DECODE_0__(0xae)) / 0x2 + -parseInt(__DECODE_0__(0xb1)) / 0x3 * (parseInt(__DECODE_0__(0xa9)) / 0x4) + parseInt(__DECODE_0__(0xba)) / 0x5 * (parseInt(__DECODE_0__(0xaf)) / 0x6) + parseInt(__DECODE_0__(0xb2)) / 0x7 + -parseInt(__DECODE_0__(0xb0)) / 0x8 + parseInt(__DECODE_0__(0xb3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeb605);
function main(input) {
  'use strict';

  const lines = input[__DECODE_0__(0xbc)]('\x0a');
  const firstLine = lines[0x0]['split']('\x20')['map'](value => +value);
  const L = firstLine[0x0];
  const N = firstLine[0x1];
  let xn = lines[__DECODE_0__(0xbe)](0x1)[__DECODE_0__(0xbd)](value => value)[__DECODE_0__(0xaa)](value => +value);
  let costs = [];
  const search = (x, xn, sum) => {
    if (xn[__DECODE_0__(0xad)] === 0x0) {
      costs[__DECODE_0__(0xb5)](sum);
      return;
    }
    const leftDistance = xn[0x0] >= x ? xn[0x0] - x : L - x + xn[0x0];
    const rightDistance = xn[xn[__DECODE_0__(0xad)] - 0x1] <= x ? x - xn[xn[__DECODE_0__(0xad)] - 0x1] : x + (L - xn[xn[__DECODE_0__(0xad)] - 0x1]);
    const left = xn[__DECODE_0__(0xb9)]();
    const leftX = left[__DECODE_0__(0xab)]();
    const right = xn['concat']();
    const rightX = right['pop']();
    search(leftX, left, sum + leftDistance);
    search(rightX, right, sum + rightDistance);
  };
  search(0x0, xn, 0x0);
  console[__DECODE_0__(0xb4)](Math[__DECODE_0__(0xb8)][__DECODE_0__(0xb6)](null, costs));
}
main(require('fs')['readFileSync'](__DECODE_0__(0xbb), __DECODE_0__(0xb7)));
