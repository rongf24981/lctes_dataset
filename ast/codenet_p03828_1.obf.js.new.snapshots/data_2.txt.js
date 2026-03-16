'use strict';

function __STRING_ARRAY__() {
  const _0x576522 = ['57696wAGmey', 'forEach', '751428dQdyjk', 'trim', '27ZsrSon', '536448OuCWjL', '52566jKCqwz', '65830FFxScM', '/dev/stdin', 'keys', '1577800XDreFP', '1276fVZqNt', '24fllasY', '80wNnwQo', '61014OFfSwV'];
  __STRING_ARRAY__ = function () {
    return _0x576522;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(mCZyYz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mCZyYz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x191)) / 0x1 + -parseInt(__DECODE_0__(0x193)) / 0x2 + -parseInt(__DECODE_0__(0x197)) / 0x3 * (parseInt(__DECODE_0__(0x18e)) / 0x4) + -parseInt(__DECODE_0__(0x18f)) / 0x5 * (parseInt(__DECODE_0__(0x190)) / 0x6) + parseInt(__DECODE_0__(0x19b)) / 0x7 + -parseInt(__DECODE_0__(0x196)) / 0x8 * (parseInt(__DECODE_0__(0x195)) / 0x9) + -parseInt(__DECODE_0__(0x198)) / 0xa * (-parseInt(__DECODE_0__(0x18d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x31516);
const pf = (n, res) => {
  for (let i = 0x2; i <= n; i++) {
    while (n % i === 0x0) {
      n /= i;
      if (!(i in res)) {
        res[i] = 0x0;
      }
      res[i]++;
    }
  }
  return res;
};
function main(input) {
  input = Number(input[__DECODE_0__(0x194)]());
  const mod = 0x3b9aca00 + 0x7;
  let obj = {};
  let ans = 0x1;
  for (let i = 0x1; i <= input; i++) {
    obj = pf(i, obj);
  }
  Object[__DECODE_0__(0x19a)](obj)[__DECODE_0__(0x192)](n => {
    ans = ans * (obj[n] + 0x1) % mod;
  });
  console['log'](ans);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x199), 'utf8'));
