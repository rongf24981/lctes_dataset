function __DECODE_0__(KVWEqt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x90;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KVWEqt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x95)) / 0x1 * (parseInt(__DECODE_0__(0x9c)) / 0x2) + parseInt(__DECODE_0__(0x9f)) / 0x3 + -parseInt(__DECODE_0__(0xa0)) / 0x4 + -parseInt(__DECODE_0__(0x97)) / 0x5 + -parseInt(__DECODE_0__(0x98)) / 0x6 * (parseInt(__DECODE_0__(0x94)) / 0x7) + -parseInt(__DECODE_0__(0xa1)) / 0x8 * (-parseInt(__DECODE_0__(0x93)) / 0x9) + parseInt(__DECODE_0__(0x90)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4a369);
function main(input) {
  const inputList = input[__DECODE_0__(0x92)]('');
  const list = [];
  inputList[__DECODE_0__(0x96)](il => {
    if (!list[__DECODE_0__(0x9a)](l => l === il)) {
      list[__DECODE_0__(0x9d)](il);
    }
  });
  const result = list[__DECODE_0__(0xa2)] === 0x2 ? __DECODE_0__(0x9e) : 'No';
  console['log'](result);
}
function __STRING_ARRAY__() {
  const _0x33bb17 = ['length', '16820500OhtOEH', '/dev/stdin', 'split', '45IjlGxV', '14rEKZaX', '4AkZnEY', 'forEach', '2422765PzRovP', '1442508YaZgIa', 'readFileSync', 'some', 'utf8', '294124AuoihA', 'push', 'Yes', '250392HcLOLE', '539220mbhGxt', '363048YOnWbO'];
  __STRING_ARRAY__ = function () {
    return _0x33bb17;
  };
  return __STRING_ARRAY__();
}
;
main(require('fs')[__DECODE_0__(0x99)](__DECODE_0__(0x91), __DECODE_0__(0x9b)));
