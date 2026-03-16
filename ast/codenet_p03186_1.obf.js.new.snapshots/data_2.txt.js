'use strict';

function __STRING_ARRAY__() {
  const _0x1d3e67 = ['map', '24YKQQSL', '42bsXsKf', '206710ktUQvy', '4013766bqhAjW', '1521562yrhEef', '1611OwWkrH', 'split', 'trim', '5622432XOSkgJ', '925722ZlvBtb', '876985goQFWN', '/dev/stdin', '137556vBnuGH', 'log', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x1d3e67;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x192)) / 0x1 + -parseInt(__DECODE_0__(0x18d)) / 0x2 + -parseInt(__DECODE_0__(0x18c)) / 0x3 + -parseInt(__DECODE_0__(0x189)) / 0x4 * (-parseInt(__DECODE_0__(0x193)) / 0x5) + -parseInt(__DECODE_0__(0x185)) / 0x6 * (parseInt(__DECODE_0__(0x18a)) / 0x7) + -parseInt(__DECODE_0__(0x191)) / 0x8 + parseInt(__DECODE_0__(0x18e)) / 0x9 * (parseInt(__DECODE_0__(0x18b)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd8b9a);
function Main(input) {
  input = input[__DECODE_0__(0x190)]()[__DECODE_0__(0x18f)]('\x20')[__DECODE_0__(0x188)](Number);
  let badKusuri = input[0x0];
  let goodKusuri = input[0x1];
  let goodPoison = input[0x2];
  for (; goodKusuri > 0x0 && goodPoison > 0x0;) {
    goodKusuri--;
    goodPoison--;
  }
  if (goodPoison == 0x0) {
    goodKusuri = 0x0;
  } else {
    for (; badKusuri > 0x0 && goodPoison > 0x0;) {
      badKusuri--;
      goodPoison--;
    }
  }
  if (goodPoison > 0x0) {
    goodPoison--;
  }
  console[__DECODE_0__(0x186)](input[0x1] + input[0x2] - (goodKusuri + goodPoison));
}
function __DECODE_0__(slwJhb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x184;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(slwJhb, key);
}
Main(require('fs')[__DECODE_0__(0x187)](__DECODE_0__(0x184), 'utf8'));
