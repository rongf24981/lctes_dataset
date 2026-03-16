(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x164)) / 0x1 + -parseInt(__DECODE_0__(0x174)) / 0x2 * (parseInt(__DECODE_0__(0x170)) / 0x3) + -parseInt(__DECODE_0__(0x16b)) / 0x4 * (-parseInt(__DECODE_0__(0x168)) / 0x5) + -parseInt(__DECODE_0__(0x166)) / 0x6 * (-parseInt(__DECODE_0__(0x175)) / 0x7) + parseInt(__DECODE_0__(0x16f)) / 0x8 * (parseInt(__DECODE_0__(0x167)) / 0x9) + -parseInt(__DECODE_0__(0x16c)) / 0xa * (-parseInt(__DECODE_0__(0x172)) / 0xb) + -parseInt(__DECODE_0__(0x173)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5305c);
function __STRING_ARRAY__() {
  const _0xc75651 = ['3284sfYEJD', '470oKlpvj', 'utf8', 'parseInt', '886344MKAuAJ', '315843RWncMs', 'min', '9537UitdrR', '4738032LBhHYC', '4leAXFM', '16688igWpJs', 'log', '382536TkCJgb', 'split', '486sobFlT', '54vYtzIy', '2615GpBgmk', '/dev/stdin', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xc75651;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ICrNJr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x164;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ICrNJr, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x165)]('\x0a');
  inputStr = input[0x0][__DECODE_0__(0x165)]('\x20');
  const L = Number[__DECODE_0__(0x16e)](inputStr[0x0]);
  const R = Number[__DECODE_0__(0x16e)](inputStr[0x1]);
  var min = 0x7e2;
  if (L * R > 0x7e3) {
    if (R - L < 0x7e3) {
      const L2 = L % 0x7e3;
      const R2 = R % 0x7e3;
      for (var i1 = L2; i1 < R2; i1++) {
        for (var i2 = i1 + 0x1; i2 < R2 + 0x1; i2++) {
          min = Math[__DECODE_0__(0x171)](min, i1 * i2 % 0x7e3);
          if (min === 0x0) {
            break;
          }
        }
      }
      console[__DECODE_0__(0x176)](min);
    } else {
      console[__DECODE_0__(0x176)](0x0);
    }
  } else {
    console[__DECODE_0__(0x176)](L * (L + 0x1));
  }
}
Main(require('fs')[__DECODE_0__(0x16a)](__DECODE_0__(0x169), __DECODE_0__(0x16d)));
