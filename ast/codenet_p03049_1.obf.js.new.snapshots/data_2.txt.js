'use strict';

function __DECODE_0__(nFBMQG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x133;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nFBMQG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x142)) / 0x1 + -parseInt(__DECODE_0__(0x139)) / 0x2 + parseInt(__DECODE_0__(0x13a)) / 0x3 + parseInt(__DECODE_0__(0x146)) / 0x4 + parseInt(__DECODE_0__(0x137)) / 0x5 * (parseInt(__DECODE_0__(0x133)) / 0x6) + parseInt(__DECODE_0__(0x13c)) / 0x7 * (-parseInt(__DECODE_0__(0x143)) / 0x8) + parseInt(__DECODE_0__(0x13e)) / 0x9 * (-parseInt(__DECODE_0__(0x136)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9caa3);
function counter(str, seq) {
  return str[__DECODE_0__(0x135)](seq)[__DECODE_0__(0x13f)] - 0x1;
}
function __STRING_ARRAY__() {
  const _0x4064a2 = ['forEach', '1684388FtSiYZ', '6aEUHrA', 'max', 'split', '88260yXZOjO', '3475365ChUWce', 'readFileSync', '2298206UlYEtS', '2201610BlDFmg', 'charAt', '366317GDFAuV', 'utf8', '522eMOKzQ', 'length', 'shift', '/dev/stdin', '609663guPGQl', '24yTtftd', 'min'];
  __STRING_ARRAY__ = function () {
    return _0x4064a2;
  };
  return __STRING_ARRAY__();
}
function main(stdin) {
  const input = stdin[__DECODE_0__(0x135)]('\x0a');
  input[__DECODE_0__(0x140)]();
  let ans = 0x0;
  let startsB = 0x0;
  let endsA = 0x0;
  let startsBandEndsA = 0x0;
  input[__DECODE_0__(0x145)](s => {
    ans += counter(s, 'AB');
    if (s[__DECODE_0__(0x13b)](0x0) === 'B') {
      if (s[__DECODE_0__(0x13b)](s[__DECODE_0__(0x13f)] - 0x1) === 'A') {
        ++startsBandEndsA;
      } else {
        ++startsB;
      }
    } else {
      if (s[__DECODE_0__(0x13b)](s['length'] - 0x1) === 'A') {
        ++endsA;
      }
    }
  });
  const smaller = Math[__DECODE_0__(0x144)](startsB, endsA);
  const bigger = Math['max'](startsB, endsA);
  const shortage = bigger - smaller;
  let extra = Math[__DECODE_0__(0x134)](0x0, startsBandEndsA - shortage);
  if (shortage === 0x0 && extra !== 0x0) {
    --extra;
  }
  ans += smaller;
  ans += Math[__DECODE_0__(0x144)](shortage, startsBandEndsA);
  ans += extra;
  console['log'](ans);
}
main(require('fs')[__DECODE_0__(0x138)](__DECODE_0__(0x141), __DECODE_0__(0x13d)));
