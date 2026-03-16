'use strict';

function __STRING_ARRAY__() {
  const _0x5a7f21 = ['has', '6519887PIEJMJ', '3gCMhTE', '488976DupRff', '1281544DrHYmD', 'log', '4232980vbNSJo', 'delete', '/dev/stdin', '2003283AQWYMh', '296HdnKlO', '30lkOEbw', '52738DMuWdi', 'readFileSync', '5GNHuhP', 'add', '6829638IudaaM', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x5a7f21;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lkHKBs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lkHKBs, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1a6)) / 0x1 + -parseInt(__DECODE_0__(0x1a7)) / 0x2 + parseInt(__DECODE_0__(0x1a5)) / 0x3 * (-parseInt(__DECODE_0__(0x1a9)) / 0x4) + parseInt(__DECODE_0__(0x19f)) / 0x5 * (parseInt(__DECODE_0__(0x1a1)) / 0x6) + parseInt(__DECODE_0__(0x19d)) / 0x7 * (-parseInt(__DECODE_0__(0x19b)) / 0x8) + parseInt(__DECODE_0__(0x1ac)) / 0x9 + parseInt(__DECODE_0__(0x19c)) / 0xa * (parseInt(__DECODE_0__(0x1a4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa4204);
function main(input) {
  input = input['split'](/\n/)['map'](v => ~~v);
  let set = new Set();
  for (let i = 0x1; i < input['length']; i++) {
    if (set[__DECODE_0__(0x1a3)](input[i])) {
      set[__DECODE_0__(0x1aa)](input[i]);
    } else {
      set[__DECODE_0__(0x1a0)](input[i]);
    }
  }
  console[__DECODE_0__(0x1a8)](set['size']);
}
main(require('fs')[__DECODE_0__(0x19e)](__DECODE_0__(0x1ab), __DECODE_0__(0x1a2)));
