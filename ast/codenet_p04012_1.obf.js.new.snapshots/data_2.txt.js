'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x9a)) / 0x1 * (parseInt(__DECODE_0__(0x95)) / 0x2) + -parseInt(__DECODE_0__(0x99)) / 0x3 * (parseInt(__DECODE_0__(0x91)) / 0x4) + -parseInt(__DECODE_0__(0x96)) / 0x5 + parseInt(__DECODE_0__(0x9b)) / 0x6 * (-parseInt(__DECODE_0__(0x8f)) / 0x7) + parseInt(__DECODE_0__(0x90)) / 0x8 + -parseInt(__DECODE_0__(0x9e)) / 0x9 + parseInt(__DECODE_0__(0x94)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x65218);
function __DECODE_0__(OpMaGo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OpMaGo, key);
}
function __STRING_ARRAY__() {
  const _0xc03d89 = ['counter', 'indexOf', '6714000SILvIo', 'log', 'split', 'readFileSync', '1178856IjfFhm', '232408pCwztg', '251012SGfikZ', 'replace', 'push', '30774390eyrgdK', '86wXDmEQ', '1183825yLUNMb', 'Yes', 'forEach', '30fbxSAH', '17329XLpzMf', '12fdvBeM'];
  __STRING_ARRAY__ = function () {
    return _0xc03d89;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const input = s[__DECODE_0__(0x92)](/\n/g, '')[__DECODE_0__(0x8d)]('');
  let words = [];
  input[__DECODE_0__(0x98)]((x, i, self) => {
    if (self[__DECODE_0__(0x9d)](x) === i) {
      words[__DECODE_0__(0x93)]({
        'word': x,
        'counter': 0x1
      });
    } else {
      words[__DECODE_0__(0x98)](y => {
        if (x === y['word']) {
          y[__DECODE_0__(0x9c)] += 0x1;
        }
      });
    }
  });
  const result = words['every'](x => x[__DECODE_0__(0x9c)] % 0x2 === 0x0) ? __DECODE_0__(0x97) : 'No';
  console[__DECODE_0__(0x8c)](result);
}
main(require('fs')[__DECODE_0__(0x8e)]('/dev/stdin', 'utf8'));
