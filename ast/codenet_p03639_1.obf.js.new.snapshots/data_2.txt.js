function __STRING_ARRAY__() {
  const _0x462a9d = ['44tfUZMW', '959459VXIOLM', '/dev/stdin', 'trim', '2BDwPPr', '54QPHlQO', '755010OSZhjg', '521856BXzEgU', 'utf8', '6236OXPUEO', 'split', 'log', 'map', 'readFileSync', '8277576GRchjf', '6MbJYen', '3280PQFqgK', '39873KAjdIx', '6411391YkXqvL'];
  __STRING_ARRAY__ = function () {
    return _0x462a9d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x161)) / 0x1 + -parseInt(__DECODE_0__(0x164)) / 0x2 * (-parseInt(__DECODE_0__(0x15e)) / 0x3) + -parseInt(__DECODE_0__(0x169)) / 0x4 * (-parseInt(__DECODE_0__(0x15d)) / 0x5) + -parseInt(__DECODE_0__(0x16f)) / 0x6 * (-parseInt(__DECODE_0__(0x15f)) / 0x7) + -parseInt(__DECODE_0__(0x167)) / 0x8 + parseInt(__DECODE_0__(0x165)) / 0x9 * (parseInt(__DECODE_0__(0x166)) / 0xa) + parseInt(__DECODE_0__(0x160)) / 0xb * (-parseInt(__DECODE_0__(0x16e)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x83d2d);
function __DECODE_0__(YpXFbE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YpXFbE, key);
}
console[__DECODE_0__(0x16b)]((args => {
  const [[N], a] = args[__DECODE_0__(0x163)]()[__DECODE_0__(0x16a)]`\n`[__DECODE_0__(0x16c)](r => r[__DECODE_0__(0x16a)]` `[__DECODE_0__(0x16c)](v => v | 0x0));
  let odd = 0x0;
  let p4 = 0x0;
  for (let i = 0x0; i < N; i++) {
    odd += a[i] & 0x1;
    p4 += !(a[i] % 0x4);
  }
  return odd - (odd + p4 === N) <= p4 ? 'Yes' : 'No';
})(require('fs')[__DECODE_0__(0x16d)](__DECODE_0__(0x162), __DECODE_0__(0x168))));
