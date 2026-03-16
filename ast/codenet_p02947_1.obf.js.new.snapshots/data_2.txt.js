function __STRING_ARRAY__() {
  const _0x776de1 = ['set', '96JytTls', 'map', 'sort', '38oRaJyK', 'readFileSync', 'length', '274041eJbUgo', 'slice', '6634744GgaGRd', '240ILKpeE', 'join', '3800636QjoNgw', '102876GHVRnj', 'get', '140kfYQIH', '29147767sRnxpr', 'utf8', '13644XwVYrP', 'has', '31763SGgFVf', '/dev/stdin', 'from'];
  __STRING_ARRAY__ = function () {
    return _0x776de1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lKDsXQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ba;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lKDsXQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1bf)) / 0x1 * (-parseInt(__DECODE_0__(0x1c6)) / 0x2) + parseInt(__DECODE_0__(0x1cf)) / 0x3 * (parseInt(__DECODE_0__(0x1c3)) / 0x4) + -parseInt(__DECODE_0__(0x1cc)) / 0x5 * (parseInt(__DECODE_0__(0x1bd)) / 0x6) + parseInt(__DECODE_0__(0x1ce)) / 0x7 + parseInt(__DECODE_0__(0x1cb)) / 0x8 + parseInt(__DECODE_0__(0x1c9)) / 0x9 * (parseInt(__DECODE_0__(0x1ba)) / 0xa) + -parseInt(__DECODE_0__(0x1bb)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71cd5);
function main(input) {
  const list = input['split']('\x0a')[__DECODE_0__(0x1ca)](0x1)[__DECODE_0__(0x1c4)](s => Array[__DECODE_0__(0x1c1)](s)[__DECODE_0__(0x1c5)]()[__DECODE_0__(0x1cd)](''));
  let totalCount = 0x0;
  const map = new Map();
  for (let i = 0x0; i < list[__DECODE_0__(0x1c8)]; i++) {
    if (!map[__DECODE_0__(0x1be)](list[i])) {
      map[__DECODE_0__(0x1c2)](list[i], 0x1);
      continue;
    }
    totalCount += map['get'](list[i]);
    map['set'](list[i], map[__DECODE_0__(0x1d0)](list[i]) + 0x1);
  }
  console['log'](totalCount);
}
main(require('fs')[__DECODE_0__(0x1c7)](__DECODE_0__(0x1c0), __DECODE_0__(0x1bc)));
