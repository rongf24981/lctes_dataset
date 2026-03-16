(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x123)) / 0x1 + -parseInt(__DECODE_0__(0x11e)) / 0x2 * (-parseInt(__DECODE_0__(0x121)) / 0x3) + parseInt(__DECODE_0__(0x119)) / 0x4 * (parseInt(__DECODE_0__(0x118)) / 0x5) + -parseInt(__DECODE_0__(0x126)) / 0x6 + parseInt(__DECODE_0__(0x125)) / 0x7 * (parseInt(__DECODE_0__(0x115)) / 0x8) + parseInt(__DECODE_0__(0x11a)) / 0x9 + parseInt(__DECODE_0__(0x120)) / 0xa * (-parseInt(__DECODE_0__(0x116)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xce400);
function __STRING_ARRAY__() {
  const _0x216d8c = ['trim', '5dClPtx', '1480904qCHdth', '9703935ZzPUsr', 'utf8', 'map', 'log', '170DBSlwN', 'shift', '457570PnpBlx', '12315nGkuAk', 'yes', '516200bMsjbb', 'split', '8966944KHLwtd', '5636934hMODvE', 'readFileSync', 'forEach', '8EfwJcR', '187mdTxdl'];
  __STRING_ARRAY__ = function () {
    return _0x216d8c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OwntQE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x113;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OwntQE, key);
}
(function main() {
  const lines = require('fs')[__DECODE_0__(0x113)]('/dev/stdin', __DECODE_0__(0x11b))[__DECODE_0__(0x117)]()['split']('\x0a');
  const n1 = Number(lines[__DECODE_0__(0x11f)]());
  const arr1 = lines[__DECODE_0__(0x11f)]()[__DECODE_0__(0x124)]('\x20')[__DECODE_0__(0x11c)](Number);
  const n2 = Number(lines[__DECODE_0__(0x11f)]());
  const arr2 = lines[__DECODE_0__(0x11f)]()[__DECODE_0__(0x124)]('\x20')['map'](Number);
  const solve = (i, m) => {
    if (m == 0x0) {
      return !![];
    }
    if (i >= n1) {
      return ![];
    }
    return solve(i + 0x1, m) || solve(i + 0x1, m - arr1[i]);
  };
  arr2['map'](m => solve(0x0, m) ? __DECODE_0__(0x122) : 'no')[__DECODE_0__(0x114)](res => console[__DECODE_0__(0x11d)](res));
})();
