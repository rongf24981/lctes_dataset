(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x92)) / 0x1 + -parseInt(__DECODE_0__(0x91)) / 0x2 + parseInt(__DECODE_0__(0x90)) / 0x3 * (parseInt(__DECODE_0__(0x96)) / 0x4) + parseInt(__DECODE_0__(0x8c)) / 0x5 * (-parseInt(__DECODE_0__(0x89)) / 0x6) + -parseInt(__DECODE_0__(0x93)) / 0x7 + -parseInt(__DECODE_0__(0x8b)) / 0x8 * (-parseInt(__DECODE_0__(0x8f)) / 0x9) + parseInt(__DECODE_0__(0x8a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8359f);
function __STRING_ARRAY__() {
  const _0x35cdfe = ['240TOmaMf', 'utf8', 'split', '63yfjVDm', '3651qQzLQC', '1838286YVkMfS', '22089wWdmlw', '7397068mNzpIP', 'readFileSync', '/dev/stdin', '1380GVshLA', '16266ngcxuV', '14594890UUimrb', '848648BiTtvf'];
  __STRING_ARRAY__ = function () {
    return _0x35cdfe;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(hOjtOO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x89;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hOjtOO, key);
}
function main(input) {
  const S = input[__DECODE_0__(0x8e)]('');
  let a_idx;
  let z_idx;
  for (let i = 0x0; i < S['length']; i++) {
    if (S[i] === 'A' && !a_idx) {
      a_idx = i;
    }
    if (S[i] === 'Z') {
      z_idx = i;
    }
  }
  console['log'](z_idx - a_idx + 0x1);
}
main(require('fs')[__DECODE_0__(0x94)](__DECODE_0__(0x95), __DECODE_0__(0x8d)));
