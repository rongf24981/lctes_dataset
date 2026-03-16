'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x19e)) / 0x1 * (parseInt(__DECODE_0__(0x19a)) / 0x2) + parseInt(__DECODE_0__(0x19b)) / 0x3 * (-parseInt(__DECODE_0__(0x1a5)) / 0x4) + -parseInt(__DECODE_0__(0x197)) / 0x5 + -parseInt(__DECODE_0__(0x1a6)) / 0x6 * (parseInt(__DECODE_0__(0x193)) / 0x7) + parseInt(__DECODE_0__(0x198)) / 0x8 * (parseInt(__DECODE_0__(0x19d)) / 0x9) + parseInt(__DECODE_0__(0x195)) / 0xa * (-parseInt(__DECODE_0__(0x1a1)) / 0xb) + -parseInt(__DECODE_0__(0x1a3)) / 0xc * (-parseInt(__DECODE_0__(0x1a4)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xac0dc);
function __STRING_ARRAY__() {
  const _0x259ab7 = ['756370gKGBJe', '6262792eJHcWA', '/dev/stdin', '6GexTLP', '33CRHzXa', 'split', '9XGTnOA', '155491OEzBfN', 'readFileSync', 'utf8', '2292961VQnhKB', 'trim', '636FAORST', '586417JdpqWe', '413520uobEOO', '6DDSMaH', '8610077IAzngj', 'log', '20VfZtMx', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x259ab7;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg[__DECODE_0__(0x1a2)]()[__DECODE_0__(0x19c)]('\x0a');
  const c = arg[__DECODE_0__(0x196)](n => n[__DECODE_0__(0x19c)]('\x20')[__DECODE_0__(0x196)](l => parseInt(l)));
  for (let a1 = 0x0; a1 <= 0x64; a1++) {
    const b1 = c[0x0][0x0] - a1;
    const b2 = c[0x1][0x0] - a1;
    const b3 = c[0x2][0x0] - a1;
    for (let a2 = 0x0; a2 <= 0x64; a2++) {
      if (a2 + b1 !== c[0x0][0x1]) {
        continue;
      }
      if (a2 + b2 !== c[0x1][0x1]) {
        continue;
      }
      if (a2 + b3 !== c[0x2][0x1]) {
        continue;
      }
      for (let a3 = 0x0; a3 <= 0x64; a3++) {
        if (a3 + b1 !== c[0x0][0x2]) {
          continue;
        }
        if (a3 + b2 !== c[0x1][0x2]) {
          continue;
        }
        if (a3 + b3 !== c[0x2][0x2]) {
          continue;
        }
        console[__DECODE_0__(0x194)]('Yes');
        return;
      }
    }
  }
  console[__DECODE_0__(0x194)]('No');
};
function __DECODE_0__(ictPdJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x193;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ictPdJ, key);
}
main(require('fs')[__DECODE_0__(0x19f)](__DECODE_0__(0x199), __DECODE_0__(0x1a0)));
