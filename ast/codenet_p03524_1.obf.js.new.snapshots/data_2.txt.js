function __STRING_ARRAY__() {
  const _0x9d620c = ['min', 'reduce', 'split', '1259748rJJUlm', '3416038WCpXAF', '5735124Azubrm', 'readFileSync', 'log', 'max', '464814IKBeOF', '1737768BCLoWh', '/dev/stdin', '85442fkunqb', '5haAzaV', '2293120mOpSpX', '1bMpJFL', 'trim', '608mizYsG'];
  __STRING_ARRAY__ = function () {
    return _0x9d620c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bxYDrt, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bxYDrt, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xaf)) / 0x1 * (parseInt(__DECODE_0__(0xb6)) / 0x2) + parseInt(__DECODE_0__(0xb5)) / 0x3 + parseInt(__DECODE_0__(0xaa)) / 0x4 + parseInt(__DECODE_0__(0xad)) / 0x5 * (-parseInt(__DECODE_0__(0xa9)) / 0x6) + -parseInt(__DECODE_0__(0xac)) / 0x7 * (-parseInt(__DECODE_0__(0xb1)) / 0x8) + parseInt(__DECODE_0__(0xb7)) / 0x9 + parseInt(__DECODE_0__(0xae)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd2b62);
function main(input) {
  const s = input[__DECODE_0__(0xb0)]();
  let array = s[__DECODE_0__(0xb4)]('')[__DECODE_0__(0xb3)]((a, c) => {
    a[c['charCodeAt']() - 'a'['charCodeAt']()]++;
    return a;
  }, [0x0, 0x0, 0x0]);
  if (Math[__DECODE_0__(0xba)](...array) - Math[__DECODE_0__(0xb2)](...array) >= 0x2) {
    console[__DECODE_0__(0xb9)]('NO');
  } else {
    console[__DECODE_0__(0xb9)]('YES');
  }
}
main(require('fs')[__DECODE_0__(0xb8)](__DECODE_0__(0xab), 'utf8'));
