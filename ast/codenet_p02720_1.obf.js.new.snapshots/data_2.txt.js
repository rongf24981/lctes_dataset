'use strict';

function __DECODE_0__(utQyxs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(utQyxs, key);
}
function __STRING_ARRAY__() {
  const _0x3323f9 = ['1966959VRbsyb', '6IWIbij', '404FHCjdu', '754142AVbNWX', 'log', '10XVmxuS', 'utf8', 'readFileSync', '647383wpwpDo', '1MRHLtT', '24GCrsii', 'abs', 'length', 'join', '56335YDAAQB', '1548KigZaM', '293033dNELdi', '4898313izWXRj', '1872489SISplt', 'trim', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x3323f9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1cd)) / 0x1 * (parseInt(__DECODE_0__(0x1dc)) / 0x2) + parseInt(__DECODE_0__(0x1d6)) / 0x3 + -parseInt(__DECODE_0__(0x1db)) / 0x4 * (parseInt(__DECODE_0__(0x1d2)) / 0x5) + -parseInt(__DECODE_0__(0x1da)) / 0x6 * (parseInt(__DECODE_0__(0x1d5)) / 0x7) + parseInt(__DECODE_0__(0x1ce)) / 0x8 * (-parseInt(__DECODE_0__(0x1d9)) / 0x9) + parseInt(__DECODE_0__(0x1de)) / 0xa * (-parseInt(__DECODE_0__(0x1cc)) / 0xb) + -parseInt(__DECODE_0__(0x1d3)) / 0xc * (-parseInt(__DECODE_0__(0x1d4)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x93219);
function main(input) {
  const k = parseInt(input[0x0]);
  let i = 0x1;
  let runruncounter = 0x0;
  while (!![]) {
    const j = (i + '')[__DECODE_0__(0x1d8)]('')['map'](a => parseInt(a));
    let judge = !![];
    for (let l = 0x1; l < j[__DECODE_0__(0x1d0)]; l++) {
      if (Math[__DECODE_0__(0x1cf)](j[l] - j[l - 0x1]) > 0x1) {
        judge = ![];
        if (j[l] === 0x9) {
          j[l - 0x1] += 0x1;
          j[l] = 0x0;
        } else {
          j[l] += 0x1;
        }
        i = parseInt(j[__DECODE_0__(0x1d1)](''));
        break;
      }
    }
    if (judge) {
      runruncounter++;
      if (runruncounter === k) {
        console[__DECODE_0__(0x1dd)](i);
        break;
      }
      i++;
    }
  }
}
main(require('fs')[__DECODE_0__(0x1e0)]('/dev/stdin', __DECODE_0__(0x1df))[__DECODE_0__(0x1d7)]()['split']('\x0a'));
