function __DECODE_0__(bVpHuJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bVpHuJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xd4)) / 0x1 + -parseInt(__DECODE_0__(0xda)) / 0x2 * (-parseInt(__DECODE_0__(0xd3)) / 0x3) + parseInt(__DECODE_0__(0xd9)) / 0x4 * (parseInt(__DECODE_0__(0xd2)) / 0x5) + -parseInt(__DECODE_0__(0xd8)) / 0x6 + -parseInt(__DECODE_0__(0xd1)) / 0x7 + -parseInt(__DECODE_0__(0xd5)) / 0x8 * (-parseInt(__DECODE_0__(0xdf)) / 0x9) + -parseInt(__DECODE_0__(0xdc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x811eb);
function __STRING_ARRAY__() {
  const _0x238556 = ['1085594ZPrAzn', 'split', '7139100bYYRNe', 'readFileSync', 'log', '1648827IWkDlL', '254408rqYlBH', '2582200LFnwEV', '3IdARIG', '979111snCanK', '8YQdyzS', 'map', '/dev/stdin', '5654532pSfMsM', '4wXGkYj'];
  __STRING_ARRAY__ = function () {
    return _0x238556;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const In = input[__DECODE_0__(0xdb)]('\x20')[__DECODE_0__(0xd6)](n => Number(n));
  const o1 = In[0x0] > In[0x1] ? 0x0 : In[0x1] / In[0x0];
  console[__DECODE_0__(0xde)](o1 >= In[0x2] ? In[0x2] : o1);
};
main(require('fs')[__DECODE_0__(0xdd)](__DECODE_0__(0xd7), 'utf8'));
