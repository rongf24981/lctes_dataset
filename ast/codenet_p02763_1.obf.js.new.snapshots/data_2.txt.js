'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xea)) / 0x1 + -parseInt(__DECODE_0__(0xdf)) / 0x2 * (parseInt(__DECODE_0__(0xde)) / 0x3) + -parseInt(__DECODE_0__(0xe0)) / 0x4 * (parseInt(__DECODE_0__(0xe7)) / 0x5) + -parseInt(__DECODE_0__(0xef)) / 0x6 + parseInt(__DECODE_0__(0xed)) / 0x7 * (parseInt(__DECODE_0__(0xec)) / 0x8) + parseInt(__DECODE_0__(0xe5)) / 0x9 * (-parseInt(__DECODE_0__(0xe6)) / 0xa) + parseInt(__DECODE_0__(0xe9)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8a06f);
function __STRING_ARRAY__() {
  const _0x123b09 = ['5788UoUkqw', 'trim', 'readFileSync', 'utf8', 'split', '999vQajFD', '31370lUMfaW', '165JZyVca', '/dev/stdin', '27592939agXeyb', '38925ImVEef', 'log', '987416IVkwEc', '14zaCBoJ', 'slice', '4722384EmCLiB', '51bAwkYE', '113882zAQzYZ'];
  __STRING_ARRAY__ = function () {
    return _0x123b09;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(hWLvTe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hWLvTe, key);
}
function main(input) {
  let n = parseInt(input[0x0]);
  let s = input[0x1];
  let q_l = parseInt(input[0x2]);
  let q = [];
  for (let j = 0x0; j < q_l; j++) {
    let kari = input[j + 0x3][__DECODE_0__(0xe1)]()[__DECODE_0__(0xe4)]('\x20');
    q[j] = parseInt(kari[0x0]);
    if (q[j] === 0x1) {
      let i = parseInt(kari[0x1]);
      let c = kari[0x2];
      let str1 = s[__DECODE_0__(0xee)](0x0, i - 0x1);
      let str2 = s[__DECODE_0__(0xee)](i);
      s = str1 + c + str2;
    } else {
      let l = parseInt(kari[0x1]);
      let r = parseInt(kari[0x2]);
      let str = s[__DECODE_0__(0xee)](l - 0x1, r);
      let list = {};
      let counter = 0x0;
      for (let i = 0x0; i < str['length']; i++) {
        if (list[str[i]] === undefined) {
          counter++;
          list[str[i]] = !![];
        }
      }
      console[__DECODE_0__(0xeb)](counter);
    }
  }
}
main(require('fs')[__DECODE_0__(0xe2)](__DECODE_0__(0xe8), __DECODE_0__(0xe3))[__DECODE_0__(0xe1)]()['split']('\x0a'));
