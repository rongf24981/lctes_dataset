function __DECODE_0__(hjctRp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xac;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hjctRp, key);
}
function __STRING_ARRAY__() {
  const _0x58f482 = ['length', '/dev/stdin', '3WmNeHb', '45xbLKNW', 'readFileSync', '14pbjHbE', 'split', '3746evyZrm', '385746dGradW', '17254611JSfLBK', '1000430IwXKod', 'utf8', '210032jPJOLn', '3865232fCSMIf', '249dXocRb', '87140xkjMTe'];
  __STRING_ARRAY__ = function () {
    return _0x58f482;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xac)) / 0x1 * (-parseInt(__DECODE_0__(0xb5)) / 0x2) + parseInt(__DECODE_0__(0xb0)) / 0x3 * (parseInt(__DECODE_0__(0xba)) / 0x4) + -parseInt(__DECODE_0__(0xb8)) / 0x5 + parseInt(__DECODE_0__(0xb6)) / 0x6 * (parseInt(__DECODE_0__(0xb3)) / 0x7) + -parseInt(__DECODE_0__(0xbb)) / 0x8 + -parseInt(__DECODE_0__(0xb1)) / 0x9 * (-parseInt(__DECODE_0__(0xad)) / 0xa) + parseInt(__DECODE_0__(0xb7)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9d23c);
function main(input) {
  input = input['trim']();
  let list = input[__DECODE_0__(0xb4)]('');
  let answer = 0x0;
  for (let i = 0x0; i < list[__DECODE_0__(0xae)]; i++) {
    if (list[i] === 'R') {
      if (answer === 0x0) {
        answer++;
      } else {
        if (list[i - 0x1] === 'R') {
          answer++;
        }
      }
    }
  }
  console['log'](answer);
}
main(require('fs')[__DECODE_0__(0xb2)](__DECODE_0__(0xaf), __DECODE_0__(0xb9)));
