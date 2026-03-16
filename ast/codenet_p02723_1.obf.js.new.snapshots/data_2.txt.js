'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b3)) / 0x1 * (parseInt(__DECODE_0__(0x1b0)) / 0x2) + -parseInt(__DECODE_0__(0x1ad)) / 0x3 + parseInt(__DECODE_0__(0x1a9)) / 0x4 + parseInt(__DECODE_0__(0x1b1)) / 0x5 + parseInt(__DECODE_0__(0x1a8)) / 0x6 + parseInt(__DECODE_0__(0x1aa)) / 0x7 + -parseInt(__DECODE_0__(0x1ae)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d28a);
function __DECODE_0__(sDPUpZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sDPUpZ, key);
}
function main(inp) {
  let ans = 'No';
  if (inp[0x2] === inp[0x3] && inp[0x4] === inp[0x5]) {
    ans = __DECODE_0__(0x1b2);
  }
  console[__DECODE_0__(0x1ac)](ans);
}
main(require('fs')[__DECODE_0__(0x1ab)]('/dev/stdin', __DECODE_0__(0x1af)));
function __STRING_ARRAY__() {
  const _0x45edac = ['1KtCJuS', '3080400LFmPpb', '1814520BRfrCB', '2404248tLTbHN', 'readFileSync', 'log', '312471RthFrF', '8486104OuKUoa', 'utf8', '559462CVYlNd', '2578675NpzXKt', 'Yes'];
  __STRING_ARRAY__ = function () {
    return _0x45edac;
  };
  return __STRING_ARRAY__();
}
