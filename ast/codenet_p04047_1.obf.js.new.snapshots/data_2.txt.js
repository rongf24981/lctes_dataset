function __STRING_ARRAY__() {
  const _0x9970bd = ['10zzKEUG', '2034856ANepLA', '969270IZhnGP', '760980bxUbIl', '89048UANctP', '21mOGYyW', '479344OQBYdT', 'utf8', '/dev/stdin', 'map', 'split', '290uvRhhy', 'sort', '210783TLlfTS', 'readFileSync', '450783bhTdRj', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x9970bd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(TnVrKC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TnVrKC, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x9b)) / 0x1 + -parseInt(__DECODE_0__(0x97)) / 0x2 * (parseInt(__DECODE_0__(0x93)) / 0x3) + -parseInt(__DECODE_0__(0x98)) / 0x4 + -parseInt(__DECODE_0__(0x9a)) / 0x5 + -parseInt(__DECODE_0__(0x99)) / 0x6 + parseInt(__DECODE_0__(0x9c)) / 0x7 * (parseInt(__DECODE_0__(0x9d)) / 0x8) + parseInt(__DECODE_0__(0x95)) / 0x9 * (parseInt(__DECODE_0__(0x91)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85aed);
const main = input => {
  const data = input[__DECODE_0__(0x90)](/\n/);
  const num = data[0x0];
  const hoge = data[0x1][__DECODE_0__(0x90)](/\s/)[__DECODE_0__(0x8f)](a => parseInt(a, 0xa))[__DECODE_0__(0x92)]((a, b) => {
    if (a < b) {
      return 0x1;
    }
    if (a > b) {
      return -0x1;
    }
    return 0x0;
  });
  var res = 0x0;
  for (i = 0x0; i < num; i++) {
    res += hoge[i * 0x2 + 0x1];
  }
  console[__DECODE_0__(0x96)](res);
};
main(require('fs')[__DECODE_0__(0x94)](__DECODE_0__(0x8e), __DECODE_0__(0x9e)));
