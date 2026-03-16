const a0_0x41d42f = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x3774be = ['readFileSync', '186xPVUhd', '2fLazxw', '1427049YKztCR', '136598EPLwyP', '569239lFZlKm', '9575109tIrxfH', 'utf8', '3748bkQutW', '23545550OWdpMR', '/dev/stdin', 'log', 'split', '155HyoDkp', '381992aThNFx'];
  __STRING_ARRAY__ = function () {
    return _0x3774be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x1eb507 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1eb507(0x1e6)) / 0x1 * (parseInt(_0x1eb507(0x1f2)) / 0x2) + -parseInt(_0x1eb507(0x1f3)) / 0x3 + -parseInt(_0x1eb507(0x1e9)) / 0x4 * (-parseInt(_0x1eb507(0x1ee)) / 0x5) + -parseInt(_0x1eb507(0x1f1)) / 0x6 * (parseInt(_0x1eb507(0x1f4)) / 0x7) + -parseInt(_0x1eb507(0x1ef)) / 0x8 + -parseInt(_0x1eb507(0x1e7)) / 0x9 + parseInt(_0x1eb507(0x1ea)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb9afe);
function compareFunc(a, b) {
  return a - b;
}
function __DECODE_0__(flIGwf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(flIGwf, key);
}
function main(input) {
  const _0x169867 = __DECODE_0__;
  let args = input[_0x169867(0x1ed)](/\n/);
  let books = [...args[0x1][_0x169867(0x1ed)](/\s/), ...args[0x2]['split'](/\s/)];
  let time = args[0x0][_0x169867(0x1ed)](/\s/)[0x2];
  let result = 0x0;
  books['sort'](compareFunc);
  for (let i = 0x0; i < books['length']; i++) {
    if (time >= books[i] * 0x1) {
      time -= books[i];
      result++;
    }
  }
  console[_0x169867(0x1ec)](result);
}
main(require('fs')[a0_0x41d42f(0x1f0)](a0_0x41d42f(0x1eb), a0_0x41d42f(0x1e8)));
