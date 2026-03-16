(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b4)) / 0x1 * (-parseInt(__DECODE_0__(0x1bf)) / 0x2) + parseInt(__DECODE_0__(0x1bc)) / 0x3 * (-parseInt(__DECODE_0__(0x1be)) / 0x4) + -parseInt(__DECODE_0__(0x1ba)) / 0x5 * (parseInt(__DECODE_0__(0x1b3)) / 0x6) + parseInt(__DECODE_0__(0x1b8)) / 0x7 + -parseInt(__DECODE_0__(0x1b7)) / 0x8 + parseInt(__DECODE_0__(0x1bd)) / 0x9 + parseInt(__DECODE_0__(0x1b9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe02fa);
function Main(input) {
  const numbers = input['split']('\x20')[__DECODE_0__(0x1b5)](n => Number(n));
  const a = numbers[0x0];
  const b = numbers[0x1];
  const c = numbers[0x2];
  if (a === b) {
    console[__DECODE_0__(0x1bb)](c);
  } else {
    if (b === c) {
      console['log'](a);
    } else {
      console[__DECODE_0__(0x1bb)](b);
    }
  }
}
function __STRING_ARRAY__() {
  const _0x4360e6 = ['14919hIpZVl', '253440FqtbdX', '976iBPacE', '2rDdfLa', '4555374sCciTv', '1205489oprJnl', 'map', '/dev/stdin', '1959464uqImYN', '5162976OLsZAA', '11646230tprujc', '5hBFiUx', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4360e6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BdBqDn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BdBqDn, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1b6), 'utf8'));
