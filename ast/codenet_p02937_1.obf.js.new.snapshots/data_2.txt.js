function __DECODE_0__(CzPFyj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x109;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CzPFyj, key);
}
function __STRING_ARRAY__() {
  const _0x5f536c = ['length', '7904322RQWGab', 'readFileSync', '10003iNFmoF', '101330RBcFqr', 'log', '222hPkPSS', '/dev/stdin', '4283792PoZzbc', '848692OjzzCm', '1088520wMRfJY', '1405erGeDt', '4364GaLhEI'];
  __STRING_ARRAY__ = function () {
    return _0x5f536c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x111)) / 0x1 + parseInt(__DECODE_0__(0x109)) / 0x2 + parseInt(__DECODE_0__(0x10a)) / 0x3 + parseInt(__DECODE_0__(0x10c)) / 0x4 * (-parseInt(__DECODE_0__(0x10b)) / 0x5) + -parseInt(__DECODE_0__(0x113)) / 0x6 * (-parseInt(__DECODE_0__(0x110)) / 0x7) + parseInt(__DECODE_0__(0x115)) / 0x8 + -parseInt(__DECODE_0__(0x10e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x474c2);
console[__DECODE_0__(0x112)]((args => {
  const [s, t] = args['trim']()['split']`\n`;
  const sl = s[__DECODE_0__(0x10d)];
  const tl = t[__DECODE_0__(0x10d)];
  let i = -0x1;
  let cyc = 0x0;
  T: for (let j = 0x0; j < tl; j++) {
    for (let k = i + 0x1; k < sl; k++) {
      if (s[k] === t[j]) {
        i = k;
        continue T;
      }
    }
    if (i === -0x1) {
      return '-1';
    }
    cyc++;
    i = -0x1;
    j--;
  }
  return '' + (cyc * sl + i + 0x1);
})(require('fs')[__DECODE_0__(0x10f)](__DECODE_0__(0x114), 'utf8')));
