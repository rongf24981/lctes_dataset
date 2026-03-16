'use strict';

const a0_0x1a10c1 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x237b60 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x237b60(0x9a)) / 0x1 * (parseInt(_0x237b60(0x95)) / 0x2) + -parseInt(_0x237b60(0x99)) / 0x3 * (parseInt(_0x237b60(0x91)) / 0x4) + -parseInt(_0x237b60(0x96)) / 0x5 + parseInt(_0x237b60(0x9b)) / 0x6 * (-parseInt(_0x237b60(0x8f)) / 0x7) + parseInt(_0x237b60(0x90)) / 0x8 + -parseInt(_0x237b60(0x9e)) / 0x9 + parseInt(_0x237b60(0x94)) / 0xa;
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
  const _0x5b80fd = __DECODE_0__;
  const input = s[_0x5b80fd(0x92)](/\n/g, '')[_0x5b80fd(0x8d)]('');
  let words = [];
  input[_0x5b80fd(0x98)]((x, i, self) => {
    const _0x4aff69 = _0x5b80fd;
    if (self[_0x4aff69(0x9d)](x) === i) {
      words[_0x4aff69(0x93)]({
        'word': x,
        'counter': 0x1
      });
    } else {
      words[_0x4aff69(0x98)](y => {
        const _0x2b9863 = _0x4aff69;
        if (x === y['word']) {
          y[_0x2b9863(0x9c)] += 0x1;
        }
      });
    }
  });
  const result = words['every'](x => x[_0x5b80fd(0x9c)] % 0x2 === 0x0) ? _0x5b80fd(0x97) : 'No';
  console[_0x5b80fd(0x8c)](result);
}
main(require('fs')[a0_0x1a10c1(0x8e)]('/dev/stdin', 'utf8'));
