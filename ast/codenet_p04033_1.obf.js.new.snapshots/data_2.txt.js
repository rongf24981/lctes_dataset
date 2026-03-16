(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x172)) / 0x1 * (-parseInt(__DECODE_0__(0x17b)) / 0x2) + parseInt(__DECODE_0__(0x16c)) / 0x3 + -parseInt(__DECODE_0__(0x178)) / 0x4 + parseInt(__DECODE_0__(0x17a)) / 0x5 + parseInt(__DECODE_0__(0x16d)) / 0x6 + -parseInt(__DECODE_0__(0x171)) / 0x7 * (-parseInt(__DECODE_0__(0x173)) / 0x8) + -parseInt(__DECODE_0__(0x16b)) / 0x9 * (parseInt(__DECODE_0__(0x16a)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc77f8);
const main = input => {
  const data = input['split'](/\n|\s/)[__DECODE_0__(0x177)](a => parseInt(a, 0xa));
  const a = data[0x0];
  const b = data[0x1];
  if (a <= 0x0 && 0x0 <= b) {
    return __DECODE_0__(0x170);
  }
  if ((b - a) % 0x2 || a > 0x0) {
    return __DECODE_0__(0x16e);
  } else {
    return __DECODE_0__(0x16f);
  }
};
function __DECODE_0__(pguUUM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pguUUM, key);
}
console[__DECODE_0__(0x174)](main(require('fs')[__DECODE_0__(0x175)](__DECODE_0__(0x176), __DECODE_0__(0x179))));
function __STRING_ARRAY__() {
  const _0x4ea703 = ['2309172jYRhlS', 'utf8', '5276795PlLeuH', '106346RcRRKV', '2180jGTxOE', '79641dDNUBs', '1815249sQbEWe', '7885740mGsyYU', 'Positive', 'Negative', 'Zero', '847Zisydk', '10PgVtuN', '58216cvtYPs', 'log', 'readFileSync', '/dev/stdin', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x4ea703;
  };
  return __STRING_ARRAY__();
}
