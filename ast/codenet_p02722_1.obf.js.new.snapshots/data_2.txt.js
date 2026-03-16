'use strict';

function __DECODE_0__(PyEUok, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x116;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PyEUok, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x120)) / 0x1 * (parseInt(__DECODE_0__(0x11d)) / 0x2) + -parseInt(__DECODE_0__(0x11c)) / 0x3 + parseInt(__DECODE_0__(0x11f)) / 0x4 * (parseInt(__DECODE_0__(0x11e)) / 0x5) + parseInt(__DECODE_0__(0x123)) / 0x6 + -parseInt(__DECODE_0__(0x124)) / 0x7 + -parseInt(__DECODE_0__(0x121)) / 0x8 * (parseInt(__DECODE_0__(0x125)) / 0x9) + parseInt(__DECODE_0__(0x127)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3f3cd);
function __STRING_ARRAY__() {
  const _0x512667 = ['266523dzUWgI', '2cbjBWQ', '941670WMLnmW', '4GUbwJG', '489997QodEaO', '1029720kjetHN', 'trim', '807336GWkgYa', '2752358iuTdPe', '18uQTBVx', 'length', '1855990WdUopX', 'sqrt', 'indexOf', 'shift', 'log', 'push', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x512667;
  };
  return __STRING_ARRAY__();
}
function arrayOfDivisors(n) {
  const divisor = new Array();
  divisor[0x0] = 0x1;
  for (let i = 0x2; i <= Math[__DECODE_0__(0x116)](n); i++) {
    if (n % i === 0x0) {
      divisor[__DECODE_0__(0x11a)](i);
    }
  }
  const p = divisor[__DECODE_0__(0x126)];
  if (Math[__DECODE_0__(0x116)](n) !== divisor[p - 0x1]) {
    divisor['push'](n / divisor[p - 0x1]);
  }
  for (let i = p - 0x2; 0x0 <= i; i--) {
    divisor[__DECODE_0__(0x11a)](n / divisor[i]);
  }
  return divisor;
}
(function main(input) {
  const n = Number(input[__DECODE_0__(0x122)]());
  const subOnly = arrayOfDivisors(n - 0x1)[__DECODE_0__(0x126)] - 0x1;
  let divIncluded = 0x0;
  const divOfN = arrayOfDivisors(n);
  divOfN[__DECODE_0__(0x118)]();
  for (let d of divOfN) {
    let n1 = n;
    do {
      n1 /= d;
    } while (n1 % d === 0x0);
    if (n1 === 0x1) {
      divIncluded++;
    } else {
      if (arrayOfDivisors(n1 - 0x1)[__DECODE_0__(0x117)](d) > -0x1) {
        divIncluded++;
      }
    }
  }
  console[__DECODE_0__(0x119)](subOnly + divIncluded);
})(require('fs')[__DECODE_0__(0x11b)]('/dev/stdin', 'utf8'));
