'use strict';

function __DECODE_0__(ADvfxa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x153;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ADvfxa, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x161)) / 0x1 + -parseInt(__DECODE_0__(0x15f)) / 0x2 + parseInt(__DECODE_0__(0x155)) / 0x3 + -parseInt(__DECODE_0__(0x160)) / 0x4 * (parseInt(__DECODE_0__(0x157)) / 0x5) + parseInt(__DECODE_0__(0x159)) / 0x6 + -parseInt(__DECODE_0__(0x15a)) / 0x7 + parseInt(__DECODE_0__(0x15b)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xadf47);
const main = arg => {
  arg = arg[__DECODE_0__(0x158)]()[__DECODE_0__(0x154)]('\x0a');
  const A = parseInt(arg[0x0][__DECODE_0__(0x154)]('\x20')[0x0]);
  const B = parseInt(arg[0x0][__DECODE_0__(0x154)]('\x20')[0x0]);
  const M = parseInt(arg[0x0][__DECODE_0__(0x154)]('\x20')[0x0]);
  const freezer = arg[0x1]['split']('\x20')[__DECODE_0__(0x15c)](n => parseInt(n));
  const renzi = arg[0x2][__DECODE_0__(0x154)]('\x20')['map'](n => parseInt(n));
  const xyc = arg[__DECODE_0__(0x153)](0x3, M + 0x4);
  const minFreeze = Math[__DECODE_0__(0x156)](...freezer);
  const minRenzi = Math[__DECODE_0__(0x156)](...renzi);
  let temp = minFreeze + minRenzi;
  for (let i in xyc) {
    let x = parseInt(xyc[i][__DECODE_0__(0x154)]('\x20')[0x0]);
    let y = parseInt(xyc[i][__DECODE_0__(0x154)]('\x20')[0x1]);
    let c = parseInt(xyc[i][__DECODE_0__(0x154)]('\x20')[0x2]);
    let cost = freezer[x - 0x1] + renzi[y - 0x1] - c;
    if (cost <= temp) {
      temp = cost;
    }
  }
  console[__DECODE_0__(0x15d)](temp);
};
main(require('fs')['readFileSync'](__DECODE_0__(0x15e), 'utf8'));
function __STRING_ARRAY__() {
  const _0x10578a = ['log', '/dev/stdin', '2261618NZxzqM', '12akIzgr', '449452qyEkHr', 'slice', 'split', '1849050VGvONP', 'min', '1629445VsQHrw', 'trim', '1329024UeBtuW', '2330244UOsvRM', '14932648MtLzVo', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x10578a;
  };
  return __STRING_ARRAY__();
}
