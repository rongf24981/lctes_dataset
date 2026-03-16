(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ab)) / 0x1 * (parseInt(__DECODE_0__(0x198)) / 0x2) + parseInt(__DECODE_0__(0x1a5)) / 0x3 + parseInt(__DECODE_0__(0x1a0)) / 0x4 * (-parseInt(__DECODE_0__(0x19b)) / 0x5) + -parseInt(__DECODE_0__(0x199)) / 0x6 + -parseInt(__DECODE_0__(0x197)) / 0x7 * (parseInt(__DECODE_0__(0x1a7)) / 0x8) + parseInt(__DECODE_0__(0x19f)) / 0x9 + -parseInt(__DECODE_0__(0x1a1)) / 0xa * (-parseInt(__DECODE_0__(0x1aa)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xab631);
function __DECODE_0__(fOCKhw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x197;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fOCKhw, key);
}
function Main(input) {
  'use strict';

  const temp = input[__DECODE_0__(0x1ac)]('\x0a');
  const s = temp[__DECODE_0__(0x1a9)]()['split']();
  const q = parseInt(temp['shift']());
  const queries = temp['map'](query => query['split']('\x20'));
  let reverse_flag = 0x0;
  for (let i = 0x0; i < q; i++) {
    const query = queries[i];
    if (query['length'] == 0x1) {
      reverse_flag = (reverse_flag + 0x1) % 0x2;
    } else {
      if (query[__DECODE_0__(0x1a3)] == 0x3) {
        if (reverse_flag + parseInt(query[0x1]) % 0x2 == 0x0) {
          s[__DECODE_0__(0x19d)](query[0x2]);
        } else {
          s[__DECODE_0__(0x1a8)](query[0x2]);
        }
      }
    }
  }
  if (reverse_flag) {
    console[__DECODE_0__(0x19e)](s[__DECODE_0__(0x1a4)]()['join']('') + '\x0a');
  } else {
    console['log'](s[__DECODE_0__(0x19a)]('') + '\x0a');
  }
}
function __STRING_ARRAY__() {
  const _0x5ea24d = ['8136297VgKkvs', '887776zIwvfD', '13490TgsbQg', 'readFileSync', 'length', 'reverse', '669006yRsjvB', 'utf8', '6617392TPoYqv', 'unshift', 'shift', '12529UBuDip', '26823FDwlwU', 'split', '7UdTEMi', '8WGKFBU', '4830810ANyHLg', 'join', '5qVHKwP', '/dev/stdin', 'push', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x5ea24d;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1a2)](__DECODE_0__(0x19c), __DECODE_0__(0x1a6)));
