function __STRING_ARRAY__() {
  const _0x1ab575 = ['log', '28SbIqUO', '70134PwocJZ', 'trim', '189NnJzjL', '32117049GuKEHb', 'length', '812720AMnaJK', '7862288MSHSdb', '1284506ztZwrQ', '1465389VHDCtt', '/dev/stdin', '394996tJkEjN'];
  __STRING_ARRAY__ = function () {
    return _0x1ab575;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x180)) / 0x1 + -parseInt(__DECODE_0__(0x17d)) / 0x2 + parseInt(__DECODE_0__(0x17e)) / 0x3 + -parseInt(__DECODE_0__(0x182)) / 0x4 * (parseInt(__DECODE_0__(0x17b)) / 0x5) + -parseInt(__DECODE_0__(0x183)) / 0x6 * (parseInt(__DECODE_0__(0x178)) / 0x7) + -parseInt(__DECODE_0__(0x17c)) / 0x8 + parseInt(__DECODE_0__(0x179)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8e79a);
function __DECODE_0__(vqPTqS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x178;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vqPTqS, key);
}
console[__DECODE_0__(0x181)]((args => {
  const s = args[__DECODE_0__(0x184)]();
  const L = s[__DECODE_0__(0x17a)];
  const p = Array(L)['fill'](0x0);
  for (let i = L; --i;) {
    p[i - 0x1] = p[i] + (s[i] === 'p');
  }
  let g = 0x0;
  let w = 0x0;
  for (let i = 0x0; i < L; i++) {
    if (s[i] === 'g') {
      if (g > p[i]) {
        g--;
        w++;
      } else {
        g++;
      }
    } else {
      g--;
    }
  }
  return '' + w;
})(require('fs')['readFileSync'](__DECODE_0__(0x17f), 'utf8')));
