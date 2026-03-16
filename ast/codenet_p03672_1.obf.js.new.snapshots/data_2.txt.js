'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x15f)) / 0x1 + parseInt(__DECODE_0__(0x15a)) / 0x2 + -parseInt(__DECODE_0__(0x15d)) / 0x3 + parseInt(__DECODE_0__(0x159)) / 0x4 + -parseInt(__DECODE_0__(0x14f)) / 0x5 + -parseInt(__DECODE_0__(0x157)) / 0x6 + -parseInt(__DECODE_0__(0x15c)) / 0x7 * (-parseInt(__DECODE_0__(0x156)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7ce5e);
function __DECODE_0__(pOxlCe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pOxlCe, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x151)]()['split']('\x0a');
  const S = arg[0x0]['split']('');
  if (S[__DECODE_0__(0x155)] === 0x2) {
    console['log'](0x1);
    return;
  }
  for (let i = 0x0; i < S[__DECODE_0__(0x155)]; i++) {
    S[__DECODE_0__(0x153)]();
    let mid = Math[__DECODE_0__(0x15e)](S[__DECODE_0__(0x155)] / 0x2);
    if (S[__DECODE_0__(0x152)](0x0, mid)['join']('') === S[__DECODE_0__(0x152)](mid, S['length'] + 0x1)[__DECODE_0__(0x150)]('')) {
      console[__DECODE_0__(0x15b)](S[__DECODE_0__(0x155)]);
      return;
    }
  }
};
main(require('fs')[__DECODE_0__(0x158)]('/dev/stdin', __DECODE_0__(0x154)));
function __STRING_ARRAY__() {
  const _0x4bbf78 = ['floor', '170425SraVGv', '2734015TIrfEv', 'join', 'trim', 'slice', 'pop', 'utf8', 'length', '8oxkXlg', '1354386EuXHii', 'readFileSync', '4047044aeVBzQ', '520598oDBLKm', 'log', '4394768JDCrVq', '1336029OwRPrC'];
  __STRING_ARRAY__ = function () {
    return _0x4bbf78;
  };
  return __STRING_ARRAY__();
}
